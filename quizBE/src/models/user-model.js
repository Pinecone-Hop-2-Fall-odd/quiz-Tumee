import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    createdOn: Date,
});
export const UserModel = mongoose.model("user", userSchema);
