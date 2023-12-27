import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    img1: String,
    price1: Number,
    quizName1: String,
});
export const QuizModel = mongoose.model("quiz", quizSchema);
