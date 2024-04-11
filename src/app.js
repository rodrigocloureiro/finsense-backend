import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.json());
// routes(app);
app.use('/finsense', routes);

export default app;
