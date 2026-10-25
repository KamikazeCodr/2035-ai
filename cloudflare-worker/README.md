# AI 2035 Feedback API (Cloudflare Worker)

Production backend for the native feedback form on [2035-ai.com](https://2035-ai.com).

## Capabilities
1. **CORS Handling**: Supports `https://2035-ai.com`, `https://www.2035-ai.com`, `localhost:3000`, and Vercel preview URLs.
2. **Strict Server-Side Validation**: Sanitizes name, feedback, and conditional contact fields.
3. **Turnstile Siteverify**: Enforces server-side token validation and checks verified hostnames.
4. **Resend Email Integration**: Dispatches formatted notifications to your inbox.

---

## Deployment Instructions

### Option A: Cloudflare Dashboard (Quickest - 2 Minutes)
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages**.
2. Select your Worker: `ai2035-feedback-api`.
3. Click **Edit code** (Quick Edit).
4. Copy the entire contents of [`src/index.js`](src/index.js) and paste it into the editor, replacing the default "Hello World" starter.
5. Click **Deploy**.
6. Go to **Settings** > **Variables and Secrets** > **Secrets** and add the following:
   - `TURNSTILE_SECRET_KEY`: Your Cloudflare Turnstile secret key (from Cloudflare Turnstile dashboard).
   - `RESEND_API_KEY`: Your Resend API key (`re_...`).
   - `NOTIFICATION_RECIPIENT_EMAIL`: The email address where feedback notifications should arrive (e.g., `the.coder.zen@gmail.com`).
   - *(Optional)* `FROM_EMAIL`: Verified Resend sender address (defaults to `AI 2035 Feedback <onboarding@resend.dev>`).

---

### Option B: Wrangler CLI
```bash
cd "D:\AI-2035\AI 2035 Codebase\cloudflare-worker"
npx wrangler login

# Set required secrets (Wrangler will prompt you for the secret values securely)
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put NOTIFICATION_RECIPIENT_EMAIL

# Deploy to production
npx wrangler deploy
```

---

## Environment Secrets Reference

| Secret Name | Description | Example / Note |
|---|---|---|
| `TURNSTILE_SECRET_KEY` | Turnstile secret for server-side `/siteverify` | `0x4AAAAAA...` |
| `RESEND_API_KEY` | Resend API key | `re_123456789...` |
| `NOTIFICATION_RECIPIENT_EMAIL` | Inbox destination for feedback alerts | `the.coder.zen@gmail.com` |
| `FROM_EMAIL` (Optional) | Custom sender address | `feedback@2035-ai.com` or default `onboarding@resend.dev` |
