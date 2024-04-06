import express from 'express';
import despesas from './routes/despesasRoutes.js';
import ganhos from './routes/ganhosRoutes.js';

const app = express();

app.use('/despesas', despesas);
app.use('/ganhos', ganhos);

export default app;
