import { UserModel } from "../models/user-model.js";
export const login =async (req, res) => {
    const body = req.body;
    if (body.UserName === undefined) {
        res.status(403).json({ message: "Username required" })
        return;
    }
    if (body.password === undefined) {
        res.status(403).json({ message: "Password required" })
        return;
    }
    const data = await UserModel.find(username,password)
      const filterU = data.filter((cur) =>cur.username=== body.UserName);
      if (filterU.length === 0) {
        res.status(406).json({ message: "User not found" });
      } else {
        const user = filterU[0];
        if (user.password === body.password) {
          res.status(200).json({ user: user });
          localStorage.setItem("uid", data.user.id);  
          return;
        } else {
          res.status(405).json({ message: "Password not match" });
          return;
        }
      }
    ;
}