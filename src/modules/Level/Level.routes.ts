import { Router } from "express";
import { LevelController, LevelRelationController } from "./controllers";
import { authorizeTeacher, authenticate, authorizeStudentAndTeacher } from "../../middlewares";

const router = Router();

router.use(authenticate);

router.get("/", authorizeStudentAndTeacher, LevelController.findAll);
router.get("/info-basic", authorizeStudentAndTeacher, LevelController.findAllInfoBasic);
router.get("/:idLevel", authorizeStudentAndTeacher, LevelController.findOne);
router.get("/info/:idLevel", authorizeStudentAndTeacher, LevelController.findOneAll);
router.get("/teachers/:idLevel", authorizeStudentAndTeacher, LevelController.findAllTeacherByIdLevel);

router.use(authorizeTeacher);
router.post("/", LevelController.create);
router.put("/:idLevel", LevelController.update);
router.delete("/:idLevel", LevelController.delete);

router.get("/relation/suscription/:idLevel", LevelRelationController.findAllSuscriptionByIdLevel);
router.get("/relation/type-level/:idLevel", LevelRelationController.findTypeLevelsByIdLevel);

export default router;
