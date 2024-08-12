import { Router } from "express";
import { CohortAssignmentsController, CohortRelationshipsController, CohortsController } from "./Controllers";

const router = Router();

router.post("/", CohortsController.create);
router.get("/", CohortsController.findAll);

router.get("/cohort-unit/:idCohort", CohortRelationshipsController.findAllCohortUnitByIdCohort);
router.get("/cohort-course/:idCohort", CohortRelationshipsController.findAllCohortCourseByIdCohort);
router.get("/cohort-module/:idCohort", CohortRelationshipsController.findAllCohortModuleByIdCohort);
router.get("/cohort-teacher/:idCohort", CohortRelationshipsController.findAllCohortTeacherByIdCohort);
router.get("/cohort-student/:idCohort", CohortRelationshipsController.findAllCohortStudentByIdCohort);

router.get("/:idCohort", CohortsController.findOne);
router.put("/:idCohort", CohortsController.update);
router.delete("/:idCohort", CohortsController.delete);

router.put("/assign/:idCohort/teacher/:idTeacher", CohortAssignmentsController.assignTeacherToCohort);
router.put("/assign/:idCohort/unit/:idUnit", CohortAssignmentsController.assignUnitToCohort);
router.put("/assign/:idCohort/course/:idCourse", CohortAssignmentsController.assignCourseToCohort);
router.put("/assign/:idCohort/module/:idModule", CohortAssignmentsController.assignModuleToCohort);
router.put("/assign/:idCohort/student/:idStudent", CohortAssignmentsController.assignStudentToCohort);

export default router;
