import { Router } from "express";
import ExamLevelRouter from "../ExamLevel/ExamLevel.routes";
import { LevelController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities/index";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.STUDENT, Rol.TEACHER]),
  LevelController.findAll
);
router.get(
  "/info-basic",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER, Rol.STUDENT]),
  LevelController.findAllInfoBasic
);
router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  LevelController.create
);
router.put(
  "/:idLevel",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  LevelController.update
);
router.get(
  "/:idLevel",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.STUDENT, Rol.TEACHER]),
  LevelController.findOne
);
router.delete(
  "/:idLevel",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  LevelController.delete
);
router.use(
  "/exams",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.STUDENT, Rol.TEACHER]),
  ExamLevelRouter
);

export default router;
