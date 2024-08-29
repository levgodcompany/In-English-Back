import { Router } from "express";
import { UnitController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

// Middleware combinados para reutilización
const authenticate = authMiddleware.authenticateToken.bind(authMiddleware);
const authorizeTeacher = roleMiddleware.authorizeRole([Rol.TEACHER]);
const authorizeStudentAndTeacher = roleMiddleware.authorizeRole([
  Rol.TEACHER,
  Rol.STUDENT,
]);

router.get(
  "/",
  authenticate,
  authorizeStudentAndTeacher,
  UnitController.findAll
);
router.get(
  "/info-basic",
  authenticate,
  authorizeStudentAndTeacher,
  UnitController.findAllInfoBasic
);
router.get(
  "/level/:idLevel",
  authenticate,
  authorizeStudentAndTeacher,
  UnitController.findAllByIdLevel
);

router.get(
  "/levels/:idLevel/student/:idStudent",
  authenticate,
  authorizeStudentAndTeacher,
  UnitController.findAllUnitByIdLevelAndByIdStudent
);

router.get(
  "/teachers/:idUnit",
  authenticate,
  authorizeStudentAndTeacher,
  UnitController.findAllTeacherByIdUnit
);

router.post("/", authenticate, authorizeTeacher, UnitController.create);
router.put("/:idUnit", authenticate, authorizeTeacher, UnitController.update);
router.get("/:idUnit", authenticate, authorizeTeacher, UnitController.findOne);
router.delete(
  "/:idUnit",
  authenticate,
  authorizeTeacher,
  UnitController.delete
);

export default router;
