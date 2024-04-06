import express from 'express';
import despesas from './routes/despesasRoutes.js';
import ganhos from './routes/ganhosRoutes.js';
import saldo from './routes/saldoRoutes.js';

const app = express();

app.use(express.json());
app.use('/despesas', despesas);
app.use('/ganhos', ganhos);
app.use('/saldo', saldo);

export default app;
