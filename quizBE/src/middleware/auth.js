import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["token"];

  if (!token) {
    return res
      .status(403)
      .json({ success: false, message: "we haven't recieved token" });
  }
  try {
    const decoded = jwt.verify(token, "verySecretKey");
    req.user = decoded;
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "token is wrong or unactive." });
  }
  return next();
};
