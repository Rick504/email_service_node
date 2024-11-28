import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

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

app.use(
  cors({
    origin: `http://localhost:${process.env.PORT}`,
  })
);

app.listen(process.env.PORT, () => {
  console.log(
    `O aplicativo está sendo executado na porta ${process.env.PORT} !`
  );
});
