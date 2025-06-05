import express from "express";
import taskRouter from "./routes/taskRouter";
import { connectDB } from "./db";

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
app.use(express.json());
app.use(express.static("public"));

app.use("/api/task", taskRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
