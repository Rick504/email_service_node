import { sendEmail } from '../services/emailService';
import { Request, Response, RequestHandler } from 'express';
import ejs from 'ejs';
import path from 'path';

const sendRefrashPassword: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { to, link } = req.body;

  if (!to || !link) {
    res
      .status(400)
      .json({ mensagem: 'Faltando parâmetros para o envio de e-mail!' });
    return;
  }

  const templatePath = path.join(
    __dirname,
    '../templates/refrashPassword/index.ejs'
  );

  try {
    const htmlContent = await ejs.renderFile(templatePath, { link });

    const dataEmail = {
      to,
      html: htmlContent,
    };

    const response = await sendEmail(dataEmail);
    if (response) res.json({ mensagem: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao renderizar o template EJS:', error);
    res.status(500).json({ mensagem: 'Erro ao enviar o e-mail!' });
  }
};

export default sendRefrashPassword;
