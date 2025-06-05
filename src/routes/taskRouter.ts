import express from "express";
import {
  createTask,
  getAllTask,
  toggleComplete,
} from "../controllers/taskController";

const router = express.Router();

router.get("/", getAllTask);
router.post("/create", createTask);
router.put("/edit/:id", toggleComplete);

export default router;
