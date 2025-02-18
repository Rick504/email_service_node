import fs from 'fs';
import path from 'path';
import { sendEmail } from '../services/emailService';
 import { Request, Response, RequestHandler } from 'express';

const sendEmailHandler: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { to, subject, text, template } = req.body;

  const templatePath = path.join(__dirname, `../templates/${template}.html`);
  const htmlContent = fs.readFileSync(templatePath, 'utf8');

  let dataEmail = {
    to: to,
    subject: subject,
    text: text,
    html: htmlContent,
  };

  if (!to || !subject || !text || !template) {
    res
      .status(400)
      .json({ mensagem: 'Faltando parâmetros para o envio de e-mail!' });
    return;
  }

  try {
    await sendEmail(dataEmail);
    res.json({ mensagem: 'E-mail enviado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao enviar o e-mail!' });
  }
};

export default sendEmailHandler;
