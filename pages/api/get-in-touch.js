// pages/api/send-email.js
import { ServerClient } from 'postmark';

const client = new ServerClient(process.env.POSTMARK_API_KEY);

const sendEmailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    try {
      await client.sendEmail({
        From: 'oadedoyin451@stu.ui.edu.ng',
        To: 'olatejudoyin2002@gmail.com',
        Subject: 'Someone wants to stay in touch!',
        TextBody: `
        First Name: ${firstName}
        \nLast Name: ${lastName}
        \nEmail: ${email}
        \nMessage: ${message}`,
        MessageStream: 'outbound'
      });
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default sendEmailHandler;
