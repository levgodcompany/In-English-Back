import { Router } from "express";
import { BenefitController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();
const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  BenefitController.create
);
router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  BenefitController.findAll
);
router.get(
  "/:idBenefit",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  BenefitController.findOne
);
router.put(
  "/:idBenefit",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  BenefitController.update
);
router.delete(
  "/:idBenefit",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  BenefitController.delete
);

export default router;
