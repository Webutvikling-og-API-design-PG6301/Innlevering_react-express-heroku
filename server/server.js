import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ question: "first question" });
});

const server = app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + server.address().port);
});
