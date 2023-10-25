import * as express from 'express';
import axios from 'axios';
import * as cors from 'cors';
import productsRouter from './src/productsService/productsService';
import ordersRouter from './src/ordersService/ordersService';
import userDataRouter from './src/userService/userData';
import authControllerRouter from './src/authService/authController';
import cartRouter from './src/cartService/cartService';
import mongoose from 'mongoose';
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;


app.use(express.json());
app.use(cors());



app.use('/api/user', userDataRouter);
app.use('/api/products', productsRouter);
app.use('/api/auth', authControllerRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/cart', cartRouter);

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.7sh1hv2.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to database');
});


app.listen(PORT || 3001, () => {
    console.log(`Server is running on port ${PORT}`);
});
