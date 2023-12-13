import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    img1: String,
    price1: Number,
    // email: { type: String, unique: true },
    quizName1: String,
    img2: String,
    price2: Number,
    // email: { type: String, unique: true },
    quizName2: String,
});
export const QuizModel = mongoose.model("quiz", quizSchema);
