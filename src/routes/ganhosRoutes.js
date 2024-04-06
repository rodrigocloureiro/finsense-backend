import { Router } from 'express';
import GanhoController from '../controllers/GanhoController.js';

const router = Router();

router
  .get('/', GanhoController.index)
  .get('/:id', GanhoController.show)
  .post('/', GanhoController.store)
  .put('/:id', GanhoController.update)
  .delete('/:id', GanhoController.delete);

export default router;
