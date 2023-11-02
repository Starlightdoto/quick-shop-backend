import mongoose, {Schema, Document} from 'mongoose';
import * as bcrypt from 'bcrypt';

export const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    role: String,
});

userSchema.methods.isValidPassword = async function (password: any) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (err: any) {
        return err;
    }
};

const User = mongoose.model('User', userSchema);

export default User;