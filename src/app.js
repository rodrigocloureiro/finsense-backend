import express from 'express';
import despesas from './routes/despesasRoutes.js';

const app = express();

app.use('/despesas', despesas);

export default app;
