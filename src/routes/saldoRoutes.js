import { Router } from 'express';
import SaldoController from '../controllers/SaldoController.js';

const router = Router();

router
  .get('/:id', SaldoController.show);

export default router;
