import { QuizModel } from "../models/quiz-models.js";

export const AddQuiz = async (request, response) => {
  const body = request.body;
  if (body.url == null) {
    response.status(403).json({ message: "url empty" });
    return;
  }
  if (body.name == null) {
    response.status(403).json({ message: "name empty" });
    return;
  }
  if (body.price == null) {
    response.status(403).json({ message: "price empty" });
    return;
  }
  const newUser = {
    img: body.url,
    quizName: body.name,
    price: body.price,
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
  const URL = await QuizModel.find({img : body.img,price : body.price})
  const Url1 = URL.filter((cur) => cur.img == body.img1)
  const Url2 = URL.filter((cur) => cur.img == body.img2)
  const quiz1 = Url1[0]
  const quiz2 = Url2[0]
  if (quiz1 < quiz2){
    res.json({result: "quiz_1"})
  }
  else if(quiz2 < quiz1){
    res.json({result: "quiz_2"})
  }
}
