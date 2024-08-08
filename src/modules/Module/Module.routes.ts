import { Router } from "express";
import ModuleController from "./Module.controller";

const router = Router();

router.get("/", ModuleController.findAll);
router.get("/course/:idCourse", ModuleController.findAllByIdCourse);
router.post("/", ModuleController.create);
router.put("/:idModule", ModuleController.update);
router.get("/:idModule", ModuleController.findOne);
router.delete("/:idModule", ModuleController.delete);
router.post("/:idModule/activity/:idAcivity", ModuleController.assignActivityToModule);
router.delete("/:idModule/activity/:idAcivity", ModuleController.removeActivityToModule);

export default router