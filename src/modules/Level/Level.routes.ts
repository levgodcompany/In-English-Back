import { Router } from "express";
import LevelController from "./Level.controller";

const router = Router();

router.get("/", LevelController.findAll);
router.post("/", LevelController.create);
router.put("/:idLevel", LevelController.update);
router.get("/:idLevel", LevelController.findOne);
router.delete("/:idLevel", LevelController.delete);
router.get("/:idLevel/unit/:idUnit", LevelController.assignUnitToLevel);
router.get("/:idLevel/activity/:idAcivity", LevelController.assignActivityToLevel);

export default router