import { Router } from "express";
import { PaymentController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  PaymentController.create
);
router.delete(
  "/:idPayment",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  PaymentController.delete
);
router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  PaymentController.findAll
);
router.get(
  "/:idPayment",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  PaymentController.findOne
);
router.put(
  "/:idPayment",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  PaymentController.update
);

export default router;
