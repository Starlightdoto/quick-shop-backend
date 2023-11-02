import mongoose, {Schema, Document} from 'mongoose';


export const cartSchema = new mongoose.Schema({
    owner: String,
    items: []
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;