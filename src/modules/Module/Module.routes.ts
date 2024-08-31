import { Router } from "express";
import { ModuleController, ModuleRelationController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

// Middleware combinados para reutilización
const authenticate = authMiddleware.authenticateToken.bind(authMiddleware);
const authorizeTeacher = roleMiddleware.authorizeRole([Rol.TEACHER]);
const authorizeStudentAndTeacher = roleMiddleware.authorizeRole([
  Rol.STUDENT,
  Rol.TEACHER,
]);

router.get("/", authenticate, authorizeTeacher, ModuleController.findAll);
router.get(
  "/course/:idCourse",
  authenticate,
  authorizeTeacher,
  ModuleController.findAllByIdCourse
);
router.get(
  "/info-basic",
  authenticate,
  authorizeTeacher,
  ModuleController.findAllInfoBasic
);
router.post("/", authenticate, authorizeTeacher, ModuleController.create);
router.put(
  "/:idModule",
  authenticate,
  authorizeTeacher,
  ModuleController.update
);
router.get(
  "/:idModule",
  authenticate,
  authorizeTeacher,
  ModuleController.findOne
);
router.delete(
  "/:idModule",
  authenticate,
  authorizeTeacher,
  ModuleController.delete
);

// assignacion
router.put(
  "/assig/student/:idStudent/course/:idCourse/module/:idModule",
  authenticate,
  authorizeStudentAndTeacher,
  ModuleRelationController.assigStudentToModule
);

router.get(
  "/assig/student/:idStudent",
  authenticate,
  authorizeStudentAndTeacher,
  ModuleRelationController.findAllStudentToModule
);

export default router;
