 import { Router, Request, Response } from 'express';
 import sendEmailHandler from '../controllers/sendEmail';
 import sendRefrashPassword from '../controllers/sendRefrashPassword';
 import sendActiveEmailAccount from '../controllers/sendActiveEmailAccount';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ mensagem: 'Serviço de emails no ar!' });
});

router.post('/send-email-test', sendEmailHandler);
router.post('/send-refrash-password', sendRefrashPassword);
router.post('/send-active-account', sendActiveEmailAccount); ;

export default router;
