import { Router } from "express";
import SuscriptionController from "./Suscription.controller";

const router = Router();

router.post("/", SuscriptionController.create)

router.put("/benefits/:idSuscription", SuscriptionController.assignBenefitsToSuscription)
router.put("/payment-methods/:idSuscription", SuscriptionController.assignPaymentMethodsToSuscription)

router.put("/:idSuscription/:idBenefit", SuscriptionController.assignBenefitToSuscription)
router.put("/:idSuscription/:idPaymentMethod", SuscriptionController.assignPaymentMethodToSuscription)
router.put("/:idSuscription/:idStudent", SuscriptionController.assignStudentToSuscription)
router.put("/:idSuscription", SuscriptionController.update)

router.get("/", SuscriptionController.findAll)
router.get("/:idSuscription", SuscriptionController.findOne)

router.delete("/:idSuscription", SuscriptionController.delete)

export default router;