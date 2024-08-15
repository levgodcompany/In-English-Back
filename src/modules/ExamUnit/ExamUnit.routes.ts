import { Router } from "express";
import { ExamUnitController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  ExamUnitController.findAll
);
router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  ExamUnitController.create
);
router.put(
  "/:idExam",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  ExamUnitController.update
);
router.get(
  "/:idExam",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  ExamUnitController.findOne
);
router.delete(
  "/:idExam",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  ExamUnitController.delete
);

export default router;
