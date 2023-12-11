import { UserModel } from "../models/user-model.js";

export const SignUp = async (request, response) => {
  const body = request.body;
  const newUser = {
    username: body.UserName,
    password: body.password,
  };
  const result = await UserModel.create(newUser);
  response.json({
    status: "success",
    data: result,
  });

};
// fs.readFile("./data/data.json", (readError, data) => {
//   let saveData = JSON.parse(data);
//   const newUser = {
//     id: Date.now().toString(),
//     username: body.UserName,
//     password: body.key,
//   };
//   saveData.push(newUser);
//   fs.writeFile("./data/data.json", JSON.stringify(saveData), (writeError) => {
//     if (writeError) {
//       response.json({
//         status: "error",
//       });
//     } else {
//       response.json({
//         status: "success",
//         data: saveData,
//       });
//     }
//   });
// });