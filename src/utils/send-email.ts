import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  pool: true,
  maxConnections: 5,
  maxMessages: Number.POSITIVE_INFINITY,
  rateLimit: 10,
  rateDelta: 1000,
})

export const sendEmail = async ({
  subject,
  html,
  text,
}: {
  subject: string;
  html: string;
  text: string;
}) => {
  try {
    const info = await transporter.sendMail({
      from: `"FlowX Contact Form" <${process.env.EMAIL_USER}>`,
      // to: "flowxapp25@gmail.com",
      to: "husamahmud@gmail.com",
      subject: subject,
      html: html,
      text: text,
    })

    console.log('Email sent successfully:', info.messageId)
    return info
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.stack)
    } else {
      console.error('Error sending email:', String(error))
    }
    throw error
  }
}
