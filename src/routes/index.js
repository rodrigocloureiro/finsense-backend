import TransacaoController from '../controllers/TransacaoController.js';
import transacoes from './transacoesRoutes.js';
import saldo from './saldoRoutes.js';
import categorias from './categoriasRoutes.js';
import { Router } from 'express';

const routes = Router();

// const routes = (app) => {
//   app.use('/finsense', transacoes);
//   app.use('/saldo', saldo);
//   app.use('/categorias', categorias);
// };

routes.use('/saldo', saldo);
routes.use('/categorias', categorias);
routes.use('/', transacoes);

export default routes;
