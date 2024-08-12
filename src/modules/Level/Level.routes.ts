import { Router } from "express";
import ExamLevelRouter from "../ExamLevel/ExamLevel.routes"
import { LevelController } from "./controllers";

const router = Router();

router.get("/", LevelController.findAll);
router.get("/info-basic", LevelController.findAllInfoBasic);
router.post("/", LevelController.create);
router.put("/:idLevel", LevelController.update);
router.get("/:idLevel", LevelController.findOne);
router.delete("/:idLevel", LevelController.delete);
router.use("/exams", ExamLevelRouter)

export default router