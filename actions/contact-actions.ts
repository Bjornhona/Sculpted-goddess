'use server';
import nodemailer from 'nodemailer';

export const sendContactMessage = async (name: string, email: string, message: string) => {
  if (!name || !email || !message || !email.includes('@')) {
    throw new Error('Invalid input');
  }

  try {
    // Check if environment variables are set
    if (!process.env.ZOHO_SMTP_HOST || !process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS) {
      throw new Error('Email configuration is missing. Please check your environment variables.');
    }

    // Send email if SMTP configured
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `Sculpted Goddess <${process.env.ZOHO_SMTP_USER}>`,
      to: 'info@graphicsbyasa.com',
      subject: `Sculpted Goddess: New message from ${name}`,
      replyTo: email,
      text: `New Sculpted Goddess Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nThis message was sent from the contact form on sculpted-goddess.vercel.app`,
      html: `<h2>New Sculpted Goddess Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p style="font-size:12px;color:#888;">This message was sent from the contact form on sculpted-goddess.vercel.app</p>`
    };

    const resultSendMail = await transporter.sendMail(mailOptions);
    return { success: true, messageId: resultSendMail.messageId };
  } catch (err) {
    console.error('Error sending contact message:', err);
    throw new Error('Could not send message');
  }
}
