import * as express from 'express';
import axios from 'axios';
import * as cors from 'cors';
import productsRouter from './src/productsService/products';
import ordersRouter from './src/ordersService/orders';
import userDataRouter from './src/userService/userData';
import authControllerRouter from './src/authService/authController';
import cartRouter from './src/cartService/cartService';

const app = express();
const PORT = 3001;


app.use(express.json());
app.use(cors());



app.use('/api/user', userDataRouter);
app.use('/api/products', productsRouter);
app.use('/api/auth', authControllerRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/cart', cartRouter);


app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`);
});
