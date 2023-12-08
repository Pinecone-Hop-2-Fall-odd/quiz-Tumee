import fs from "fs";
export const login = (req, res) => {
    const body = req.body;
    if (body.UserName === undefined) {
        res.status(403).json({ message: "Email required" })
        return;
    }
    if (body.password === undefined) {
        res.status(403).json({ message: "Password required" })
        return;
    }
    fs.readFile("./data/data.json", (readError, data) => {
      let saveData = JSON.parse(data);
      const filterU = body.UserName.filter((cur) =>cur=== saveData.username);
      if (filterU.length === 0) {
        res.status(406).json({ message: "User not found" });
      } else {
        const user = filterU[0];
        if (user.password === body.password) {
          res.status(200).json({ user: user });
          return;
        } else {
          res.status(405).json({ message: "Password not match" });
          return;
        }
      }
    });
}