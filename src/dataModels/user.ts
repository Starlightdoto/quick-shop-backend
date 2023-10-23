import mongoose, {Schema, Document} from 'mongoose';

export const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    role: String,
});

const User = mongoose.model('User', userSchema);

export default User;