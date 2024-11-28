import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

router.use('/test', userRoutes);

export default router;
