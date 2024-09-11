import { Router } from "express";
import { UnitController } from "./controllers";
import { authorizeTeacher, authenticate, authorizeStudentAndTeacher } from "../../middlewares";

const router = Router();

router.use(authenticate);

router.use(authorizeStudentAndTeacher);
router.get("/", UnitController.findAll);
router.get("/info-basic",  UnitController.findAllInfoBasic);
router.get("/level/:idLevel",  UnitController.findAllByIdLevel);
router.get("/levels/:idLevel/cohort/:idCohort/student/:idStudent",  UnitController.findAllUnitByIdLevelAndByIdStudent);
router.get("/teachers/:idUnit",  UnitController.findAllTeacherByIdUnit);

router.use(authorizeTeacher);
router.post("/", UnitController.create);
router.put("/:idUnit", UnitController.update);
router.get("/:idUnit", UnitController.findOne);
router.delete("/:idUnit", UnitController.delete);

export default router;
