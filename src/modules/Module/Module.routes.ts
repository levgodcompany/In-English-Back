import { Router } from "express";
import { ModuleController } from "./controllers";

const router = Router();

router.get("/", ModuleController.findAll);
router.get("/course/:idCourse", ModuleController.findAllByIdCourse);
router.get("/info-basic", ModuleController.findAllInfoBasic);
router.post("/", ModuleController.create);
router.put("/:idModule", ModuleController.update);
router.get("/:idModule", ModuleController.findOne);
router.delete("/:idModule", ModuleController.delete);

export default router