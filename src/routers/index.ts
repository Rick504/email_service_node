import { Router } from 'express';
import emailRoutes from './emailRoutes';

const router = Router();

router.use('/', emailRoutes);

export default router;
