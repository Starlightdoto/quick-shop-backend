import * as express from 'express';
import axios from 'axios';
import * as cors from 'cors';
import productsRouter from './src/productsService/products';
import ordersRouter from './src/ordersService/orders';
import userDataRouter from './src/userService/userData';
import authControllerRouter from './src/authService/authController';
import cartRouter from './src/cartService/cartService';
import mongoose from 'mongoose';


const app = express();
const PORT = 3001;
const DB_NAME = 'quick-shop-db-main';

app.use(express.json());
app.use(cors());



app.use('/api/user', userDataRouter);
app.use('/api/products', productsRouter);
app.use('/api/auth', authControllerRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/cart', cartRouter);

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to database');
});


app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`);
});
