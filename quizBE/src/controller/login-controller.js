import fs from "fs";
import { UserModel } from "../models/user-models";
import { userRouter } from "./routes/user-routes.js";

export const login =async (request, response) => {
  const body = request.body;
  const newUser = {
    id: Date.now().toString(), 
     
    username: body.UserName,
    password: body.key
  };
  fs.readFile("./data/data.json", (readError, data) => {
    let saveData = JSON.parse(data);
    const Login = saveData.map((d) => {
      const filteredUser = newUser.filter((cur) => cur.id === saveData.id);
      if (filteredUser.length === 0) {
        res.status(405).json({ message: "User not found" });
    } else {
        res.status(200).json({ user: filteredUser[0] });
    }});
    fs.writeFile("./data/data.json", JSON.stringify(Login), (writeError) => {
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