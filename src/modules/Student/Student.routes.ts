import express from "express";
import {
  StudentCRUDController,
  StudentEntityAssignmentController,
  StudentRelationsController,
} from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = express.Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

// Middleware combinados para reutilización
const authenticate = authMiddleware.authenticateToken.bind(authMiddleware);
const authorizeTeacher = roleMiddleware.authorizeRole([Rol.TEACHER]);
// const authorizeStudentAndTeacher = roleMiddleware.authorizeRole([
//   Rol.TEACHER,
//   Rol.STUDENT,
// ]);

router.get(
  "/info-basic",
  authenticate,
  authorizeTeacher,
  StudentRelationsController.findAllInfoBasic
);
router.get(
  "/levels",
  authenticate,
  authorizeTeacher,
  StudentRelationsController.findAllAndLevels
);

router.put(
  "/active/:idStudent/:idStatus",
  authenticate,
  authorizeTeacher,
  StudentCRUDController.updateActiveStudent
);

router.get("/", authenticate, authorizeTeacher, StudentCRUDController.findAll);
router.get(
  "/:id",
  authenticate,
  authorizeTeacher,
  StudentCRUDController.findOne
);
router.post("/", authenticate, authorizeTeacher, StudentCRUDController.create);
router.delete(
  "/:id",
  authenticate,
  authorizeTeacher,
  StudentCRUDController.delete
);

// Assign
router.put(
  "/:idStudent/level/:idLevel",
  authenticate,
  authorizeTeacher,
  StudentEntityAssignmentController.assignLevelToStudent
);
router.put(
  "/:idStudent/unit/:idUnit",
  authenticate,
  authorizeTeacher,
  StudentEntityAssignmentController.assignUnitToStudent
);
router.put(
  "/:idStudent/course/:idCourse",
  authenticate,
  authorizeTeacher,
  StudentEntityAssignmentController.assignCourseToStudent
);
router.put(
  "/:idStudent/module/:idModule",
  authenticate,
  authorizeTeacher,
  StudentEntityAssignmentController.assignModuleToStudent
);

// remove
router.delete(
  "/:idStudent/level/:idLevel",
  authenticate,
  authorizeTeacher,
  StudentEntityAssignmentController.removeLevelFromStudent
);

export default router;
