import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { config } from './config/index';
import { texts } from './utils/textLogs';
import routes from './routers';

dotenv.config();

const app = express();
app.use(express.json());

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
