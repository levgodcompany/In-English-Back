import { Router } from "express";
import CohortsController from "./Cohorts.controller";

const router = Router();

router.post("/", CohortsController.create);
router.get("/", CohortsController.findAll);

router.get("/cohort-unit/:idCohort", CohortsController.findAllCohortUnitByIdCohort);
router.get("/cohort-course/:idCohort", CohortsController.findAllCohortCourseByIdCohort);
router.get("/cohort-module/:idCohort", CohortsController.findAllCohortModuleByIdCohort);
router.get("/cohort-teacher/:idCohort", CohortsController.findAllCohortTeacherByIdCohort);
router.get("/cohort-student/:idCohort", CohortsController.findAllCohortStudentByIdCohort);

router.get("/:idCohort", CohortsController.findOne);
router.put("/:idCohort", CohortsController.update);
router.delete("/:idCohort", CohortsController.delete);

router.put("/assign/:idCohort/teacher/:idTeacher", CohortsController.assignTeacherToCohort);
router.put("/assign/:idCohort/unit/:idUnit", CohortsController.assignUnitToCohort);
router.put("/assign/:idCohort/course/:idCourse", CohortsController.assignCourseToCohort);
router.put("/assign/:idCohort/module/:idModule", CohortsController.assignModuleToCohort);
router.put("/assign/:idCohort/student/:idStudent", CohortsController.assignStudentToCohort);

export default router;
