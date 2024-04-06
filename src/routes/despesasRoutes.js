import { Router } from 'express';
import DespesaController from '../controllers/DespesaController.js';

const routes = Router();

routes
  .get('/', DespesaController.index)
  .get('/:id', DespesaController.show)
  .post('/', DespesaController.store)
  .put('/:id', DespesaController.update)
  .delete('/:id', DespesaController.delete);

export default routes;
