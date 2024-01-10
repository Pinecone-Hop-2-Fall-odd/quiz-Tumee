import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    img_1: String,
    price_1: Number,
    quizName_1: String,
    img_2: String,
    price_2: Number,
    quizName_2: String,
});
export const QuizModel = mongoose.model("quiz", quizSchema);
