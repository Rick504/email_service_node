import fs from 'fs';
import path from 'path';
import { Router, Request, Response, RequestHandler } from 'express';
import { sendEmail } from '../services/emailService';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ mensagem: 'Test router funcionando!' });
});

const sendEmailHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {

  const { to, subject, text, template } = req.body;

  const templatePath = path.join(__dirname, `../templates/${template}.html`);
  const htmlContent = fs.readFileSync(templatePath, 'utf8');

  let dataEmail = {
    to: to,
    subject: subject,
    text: text,
    html: htmlContent
  }

  if (!to || !subject || !text || !template) {
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
