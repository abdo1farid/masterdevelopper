import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MailtrapClient } from 'mailtrap';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mailtrap configuration
const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

const sender = {
  email: 'hello@masterdeveloper.com',
  name: 'MasterDeveloper Waitlist',
};

// Waitlist endpoint
app.post('/api/waitlist', async (req, res) => {
  const { email } = req.body;

  // Basic validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Send notification to your email
    await client.send({
      from: sender,
      to: [{ email: process.env.NOTIFY_EMAIL || 'faridabderrahmane1@gmail.com' }],
      subject: '🎉 New Waitlist Signup',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d4ff;">New Waitlist Signup!</h2>
          <p style="font-size: 16px;"><strong>${email}</strong> wants to join the waitlist.</p>
          <p style="color: #666; font-size: 12px;">Signup time: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    // Send confirmation to subscriber
    await client.send({
      from: sender,
      to: [{ email: email }],
      subject: '✨ Welcome to MasterDeveloper Waitlist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d4ff;">Welcome to the Waitlist!</h2>
          <p>Hi there,</p>
          <p>Thank you for signing up for the MasterDeveloper waitlist. We're excited to have you on board!</p>
          <p>We'll be in touch soon with updates about our latest features and opportunities.</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Keep an eye on your inbox for upcoming announcements!</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Successfully joined the waitlist!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to process request. Please try again later.' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('✉️ Using Mailtrap for email sending');
});
