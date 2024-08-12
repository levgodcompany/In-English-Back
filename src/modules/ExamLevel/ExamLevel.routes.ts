import { Router } from "express";
import { ExamLevelController } from "./controllers";

const router = Router();

router.get("/", ExamLevelController.findAll);
router.get("/level/:idLevel", ExamLevelController.findAllByIdLevel);
router.post("/", ExamLevelController.create);
router.put("/:idExam", ExamLevelController.update);
router.get("/:idExam", ExamLevelController.findOne);
router.delete("/:idExam", ExamLevelController.delete);

export default router;