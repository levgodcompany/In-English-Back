import { Router } from "express";
import UnitController from "./Unit.controller";
import ExamUnitRouter from "../ExamUnit/ExamUnit.routes"

const router = Router();

router.get("/", UnitController.findAll);
router.get("/info-basic", UnitController.findAllInfoBasic);
router.get("/level/:idLevel", UnitController.findAllByIdLevel);
router.post("/", UnitController.create);
router.put("/:idUnit", UnitController.update);
router.get("/:idUnit", UnitController.findOne);
router.delete("/:idUnit", UnitController.delete);

router.use("/exams", ExamUnitRouter)

export default router