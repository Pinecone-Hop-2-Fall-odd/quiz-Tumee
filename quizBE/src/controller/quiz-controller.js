import fs from "fs";
  
export const quiz = (request, response) => {
  fs.readFile("./data/quiz.json", (readError, data) => {
    let saveData = JSON.parse(data);
    response.json(saveData)
  });
};