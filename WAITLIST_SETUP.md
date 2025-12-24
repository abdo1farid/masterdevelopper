# Waitlist Email Setup Guide

## Overview
The waitlist form now sends emails to notify you when someone signs up, and sends a confirmation email to the subscriber.

## Prerequisites
You'll need a **Gmail account** (or you can configure another email service).

## Setup Steps

### 1. Enable Gmail App Passwords
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** (left sidebar)
3. Scroll down to **How you sign in to Google**
4. Enable **2-Step Verification** if not already enabled
5. Go back to Security and scroll to **App passwords** (appears only if 2-Step Verification is on)
6. Select **Mail** and **Windows Computer** (or your device)
7. Google will generate a 16-character password - **copy this**

### 2. Configure Environment Variables
1. Create a `.env` file in the project root (copy from `.env.example`):
   ```
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASSWORD=your_16_char_app_password
   NOTIFY_EMAIL=your_email@example.com
   PORT=3001
   ```

2. Replace:
   - `your_gmail@gmail.com` → Your actual Gmail address
   - `your_16_char_app_password` → The password from step 1
   - `your_email@example.com` → Where to send notifications (can be the same as EMAIL_USER)

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Both Frontend and Backend
Open two terminals:

**Terminal 1 - Frontend (Vite dev server):**
```bash
npm run dev
```

**Terminal 2 - Backend (Node.js server):**
```bash
npm run dev:server
```

Or run both at once:
```bash
npm run dev:all
```

### 5. Test the Form
1. Go to `http://localhost:5173` (or your Vite port)
2. Scroll to the Hero section
3. Enter an email and click "Join Waitlist"
4. Check your NOTIFY_EMAIL inbox for the notification
5. Check the subscriber's inbox for the confirmation email

## Troubleshooting

### "Failed to connect to the backend"
- Make sure `npm run dev:server` is running on port 3001
- Check that vite.config.js has the proxy configured

### "Invalid credentials" or "535-5.7.8 Username and App password mismatch"
- Make sure you're using an **App Password**, not your regular Gmail password
- Double-check that EMAIL_USER matches your Gmail account
- Make sure 2-Step Verification is enabled on your Google Account

### Emails not sending
- Check the browser console and server logs for error messages
- Verify your internet connection
- Ensure your Gmail allows "Less secure app access" (if not using App Passwords)

## Alternative Email Services
If you prefer not to use Gmail, you can configure other email services in `server.js`:

- **SendGrid**: Update the transporter config with SendGrid SMTP
- **Mailgun**: Similar SMTP configuration
- **AWS SES**: Different transporter configuration
- See [Nodemailer documentation](https://nodemailer.com/smtp/) for other providers

## Production Deployment
When deploying to production:
1. Set environment variables on your hosting platform (Vercel, Netlify, etc.)
2. Deploy the frontend and backend separately, or use serverless functions
3. Update the API endpoint in Hero.vue if your backend is on a different domain
4. Consider rate-limiting the endpoint to prevent abuse
5. Add spam protection (reCAPTCHA) to the form for added security
