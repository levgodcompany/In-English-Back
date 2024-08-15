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

router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortsController.create
);
router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortsController.findAll
);

router.get(
  "/all-info/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortRelationshipsController.findOneAllInfo
);
router.get(
  "/cohort-unit/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortRelationshipsController.findAllCohortUnitByIdCohort
);
router.get(
  "/cohort-course/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortRelationshipsController.findAllCohortCourseByIdCohort
);
router.get(
  "/cohort-module/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortRelationshipsController.findAllCohortModuleByIdCohort
);
router.get(
  "/cohort-teacher/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortRelationshipsController.findAllCohortTeacherByIdCohort
);
router.get(
  "/cohort-student/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortRelationshipsController.findAllCohortStudentByIdCohort
);

router.get(
  "/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortsController.findOne
);
router.put(
  "/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortsController.update
);
router.delete(
  "/:idCohort",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortsController.delete
);

router.put(
  "/assign/:idCohort/teacher/:idTeacher",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortAssignmentsController.assignTeacherToCohort
);
router.put(
  "/assign/:idCohort/unit/:idUnit",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortAssignmentsController.assignUnitToCohort
);
router.put(
  "/assign/:idCohort/course/:idCourse",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortAssignmentsController.assignCourseToCohort
);
router.put(
  "/assign/:idCohort/module/:idModule",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortAssignmentsController.assignModuleToCohort
);
router.put(
  "/assign/:idCohort/student/:idStudent",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CohortAssignmentsController.assignStudentToCohort
);

export default router;
