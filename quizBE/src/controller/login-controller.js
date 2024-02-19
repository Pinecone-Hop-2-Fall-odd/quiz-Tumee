import { UserModel } from "../models/user-model.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const body = req.body;
  const dta = await UserModel.find()
  if (body.UserName === undefined) {
    res.status(403).json({ message: "Username empty" });
    return;
  }
  if (body.password === undefined) {
    res.status(403).json({ message: "Password empty" });
    return;
  }
  if (body.UserName === dta.username && body.password === dta.password) {
    res.status(403).json({ message: "Username wrong or password wrong" });
    return;
  }
  const data = await UserModel.find({ username: body.UserName,password: body.password})
  const filterU = data.filter((cur) => cur.username === body.UserName);
  if (!filterU) {
    res.status(406).json({ message: "User not found" });
  } else {
    const user = filterU[0];
    if (user.password === body.password) {
      const token = jwt.sign(
        { uid: filterU.id, username: filterU.username },
        "verySecretKey",
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
      return;
    } else {
      res.status(405).json({ message: "Password is wrong" });
      return;
    }
  }
};