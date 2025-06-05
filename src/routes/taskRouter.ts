import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  toggleComplete,
} from "../controllers/taskController";

const router = express.Router();

router.get("/", getAllTask);
router.post("/create", createTask);
router.put("/edit/:id", toggleComplete);
router.delete("/:id", deleteTask);

export default router;
