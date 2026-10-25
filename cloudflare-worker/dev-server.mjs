/**
 * AI 2035: Local Worker Dev Server
 * 
 * Runs the exact cloudflare-worker/src/index.js handler locally on port 8787.
 * Proxies standard Node HTTP requests directly into worker.fetch(req, env).
 */

import http from 'http';
import worker from './src/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read local .env or .env.local if present
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  for (const f of envFiles) {
    const full = path.join(__dirname, f);
    if (fs.existsSync(full)) {
      const content = fs.readFileSync(full, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...vals] = trimmed.split('=');
          const val = vals.join('=').replace(/^["']|["']$/g, '');
          if (!process.env[key.trim()]) {
            process.env[key.trim()] = val.trim();
          }
        }
      }
    }
  }
}

loadEnv();

const PORT = process.env.PORT || 8787;
const resendKey = process.env.RESEND_API_KEY;
const isMockResend = !resendKey || process.env.MOCK_RESEND === '1';

// If running in local mock test mode without a real key
if (isMockResend) {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, opts) => {
    if (typeof url === 'string' && url.includes('api.resend.com/emails')) {
      console.log('  [Local Dev Server] Mocking Resend email delivery (status 200)');
      return new Response(JSON.stringify({ id: 'msg_local_mock_12345' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return originalFetch(url, opts);
  };
}

const env = {
  // Official Cloudflare Turnstile Always-Pass test secret key
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA',
  RESEND_API_KEY: resendKey || 'mock_resend_dev_key',
  NOTIFICATION_RECIPIENT_EMAIL: process.env.NOTIFICATION_RECIPIENT_EMAIL || 'the.coder.zen@gmail.com',
  FROM_EMAIL: process.env.FROM_EMAIL || 'AI 2035 Feedback <onboarding@resend.dev>'
};

const server = http.createServer(async (req, res) => {
  const chunks = [];
  req.on('data', chunk => chunks.push(chunk));
  req.on('end', async () => {
    const body = chunks.length > 0 ? Buffer.concat(chunks) : undefined;
    const url = `http://${req.headers.host || `127.0.0.1:${PORT}`}${req.url}`;

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (Array.isArray(v)) {
        v.forEach(val => headers.append(k, val));
      } else if (v !== undefined) {
        headers.set(k, v);
      }
    }

    if (!headers.has('CF-Connecting-IP')) {
      headers.set('CF-Connecting-IP', '127.0.0.1');
    }

    const requestInit = {
      method: req.method,
      headers: headers,
    };
    if (req.method !== 'GET' && req.method !== 'HEAD' && body) {
      requestInit.body = body;
    }

    try {
      const standardReq = new Request(url, requestInit);
      const workerResponse = await worker.fetch(standardReq, env, {});

      res.statusCode = workerResponse.status;
      workerResponse.headers.forEach((val, key) => {
        res.setHeader(key, val);
      });

      const resBody = await workerResponse.arrayBuffer();
      res.end(Buffer.from(resBody));
    } catch (err) {
      console.error('[Dev Server Error]', err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Dev server internal error: ' + err.message }));
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[AI 2035 Local Worker] Running on http://127.0.0.1:${PORT}`);
  console.log(` - Turnstile Secret: ${env.TURNSTILE_SECRET_KEY.slice(0, 10)}... (Test Secret)`);
  console.log(` - Resend Mode: ${isMockResend ? 'Local Mock Mode (Supply RESEND_API_KEY in .env.local to send live emails)' : 'LIVE Resend Dispatch'}`);
  console.log(` - Recipient: ${env.NOTIFICATION_RECIPIENT_EMAIL}`);
});
