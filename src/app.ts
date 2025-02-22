import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { config } from './config/index';
import { texts } from './utils/textLogs';

dotenv.config();
import routes from './routers';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'Bem-vindo ao backend em node!' })
});

app.use(
  cors({
    origin: config.client,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token'],
    credentials: true,
  })
);

app.use('/', routes);

app.listen(config.port, () => {
   console.log(texts.start_server);
});
