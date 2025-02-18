 import { Router, Request, Response, RequestHandler } from 'express';
 import sendEmailHandler from '../controllers/sendEmail';


const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ mensagem: 'Test router funcionando!' });
});

router.post('/send-email', sendEmailHandler);

export default router;
