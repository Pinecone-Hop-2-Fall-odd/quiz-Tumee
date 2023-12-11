import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    img: String,
    price: String,
    // email: { type: String, unique: true },
    quizName: String,
});
export const QuizModel = mongoose.model("quiz", quizSchema);
