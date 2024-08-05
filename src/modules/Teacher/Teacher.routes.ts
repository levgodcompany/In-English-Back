import { Router } from "express";
import TeacherController from "./Teacher.controller";

const router = Router();

router.get("/", TeacherController.findAll);
router.get("/:idTeacher", TeacherController.findOne);
router.post("/", TeacherController.create);
router.put("/:idTeacher", TeacherController.update);
router.delete("/:idTeacher", TeacherController.delete);
router.put("/:idTeacher/level/:idLevel", TeacherController.assignLevelToTeacher);
router.put("/:idTeacher/unit/:idLevel", TeacherController.assignUnitToTeacher);
router.put("/:idTeacher/course/:idLevel", TeacherController.assignCourseToTeacher);
router.put("/:idTeacher/module/:idLevel", TeacherController.assignModuleToTeacher);

export default router;