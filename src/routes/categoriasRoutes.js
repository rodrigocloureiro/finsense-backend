import { Router } from 'express';
import CategoriaController from '../controllers/CategoriaController.js';

const routes = Router();

routes
  .get('/', CategoriaController.index)
  .get('/:id', CategoriaController.show)
  .post('/', CategoriaController.store)
  .put('/:id', CategoriaController.update)
  .delete('/:id', CategoriaController.delete);

export default routes;
