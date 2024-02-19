import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    quizIMG: String,
    quizName: String
});
export const QuizzModel = mongoose.model("quizz", userSchema);
