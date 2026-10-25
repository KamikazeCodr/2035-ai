/**
 * AI 2035: Feedback API Cloudflare Worker
 * 
 * Production handler for native feedback submission:
 * - CORS preflight (OPTIONS) & response headers
 * - Strict server-side input validation
 * - Independent contact-field rule enforcement
 * - Cloudflare Turnstile token validation via /siteverify with remote IP
 * - Verified hostname checking against permitted website domains
 * - Resend API email dispatch using server-side secrets
 * - Proper HTTP status codes and safe error messages
 */

const ALLOWED_ORIGINS = [
  'https://2035-ai.com',
  'https://www.2035-ai.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
];

const ALLOWED_HOSTNAMES = [
  '2035-ai.com',
  'www.2035-ai.com',
  'localhost',
  '127.0.0.1',
  'example.com' // Cloudflare Turnstile official test credential hostname
];

/**
 * Generates CORS headers tailored to the incoming request Origin.
 */
function getCorsHeaders(origin) {
  const isAllowed = ALLOWED_ORIGINS.includes(origin) || (origin && origin.endsWith('.vercel.app'));
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

/**
 * Returns a standardized JSON response with CORS headers.
 */
function jsonResponse(data, status = 200, origin = null) {
  const headers = {
    'Content-Type': 'application/json',
    ...(origin ? getCorsHeaders(origin) : {})
  };
  return new Response(JSON.stringify(data), { status, headers });
}

/**
 * Escapes HTML characters for safe email template injection.
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';

    // 1. CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(origin)
      });
    }

    // Only POST is permitted
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, origin);
    }

    try {
      // 2. Content-Type check
      const contentType = request.headers.get('Content-Type') || '';
      if (!contentType.includes('application/json')) {
        return jsonResponse({ error: 'Content-Type must be application/json' }, 400, origin);
      }

      // 3. Payload parsing
      const body = await request.json().catch(() => null);
      if (!body || typeof body !== 'object') {
        return jsonResponse({ error: 'Invalid JSON request body' }, 400, origin);
      }

      const {
        name,
        feedback,
        arxivReview,
        shareContact,
        email,
        socialProfile,
        turnstileToken
      } = body;

      // 4. Server-Side Field Validation: Name
      if (!name || typeof name !== 'string' || !name.trim()) {
        return jsonResponse({ error: 'Your name or alias is required' }, 400, origin);
      }
      const trimmedName = name.trim().slice(0, 100);

      // 5. Server-Side Field Validation: Feedback
      if (!feedback || typeof feedback !== 'string' || !feedback.trim()) {
        return jsonResponse({ error: 'Feedback content is required' }, 400, origin);
      }
      const trimmedFeedback = feedback.trim();
      if (trimmedFeedback.length < 5) {
        return jsonResponse({ error: 'Feedback message must be at least 5 characters' }, 400, origin);
      }
      if (trimmedFeedback.length > 5000) {
        return jsonResponse({ error: 'Feedback message exceeds the 5,000 character limit' }, 400, origin);
      }

      // 6. Server-Side Validation: arxivReview
      const normalizedArxivReview = (typeof arxivReview === 'string' && arxivReview.toLowerCase() === 'yes') ? 'yes' : 'no';

      // 7. Enforce Contact-Field Rules Independently
      let finalShareContact = false;
      let finalEmail = null;
      let finalSocial = null;

      if (normalizedArxivReview === 'yes' && shareContact === true) {
        finalShareContact = true;
        const rawEmail = typeof email === 'string' ? email.trim() : '';
        const rawSocial = typeof socialProfile === 'string' ? socialProfile.trim() : '';

        if (!rawEmail && !rawSocial) {
          return jsonResponse({
            error: 'At least one contact method (email or social profile) is required when contact details are enabled'
          }, 400, origin);
        }

        if (rawEmail) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(rawEmail) || rawEmail.length > 120) {
            return jsonResponse({ error: 'Invalid email address format' }, 400, origin);
          }
          finalEmail = rawEmail;
        }

        if (rawSocial) {
          const urlRegex = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/i;
          if (!urlRegex.test(rawSocial) || rawSocial.length > 200) {
            return jsonResponse({ error: 'Invalid social profile or URL format' }, 400, origin);
          }
          finalSocial = rawSocial;
        }
      }

      // 8. Turnstile Token Validation via Cloudflare Siteverify
      if (!turnstileToken || typeof turnstileToken !== 'string') {
        return jsonResponse({ error: 'Security verification token is required' }, 400, origin);
      }

      const turnstileSecret = env.TURNSTILE_SECRET_KEY;
      if (!turnstileSecret) {
        console.error('[Worker Error] Missing TURNSTILE_SECRET_KEY secret in environment');
        return jsonResponse({ error: 'Server security configuration missing (TURNSTILE_SECRET_KEY)' }, 500, origin);
      }

      const clientIp = request.headers.get('CF-Connecting-IP') || '';
      const siteverifyParams = new URLSearchParams();
      siteverifyParams.append('secret', turnstileSecret);
      siteverifyParams.append('response', turnstileToken);
      if (clientIp) {
        siteverifyParams.append('remoteip', clientIp);
      }

      const siteverifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: siteverifyParams.toString()
      });

      const siteverifyData = await siteverifyRes.json().catch(() => null);

      if (!siteverifyData || !siteverifyData.success) {
        console.warn('[Worker Warn] Turnstile verification rejected:', siteverifyData ? siteverifyData['error-codes'] : 'No response');
        return jsonResponse({ error: 'Security verification failed. Please try again.' }, 403, origin);
      }

      // Check verified hostname against permitted domains
      const tokenHostname = siteverifyData.hostname;
      if (tokenHostname) {
        const isAllowedHost = ALLOWED_HOSTNAMES.includes(tokenHostname) || tokenHostname.endsWith('.vercel.app');
        if (!isAllowedHost) {
          console.warn('[Worker Warn] Turnstile hostname not permitted:', tokenHostname);
          return jsonResponse({ error: 'Security check rejected: invalid hostname' }, 403, origin);
        }
      }

      // 9. Dispatch Email via Resend
      const resendApiKey = env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error('[Worker Error] Missing RESEND_API_KEY secret in environment');
        return jsonResponse({ error: 'Server email notification service is not configured (RESEND_API_KEY)' }, 500, origin);
      }

      const recipientEmail = env.NOTIFICATION_RECIPIENT_EMAIL || 'the.coder.zen@gmail.com';
      const fromEmail = env.FROM_EMAIL || 'AI 2035 Feedback <onboarding@resend.dev>';
      const timestamp = new Date().toISOString();

      const subject = `[AI 2035] New Feedback from ${trimmedName}`;
      const plainText = [
        `AI 2035 Feedback Submission`,
        `========================================`,
        `Name/Alias: ${trimmedName}`,
        `Willing to Review Future arXiv Paper: ${normalizedArxivReview.toUpperCase()}`,
        `Contact Sharing: ${finalShareContact ? 'Yes' : 'No'}`,
        finalEmail ? `Email: ${finalEmail}` : null,
        finalSocial ? `Social Profile: ${finalSocial}` : null,
        `Submitted At (UTC): ${timestamp}`,
        ``,
        `Feedback:`,
        `----------------------------------------`,
        trimmedFeedback,
        ``,
        `========================================`,
        `Security verification passed via Cloudflare Turnstile.`
      ].filter(Boolean).join('\n');

      const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111111; background-color: #FFFFF8; margin: 0; padding: 24px; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #142119; padding: 28px 32px; border-radius: 4px; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
    h1 { font-family: "Georgia", serif; font-size: 22px; margin-top: 0; margin-bottom: 20px; color: #000000; border-bottom: 2px solid #000000; padding-bottom: 12px; }
    .row { margin-bottom: 14px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #555550; }
    .val { font-size: 15px; color: #000000; margin-top: 2px; }
    .badge { display: inline-block; padding: 3px 10px; font-size: 12px; font-weight: 700; border-radius: 3px; }
    .badge-yes { background: #e6f4ea; color: #137333; }
    .badge-no { background: #f1f3f4; color: #5f6368; }
    .feedback-box { background: #FAF9F5; border: 1px solid #e2dccf; border-left: 4px solid #1b2a22; padding: 18px; margin-top: 18px; font-size: 15px; font-family: "Georgia", serif; line-height: 1.65; color: #000000; white-space: pre-wrap; word-break: break-word; }
    .footer { font-size: 11px; color: #777770; margin-top: 24px; border-top: 1px solid #eaeaea; padding-top: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>AI 2035 &bull; Reader Feedback</h1>
    
    <div class="row">
      <div class="label">Respondent Name (or Alias)</div>
      <div class="val"><strong>${escapeHtml(trimmedName)}</strong></div>
    </div>

    <div class="row">
      <div class="label">Willing to Review Future arXiv Paper?</div>
      <div class="val">
        <span class="badge ${normalizedArxivReview === 'yes' ? 'badge-yes' : 'badge-no'}">
          ${normalizedArxivReview.toUpperCase()}
        </span>
      </div>
    </div>

    ${finalShareContact ? `
    <div class="row">
      <div class="label">Contact Details</div>
      <div class="val">
        ${finalEmail ? `<div><strong>Email:</strong> <a href="mailto:${escapeHtml(finalEmail)}">${escapeHtml(finalEmail)}</a></div>` : ''}
        ${finalSocial ? `<div><strong>Social Profile:</strong> <a href="${escapeHtml(finalSocial)}" target="_blank" rel="noopener noreferrer">${escapeHtml(finalSocial)}</a></div>` : ''}
      </div>
    </div>
    ` : ''}

    <div class="row">
      <div class="label">Feedback</div>
      <div class="feedback-box">${escapeHtml(trimmedFeedback)}</div>
    </div>

    <div class="footer">
      AI 2035 Research Platform &bull; Security verified by Cloudflare Turnstile &bull; ${timestamp}
    </div>
  </div>
</body>
</html>
`;

      const resendPayload = {
        from: fromEmail,
        to: [recipientEmail],
        reply_to: finalEmail || undefined,
        subject: subject,
        text: plainText,
        html: htmlBody
      };

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resendPayload)
      });

      if (!resendRes.ok) {
        const resendErr = await resendRes.json().catch(() => null);
        console.error('[Worker Error] Resend email delivery failed:', resendRes.status, resendErr);
        return jsonResponse({
          error: 'Email delivery failed. Please check back later or reach out via direct email.'
        }, 502, origin);
      }

      return jsonResponse({
        success: true,
        message: 'Feedback received and processed successfully'
      }, 200, origin);

    } catch (err) {
      console.error('[Worker Fatal] Unhandled exception:', err);
      return jsonResponse({ error: 'Internal server error while processing feedback' }, 500, origin);
    }
  }
};
