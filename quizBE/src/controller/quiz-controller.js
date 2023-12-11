import { QuizModel } from "../models/quiz-models.js";
  
export const AddQuiz =async (request, response) => {
  const quiz=await QuizModel.find();
  response.json({
    status: "success",
    data: quiz,
  });
};