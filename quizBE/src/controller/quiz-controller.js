import { QuizModel } from "../models/quiz-models.js";

export const AddQuiz = async (request, response) => {
  const body = request.body;
  if (body.url_1 == null & body.url_2 == null) {
    response.status(403).json({ message: "url empty" });
    return;
  }
  if (body.name_1 == null & body.name_2 == null ) {
    response.status(403).json({ message: "name empty" });
    return;
  }
  if (body.price_1 == null & body.price_2 == null) {
    response.status(403).json({ message: "price empty" });
    return;
  }
  const newUser = {
    img_1 : body.url_1,
    quizName_1: body.name_1,
    price_1: body.price_1,
    img_2 : body.url_2,
    quizName_2: body.name_2,
    price_2: body.price_2,
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
  const URL = await QuizModel.find({img : body.img_1, price_1 : body.price_1, price_2 : body.price_2})
  const Url1 = URL.filter((cur) => cur.img == body.img1)
  if (Url1.price_1 < Url1.price_2){
    res.status(200).json({message: "quiz_1"})
  }
  else if(Url1.price_2 < Url1.price_1){
    res.status(200).json({message: "quiz_2"})
  }
}
