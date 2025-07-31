import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Criar transporter
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ba329638bfa392",
    pass: "722cbc71aa4d04"
  },
});

// Função simples para enviar email
export async function sendEmail(to: string, subject: string, message: string): Promise<boolean> {
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: to,
      subject: subject,
      text: message
    });
    
    console.log('Email enviado! ID:', info.messageId);
    return true;
  } catch (error) {
    console.error('❌ Erro:', error instanceof Error ? error.message : 'Erro desconhecido');
    return false;
  }
}