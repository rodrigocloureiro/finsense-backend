import { Router } from 'express';
import TransacaoController from '../controllers/TransacaoController.js';

const routes = Router();

routes
  .get('/', TransacaoController.index)
  .get('/:id', TransacaoController.show)
  .post('/', TransacaoController.store)
  .delete('/:id', TransacaoController.delete);

export default routes;
