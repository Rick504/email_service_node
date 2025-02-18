import fs from 'fs';
import path from 'path';
import { sendEmail } from '../services/emailService';
import ejs from 'ejs';
import { Request, Response, RequestHandler } from 'express';

const sendEmailHandler: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { to, subject, text, template, data } = req.body;

  const templatePath = path.join(__dirname, `../templates/${template}.ejs`);

  // Renderiza o template com os dados fornecidos
  ejs.renderFile(templatePath, data, {}, (err: any, htmlContent: string) => {
    if (err) {
      res.status(500).json({ mensagem: 'Erro ao renderizar o template!' });
      return;
    }

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
      sendEmail(dataEmail);
      res.json({ mensagem: 'E-mail enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao enviar o e-mail!' });
    }
  });
};

export default sendEmailHandler;
