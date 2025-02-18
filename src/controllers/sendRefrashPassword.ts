 import { sendEmail } from '../services/emailService';
 import { Request, Response, RequestHandler } from 'express';

const sendRefrashPassword: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { to, subject, text, link } = req.body;

  let dataEmail = {
    to: to,
    subject: subject,
    text: text,
    html: `<div>
                <p> Olá, </p>
                <p> Recebemos sua solicitação para efetuar login. </p>
                <p> Para concluir seu acesso, utilize o código de segurança: ${link} </p>
            </div>`,
  };

  if (!to || !subject || !text || !link) {
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

export default sendRefrashPassword;
