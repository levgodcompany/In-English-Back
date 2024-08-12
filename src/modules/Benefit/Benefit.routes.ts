import { Router } from "express";
import { BenefitController } from "./controllers";

const router = Router();

router.post("/", BenefitController.create)
router.get("/", BenefitController.findAll)
router.get("/:idBenefit", BenefitController.findOne)
router.put("/:idBenefit", BenefitController.update)
router.delete("/:idBenefit", BenefitController.delete)

export default router;