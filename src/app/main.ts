import express from 'express';
import userRouter from './api/v1/userRouter';
import productRouter from './api/v1/productRouter';
import { config } from './config';

const app = express();

app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

const PORT = config.port;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;