import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    img: String,
    price: Number,
    quizName: String,
});
export const QuizModel = mongoose.model("quiz", quizSchema);
