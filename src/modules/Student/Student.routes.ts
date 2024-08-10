import express from 'express';
import { studentController } from "./Student.controller";

const router = express.Router();

router.get("/", studentController.findAll)
router.get("/levels", studentController.findAllAndLevels)
router.get("/:id", studentController.findOne)
router.post("/", studentController.create)

// Assign
router.put("/:idStudent/level/:idLevel", studentController.assignLevelToStudent)
router.put("/:idStudent/unit/:idUnit", studentController.assignUnitToStudent)
router.put("/:idStudent/course/:idCourse", studentController.assignCourseToStudent)
router.put("/:idStudent/module/:idModule", studentController.assignModuleToStudent)

// remove
router.delete("/:idStudent/level/:idLevel", studentController.removeLevelFromStudent)

router.delete("/:id", studentController.delete)

export default router;