import { Router } from "express";
import LevelController from "./Level.controller";
import ExamLevelRouter from "../ExamLevel/ExamLevel.routes"

const router = Router();

router.get("/", LevelController.findAll);
router.post("/", LevelController.create);
router.put("/:idLevel", LevelController.update);
router.get("/:idLevel", LevelController.findOne);
router.delete("/:idLevel", LevelController.delete);
router.use("/exams", ExamLevelRouter)

export default router