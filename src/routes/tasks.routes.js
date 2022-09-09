import { Router } from "express";
import { GetTasks } from "../controllers/tasks.controller";

const router = Router();

router.get("/", GetTasks);


export default router;