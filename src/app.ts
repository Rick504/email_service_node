import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { config } from '../config/index';
import { texts } from './utils/textLogs';

// Routers
import routes from './routers';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/', routes);

// Rota principal
app.get('/', (req, res) => {
  res.json({ mensagem: 'Bem-vindo ao backend em node!' })
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token'
  );
  next();
});

app.use(cors({ origin: texts.localhost }));

app.listen(config.port, () => {
   console.log(texts.start_server);
});
