const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

const productsRouter = require('./productsService/products');
const ordersRouter = require('./ordersService/orders');
const userDataRouter = require('./userService/userData');
const authControllerRouter = require('./authService/authController');

app.use(express.json());
app.use(cors());



app.use('/api/user', userDataRouter);
app.use('/api/products', productsRouter);
app.use('/api/auth', authControllerRouter);
app.use('/api/orders', ordersRouter);


app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`);
});
