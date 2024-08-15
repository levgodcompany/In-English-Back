import { Router } from "express";
import StatusController from "./Status.controller";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StatusController.create
);
router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  StatusController.findAll
);

export default router;
