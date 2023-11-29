import fs from "fs";
  
export const filterQuiz = (request, response) => {
  const body = request.body;
  fs.readFile("./data/quiz.json", (readError, data) => {
    let saveData = JSON.parse(data);
    const Login = saveData.map((d) => {
      const filteredQuiz = body.filter((cur) => cur.id === saveData.id);
      if (filteredQuiz.length === 0) {
        res.status(405).json({ message: "User not found" });
    } else {
        res.status(200).json({ user: filteredQuiz[0] });
    }});
    fs.writeFile("./data/quiz.json", JSON.stringify(Login), (writeError) => {
      if (writeError) {
        response.json({
          status: "error",
        });
      } else {
        response.json({
          status: "success",
          data: saveData,
        });
      }
    });
  });
};
export const quiz = (req,res)=>{
    
}