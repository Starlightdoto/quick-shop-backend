import mongoose, {Schema, Document} from 'mongoose';
import {cartItemSchema} from "./cartItem";

export const cartSchema = new mongoose.Schema({
    owner: String,
    items: [cartItemSchema]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;