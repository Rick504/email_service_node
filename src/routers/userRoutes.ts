import fs from 'fs';
import path from 'path';
import { Router, Request, Response, RequestHandler } from 'express';
import { sendEmail } from '../services/emailService';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ mensagem: 'Test router funcionando!' });
});

const sendEmailHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {

  const templatePath = path.join(__dirname, '../templates/emailTemplate.html');
  const htmlContent = fs.readFileSync(templatePath, 'utf8');

  let dataEmail = {
    to: "rick.wes1@gmail.com",
    subject: "Teste Titulo do E-mail",
    text: "Este é um e-mail de teste enviado pelo Nodemailer!",
    html: htmlContent
  }

  if (!dataEmail) {
    res.status(400).json({ mensagem: 'Faltando parâmetros para o envio de e-mail!' });
    return;
  }

  try {
    await sendEmail(dataEmail);
    res.json({ mensagem: 'E-mail enviado com sucesso!' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao enviar o e-mail!' });
  }
};

router.post('/send-email', sendEmailHandler);

export default router;
