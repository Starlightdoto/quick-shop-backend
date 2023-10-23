import mongoose, {Schema, Document} from 'mongoose';
import {cartItemSchema} from "./cartItem";

const orderSchema = new mongoose.Schema({
    date: Date,
    owner: String,
    price: Number,
    status: String,
    items: [cartItemSchema]
});

const Order = mongoose.model('Order', orderSchema);

export default Order;