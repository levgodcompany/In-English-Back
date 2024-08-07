import { Router } from "express";
import SuscriptionController from "./Suscription.controller";

const router = Router();

router.post("/", SuscriptionController.create)
router.put("/:idSuscription/:idBenefit", SuscriptionController.assignBenefitToSuscription)
router.put("/:idSuscription/:idPaymentMethod", SuscriptionController.assignPaymentMethodToSuscription)
router.put("/:idSuscription/:idStudent", SuscriptionController.assignStudentToSuscription)
router.delete("/:idSuscription", SuscriptionController.delete)
router.get("/", SuscriptionController.findAll)
router.get("/:idSuscription", SuscriptionController.findOne)
router.put("/:idSuscription", SuscriptionController.update)

export default router;