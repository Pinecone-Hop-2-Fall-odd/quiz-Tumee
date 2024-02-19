import { UserModel } from "../models/user-model.js";

export const SignUp = async (req, res) => {
  const body = req.body;
  const dta = await UserModel.find()
  if(body.email == null){
    res.status(403).json({ message: "your email is required" });
    return;
  }
  if(body.UserName == null){
    res.status(403).json({ message: "your username is required" });
    return;
  }
  if(body.password == null){
    res.status(403).json({ message: "your password is required" });
    return;
  }
  if(body.email == dta.email){
    res.status(403).json({ message: "your email is have a registration" });
    return;
  }
  const newUser = {
    username: body.UserName,
    password: body.password,
    email:body.email
  };
  const result = await UserModel.create(newUser);
  res.status(200).json({
    data: result,
    message: "success",
  });
};
