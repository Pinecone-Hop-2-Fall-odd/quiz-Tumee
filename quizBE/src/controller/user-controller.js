import { UserModel } from "../models/user-model.js";
import fs from "fs";
export const getAllUsers = async (req, res) => {
    const users_data = await UserModel.find({});
    res.status(200).json({ users: users_data })
}
export const getUser = (req, res) => {
    const params = req.params;
    const filteredUser = users.filter((cur) => cur.id === params.id);
    if (filteredUser.length === 0) {
        res.status(405).json({ message: "User not found" });
    } else {
        res.status(200).json({ user: filteredUser[0] });
    }
}
export const SignUp = (request, response) => {
  const body = request.body;
  fs.readFile("./data/data.json", (readError, data) => {
    let saveData = JSON.parse(data);
    const newUser = {
      id: Date.now().toString(),
      username: body.UserName,
      password: body.key
    };
    saveData.push(newUser);
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
  });
};