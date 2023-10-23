import mongoose, {Schema, Document} from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    quantity: Number,
    image: String,
    description: String,
    rating: Number,
    category: String,
});

interface IProduct extends Document {
    title: string,
    price: number,
    description: string,
    rating: number,
    image: string,
    category: string,
    quantity: number,
}

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;