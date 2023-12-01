import fs from "fs";

export const SignUp = (request, response) => {
  const body = request.body;
  fs.readFile("./data/data.json", (readError, data) =>{
    let saveData=JSON.parse(data);
    const newUser={
      id: Date.now().toString(),
      username: body.UserName,
      password: body.key
    }
  })
    saveData.push(NewUser);
    fs.writeFile("./data/data.json", JSON.stringify(saveData), (writeError) => {
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
})};