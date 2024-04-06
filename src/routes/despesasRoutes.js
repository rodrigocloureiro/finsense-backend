import { Router } from 'express';
import DespesaController from '../controllers/DespesaController.js';

const routes = Router();

routes
  .get('/', DespesaController.index)
  .get('/:id', DespesaController.show)
  .post('/', DespesaController.store)
  .put('/', DespesaController.update)
  .delete('/', DespesaController.delete);

export default routes;
