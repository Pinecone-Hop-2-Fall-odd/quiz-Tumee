import fs from "fs";
  
export const filterQuiz = (request, response) => {
  fs.readFile("./data/quiz.json", (readError, data) => {
    let saveData = JSON.parse(data);
    response.json(saveData)
  });
};