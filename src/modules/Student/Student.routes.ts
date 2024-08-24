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

router.get(
  "/info-basic",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentRelationsController.findAllInfoBasic
);
router.get(
  "/levels",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentRelationsController.findAllAndLevels
);
router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentCRUDController.findAll
);
router.get(
  "/:id",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentCRUDController.findOne
);
router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentCRUDController.create
);
router.delete(
  "/:id",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentCRUDController.delete
);

// Assign
router.put(
  "/:idStudent/level/:idLevel",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentEntityAssignmentController.assignLevelToStudent
);
router.put(
  "/:idStudent/unit/:idUnit",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentEntityAssignmentController.assignUnitToStudent
);
router.put(
  "/:idStudent/course/:idCourse",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentEntityAssignmentController.assignCourseToStudent
);
router.put(
  "/:idStudent/module/:idModule",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentEntityAssignmentController.assignModuleToStudent
);

// remove
router.delete(
  "/:idStudent/level/:idLevel",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StudentEntityAssignmentController.removeLevelFromStudent
);

export default router;
