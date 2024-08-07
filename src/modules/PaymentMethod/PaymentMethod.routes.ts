import { Router } from "express";
import PaymentMethodController from "./PaymentMethod.controller";

const router = Router();

router.post("/", PaymentMethodController.create)
router.delete("/:idPaymentMethod", PaymentMethodController.delete)
router.get("/", PaymentMethodController.findAll)
router.get("/:idPaymentMethod", PaymentMethodController.findOne)
router.put("/:idPaymentMethod", PaymentMethodController.update)

export default router;