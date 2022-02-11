import express from "express";
import path from "path";
import { randomQuestion } from "./quiz.js";

const app = express();

app.get("/api/question", (req, res) => {
  const data = randomQuestion();
  res.json(data);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + server.address().port);
});
