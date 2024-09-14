import { Router } from "express";
import { TeacherAssignmentsController, TeacherController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

const authenticate = authMiddleware.authenticateToken.bind(authMiddleware);
const authorizeTeacher = roleMiddleware.authorizeRole([Rol.TEACHER]);

router.use(authenticate);

router.get("/", authorizeTeacher, TeacherController.findAll);
router.get(
  "/info-basic",
  authorizeTeacher,
  TeacherController.findAllInfoBasic
);
router.get(
  "/:idTeacher",
  authorizeTeacher,
  TeacherController.findOne
);
router.post(
  "/",

  authorizeTeacher,
  TeacherController.create
);
router.put(
  "/:idTeacher",

  authorizeTeacher,
  TeacherController.update
);
router.delete(
  "/:idTeacher",

  authorizeTeacher,
  TeacherController.delete
);
router.put(
  "/:idTeacher/level/:idLevel",

  authorizeTeacher,
  TeacherAssignmentsController.assignLevelToTeacher
);
router.put(
  "/:idTeacher/unit/:idUnit",

  authorizeTeacher,
  TeacherAssignmentsController.assignUnitToTeacher
);
router.put(
  "/:idTeacher/course/:idCourse",

  authorizeTeacher,
  TeacherAssignmentsController.assignCourseToTeacher
);
router.put(
  "/:idTeacher/module/:idModule",

  authorizeTeacher,
  TeacherAssignmentsController.assignModuleToTeacher
);

export default router;
