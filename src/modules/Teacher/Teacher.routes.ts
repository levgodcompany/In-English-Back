import { Router } from "express";
import { TeacherAssignmentsController, TeacherController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherController.findAll
);
router.get(
  "/info-basic",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherController.findAllInfoBasic
);
router.get(
  "/:idTeacher",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherController.findOne
);
router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherController.create
);
router.put(
  "/:idTeacher",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherController.update
);
router.delete(
  "/:idTeacher",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherController.delete
);
router.put(
  "/:idTeacher/level/:idLevel",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherAssignmentsController.assignLevelToTeacher
);
router.put(
  "/:idTeacher/unit/:idUnit",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherAssignmentsController.assignUnitToTeacher
);
router.put(
  "/:idTeacher/course/:idCourse",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherAssignmentsController.assignCourseToTeacher
);
router.put(
  "/:idTeacher/module/:idModule",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  TeacherAssignmentsController.assignModuleToTeacher
);

export default router;
