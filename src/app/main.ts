import express from 'express';
import { db } from '../infrastructure/db/database';
import userRouter from './api/v1/userRouter';
import productRouter from './api/v1/productRouter';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => {
    if (process.env.NODE_ENV !== 'test') {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    }
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default app;
