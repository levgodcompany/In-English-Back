import { Router } from "express";
import PaymentController from "./Payment.controller";

const router = Router();

router.post("/", PaymentController.create)
router.delete("/:idPayment", PaymentController.delete)
router.get("/", PaymentController.findAll)
router.get("/:idPayment", PaymentController.findOne)
router.put("/:idPayment", PaymentController.update)

export default router;