import nodemailer from 'nodemailer';
import { EmailOptions } from '../interfaces/index'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '', 10),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (options: EmailOptions) => {
  const { to, subject, text, html } = options;
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    });
    console.log('E-mail enviado: ', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar e-mail: ', error);
  }
};

