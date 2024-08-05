import { Router } from "express";
import TeacherController from "./Teacher.controller";

const router = Router();

router.get("/", TeacherController.findAll);
router.get("/:idTeacher", TeacherController.findOne);
router.post("/", TeacherController.create);
router.put("/:idTeacher", TeacherController.update);
router.delete("/:idTeacher", TeacherController.delete);
router.put("/:idTeacher/level/:idLevel", TeacherController.assignLevelToTeacher);
router.put("/:idTeacher/unit/:idUnit", TeacherController.assignUnitToTeacher);
router.put("/:idTeacher/course/:idCourse", TeacherController.assignCourseToTeacher);
router.put("/:idTeacher/module/:idModule", TeacherController.assignModuleToTeacher);

export default router;