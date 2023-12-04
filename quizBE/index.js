import express, { response } from "express";
import cors from "cors";
const port = 8000;
const app = express();
import { router } from "./src/router/bind-router.js";
import { Router } from "./src/router/quiz-router.js";

app.use(cors());
app.use(express.json());
app.use(router);
app.use(Router);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
