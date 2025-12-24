import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  // Basic validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Check if API key is set
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    // Send notification to your email
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.NOTIFY_EMAIL || 'faridabderrahmane1@gmail.com',
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
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
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
}
