import express from 'express';
import { studentController } from "./Student.controller";

const router = express.Router();

router.get("/", studentController.findAll)
router.get("/:id", studentController.findOne)
router.post("/", studentController.create)
router.put("/:idStudent/level/:idLevel", studentController.assignLevelToStudent)
router.put("/:idStudent/unit/:idUnit", studentController.assignUnitToStudent)
router.put("/:idStudent/course/:idCourse", studentController.assignCourseToStudent)
router.put("/:idStudent/module/:idModule", studentController.assignModuleToStudent)
router.delete("/:idStudent/level/:idLevel", studentController.removeLevelFromStudent)
router.delete("/:id", studentController.findOne)

export default router;