import { Router } from "express";
import UnitController from "./Unit.controller";

const router = Router();

router.get("/", UnitController.findAll);
router.post("/", UnitController.create);
router.put("/:idUnit", UnitController.update);
router.get("/:idUnit", UnitController.findOne);
router.delete("/:idUnit", UnitController.delete);
router.post("/:idUnit/activity/:idAcivity", UnitController.assignActivityToUnit);
router.delete("/:idUnit/activity/:idAcivity", UnitController.removeActivityToUnit);

export default router