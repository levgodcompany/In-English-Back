import { Router } from "express";
import { SuscriptionAssignmentsController, SuscriptionController } from "./controllers";

const router = Router();

router.post("/", SuscriptionController.create)

router.put("/benefits/:idSuscription", SuscriptionAssignmentsController.assignBenefitsToSuscription)
router.put("/payment-methods/:idSuscription", SuscriptionAssignmentsController.assignPaymentMethodsToSuscription)

router.put("/:idSuscription/:idBenefit", SuscriptionAssignmentsController.assignBenefitToSuscription)
router.put("/:idSuscription/:idPaymentMethod", SuscriptionAssignmentsController.assignPaymentMethodToSuscription)
router.put("/:idSuscription/:idStudent", SuscriptionAssignmentsController.assignStudentToSuscription)
router.put("/:idSuscription", SuscriptionController.update)

router.get("/", SuscriptionController.findAll)
router.get("/:idSuscription", SuscriptionController.findOne)

router.delete("/:idSuscription", SuscriptionController.delete)

export default router;