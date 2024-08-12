import { Router } from "express";
import { TeacherAssignmentsController, TeacherController } from "./controllers";

const router = Router();

router.get("/", TeacherController.findAll);
router.get("/info-basic", TeacherController.findAllInfoBasic);
router.get("/:idTeacher", TeacherController.findOne);
router.post("/", TeacherController.create);
router.put("/:idTeacher", TeacherController.update);
router.delete("/:idTeacher", TeacherController.delete);
router.put(
  "/:idTeacher/level/:idLevel",
  TeacherAssignmentsController.assignLevelToTeacher
);
router.put(
  "/:idTeacher/unit/:idUnit",
  TeacherAssignmentsController.assignUnitToTeacher
);
router.put(
  "/:idTeacher/course/:idCourse",
  TeacherAssignmentsController.assignCourseToTeacher
);
router.put(
  "/:idTeacher/module/:idModule",
  TeacherAssignmentsController.assignModuleToTeacher
);

export default router;
