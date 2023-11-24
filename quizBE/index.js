import express, { response } from "express";
import cors from "cors";
const port = 8000;
const app = express();
import { router } from "./src/router/bind-router.js";

app.use(cors());
app.use(express.json());
app.use(router);
const connectDb = async () => {
  await mongoose.connect('mongodb+srv://Tum:Tumee0205@cluster0.femwxfk.mongodb.net/')
  console.log('database connected');
}

connectDb();

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
