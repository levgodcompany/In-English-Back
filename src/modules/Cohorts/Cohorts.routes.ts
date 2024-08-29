import { Router } from "express";
import {
  CohortAssignmentsController,
  CohortRelationshipsController,
  CohortsController,
} from "./Controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

const authenticate = authMiddleware.authenticateToken.bind(authMiddleware);
const authorizeTeacher = roleMiddleware.authorizeRole([Rol.TEACHER]);
// const authorizeStudentAndTeacher = roleMiddleware.authorizeRole([
//   Rol.STUDENT,
//   Rol.TEACHER,
// ]);

router.post(
  "/",
  authenticate,
  authorizeTeacher,
  CohortsController.create
);
router.get(
  "/",
  authenticate,
  authorizeTeacher,
  CohortsController.findAll
);

router.get(
  "/all-info/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortRelationshipsController.findOneAllInfo
);
router.get(
  "/cohort-unit/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortRelationshipsController.findAllCohortUnitByIdCohort
);
router.get(
  "/cohort-course/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortRelationshipsController.findAllCohortCourseByIdCohort
);
router.get(
  "/cohort-module/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortRelationshipsController.findAllCohortModuleByIdCohort
);
router.get(
  "/cohort-teacher/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortRelationshipsController.findAllCohortTeacherByIdCohort
);
router.get(
  "/cohort-student/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortRelationshipsController.findAllCohortStudentByIdCohort
);

router.get(
  "/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortsController.findOne
);
router.put(
  "/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortsController.update
);
router.delete(
  "/:idCohort",
  authenticate,
  authorizeTeacher,
  CohortsController.delete
);

router.put(
  "/assign/:idCohort/teacher/:idTeacher",
  authenticate,
  authorizeTeacher,
  CohortAssignmentsController.assignTeacherToCohort
);
router.put(
  "/assign/:idCohort/unit/:idUnit",
  authenticate,
  authorizeTeacher,
  CohortAssignmentsController.assignUnitToCohort
);
router.put(
  "/assign/:idCohort/course/:idCourse",
  authenticate,
  authorizeTeacher,
  CohortAssignmentsController.assignCourseToCohort
);
router.put(
  "/assign/:idCohort/module/:idModule",
  authenticate,
  authorizeTeacher,
  CohortAssignmentsController.assignModuleToCohort
);
router.put(
  "/assign/:idCohort/student/:idStudent",
  authenticate,
  authorizeTeacher,
  CohortAssignmentsController.assignStudentToCohort
);

export default router;
