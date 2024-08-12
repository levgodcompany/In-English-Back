import { Router } from "express";
import { UnitController } from "./controllers";

const router = Router();

router.get("/", UnitController.findAll);
router.get("/info-basic", UnitController.findAllInfoBasic);
router.get("/level/:idLevel", UnitController.findAllByIdLevel);
router.post("/", UnitController.create);
router.put("/:idUnit", UnitController.update);
router.get("/:idUnit", UnitController.findOne);
router.delete("/:idUnit", UnitController.delete);

export default router