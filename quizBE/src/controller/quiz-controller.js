import { QuizModel } from "../models/quiz-models.js";

export const AddQuiz = async (request, response) => {
  const body = request.body;
  if (body.url1 == null) {
    res.status(403).json({ message: "url empty" });
    return;
  }
  if (body.name1 == null) {
    res.status(403).json({ message: "name empty" });
    return;
  }
  if (body.price1 == null) {
    res.status(403).json({ message: "price empty" });
    return;
  }
  const newUser = {
    img1: body.url1,
    quizName1: body.name1,
    price1: body.price1,
  };
  const result = await QuizModel.create(newUser);
  response.status(200).json({
    data: result,
    message: "success",
  });
};
export const quiz = async (req, res) => {
  const quiz = await QuizModel.find({});
  res.json({
    quiz: quiz,
  });
};
export const quizF = async(req,res) => {
  const body =req.body;
  const URL = QuizModel.find(img1,price1)
  const Url1 = (await URL).filter((cur) => cur.img1 == body.img1)
  const Url2 = (await URL).filter((cur) => cur.img1 == body.img2)
  const quiz1 = Url1[0]
  const quiz2 = Url2[0]
  if (quiz1 < quiz2){
    res.json({result: "quiz_1"})
  }
  else if(quiz2 < quiz1){
    res.json({result: "quiz_2"})
  }
  else if(quiz1 == quiz2){
    res.json({result: "equal"})
  }
}
