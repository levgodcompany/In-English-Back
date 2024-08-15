import { Router } from "express";
import {
  SuscriptionAssignmentsController,
  SuscriptionController,
} from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

router.post("/", SuscriptionController.create);

router.put(
  "/benefits/:idSuscription",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionAssignmentsController.assignBenefitsToSuscription
);
router.put(
  "/payment-methods/:idSuscription",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionAssignmentsController.assignPaymentMethodsToSuscription
);

router.put(
  "/:idSuscription/:idBenefit",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionAssignmentsController.assignBenefitToSuscription
);
router.put(
  "/:idSuscription/:idPaymentMethod",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionAssignmentsController.assignPaymentMethodToSuscription
);
router.put(
  "/:idSuscription/:idStudent",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionAssignmentsController.assignStudentToSuscription
);
router.put(
  "/:idSuscription",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionController.update
);

router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionController.findAll
);
router.get(
  "/:idSuscription",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionController.findOne
);

router.delete(
  "/:idSuscription",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  SuscriptionController.delete
);

export default router;
