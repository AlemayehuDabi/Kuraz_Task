import express from "express";
import { connectDB } from "./db";

const app = express();
const PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`running ${PORT}`);
});
