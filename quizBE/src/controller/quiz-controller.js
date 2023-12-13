import { QuizModel } from "../models/quiz-models.js";
  
export const AddQuiz =async (request, response) => {
  const body = request.body;
  if(body.url1 == null && body.url2 == null){
    res.status(403).json({ message: "url empty" })
        return;
  }
  if(body.name1 == null && body.name2 == null){
    res.status(403).json({ message: "name empty" })
        return;
  }
  if(body.price1 == null && body.price2 == null){
    res.status(403).json({ message: "price empty" })
        return;
  }
  const newUser = {
    img1: body.url1,
    quizName1: body.name1,
    price1: body.price1,
    img2: body.url2,
    quizName2: body.name2,
    price2: body.price2,
  };
  const result = await QuizModel.create(newUser);
  response.status(200).json({
    data: result,
    message: "success"
  });
};
  export const quiz = async (req,res)=>{
    const quiz = await QuizModel.find({})
    res.json({
      quiz: quiz,
    })
  }