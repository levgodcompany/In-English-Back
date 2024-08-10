import { Router } from "express";
import ExamUnitController from "./ExamUnit.controller";

const router = Router();

router.get("/", ExamUnitController.findAll);
router.post("/", ExamUnitController.create);
router.put("/:idExam", ExamUnitController.update);
router.get("/:idExam", ExamUnitController.findOne);
router.delete("/:idExam", ExamUnitController.delete);

export default router;