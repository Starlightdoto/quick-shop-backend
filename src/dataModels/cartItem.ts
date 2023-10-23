import mongoose, {Schema, Document} from 'mongoose';

export const cartItemSchema = new mongoose.Schema({
    count: Number,
    item: {
        category: String,
        description: String,
        image: String,
        title: String,
        price: Number,
        rating: Number,
    }
});

const CartItem = mongoose.model('Cart', cartItemSchema);

export default CartItem;