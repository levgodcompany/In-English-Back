import { Router } from "express";
import { CourseController } from "./controllers";
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
  CourseController.findAll
);
router.get(
  "/unit/:idUnit",
  authenticate,
  authorizeStudentAndTeacher,
  CourseController.findAllByIdUnit
);
router.get(
  "/info-basic",
  authenticate,
  authorizeStudentAndTeacher,
  CourseController.findAllInfoBasic
);
router.get(
  "/:idUnit/unities",
  authenticate,
  authorizeStudentAndTeacher,
  CourseController.findAllUnitiesByIdCourse
);

router.get(
  "/unit/:idUnit/student/:idStudent",
  authenticate,
  authorizeStudentAndTeacher,
  CourseController.findAllCourseByIdUnitAndIdStudent
);

router.post("/", authenticate, authorizeTeacher, CourseController.create);

router.put(
  "/:idCourse",
  authenticate,
  authorizeTeacher,
  CourseController.update
);
router.get(
  "/:idCourse",
  authenticate,
  authorizeTeacher,
  CourseController.findOne
);
router.delete(
  "/:idCourse",
  authenticate,
  authorizeTeacher,
  CourseController.delete
);

export default router;
