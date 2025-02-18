 import { Router, Request, Response } from 'express';
 import sendEmailHandler from '../controllers/sendEmail';
 import sendRefrashPassword from '../controllers/sendRefrashPassword';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ mensagem: 'Serviço de emails no ar!' });
});

router.post('/send-email', sendEmailHandler);
router.post('/send-refrash-password', sendRefrashPassword); ;

export default router;
