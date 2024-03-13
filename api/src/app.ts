import express from 'express';
import router from './router';
import cors from 'cors'

const app = express();

app.disable('etag');
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(router);

export default app;
