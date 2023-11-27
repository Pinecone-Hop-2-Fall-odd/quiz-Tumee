import fs from "fs";
import { UserModel } from "../models/user-models";

export const SignUp = (request, response) => {x
  const body = request.body;
    let saveData = JSON.parse(data);
      const NewUser={
        id: Date.now().toString(), 
        username: body.UserName,
        password: body.key
      }
    };
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
    });