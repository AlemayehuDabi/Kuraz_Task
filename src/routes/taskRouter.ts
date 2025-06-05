import express from "express";
import { getAllTask } from "../controllers/taskController";

const router = express.Router();

router.get("/", getAllTask);

export default router;
