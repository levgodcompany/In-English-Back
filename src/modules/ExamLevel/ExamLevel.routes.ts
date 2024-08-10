import { Router } from "express";
import ExamLevelController from "./ExamLevel.controller";

const router = Router();

router.get("/", ExamLevelController.findAll);
router.post("/", ExamLevelController.create);
router.put("/:idExam", ExamLevelController.update);
router.get("/:idExam", ExamLevelController.findOne);
router.delete("/:idExam", ExamLevelController.delete);

export default router;