import express from 'express';
import { studentController } from "./Student.controller";

const router = express.Router();

router.get("/", studentController.findAll)
router.get("/:id", studentController.findOne)
router.post("/", studentController.create)
router.put("/:idStudent/course/:idCourse", studentController.addCourseToStudent)
router.put("/:idStudent/level/:idLevel", studentController.assignLevelToStudent)
router.delete("/:idStudent/level/:idLevel", studentController.removeLevelFromStudent)
router.delete("/:id", studentController.findOne)

export default router;