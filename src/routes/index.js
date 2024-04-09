import TransacaoController from '../controllers/TransacaoController.js';
import transacoes from './transacoesRoutes.js';
import saldo from './saldoRoutes.js';

const routes = (app) => {
  app.use('/finsense', transacoes);
  app.use('/saldo', saldo);
};

export default routes;
