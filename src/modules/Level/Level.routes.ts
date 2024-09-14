import { Router } from "express";
import { LevelController, LevelRelationController } from "./controllers";
import {
  authorizeTeacher,
  authenticate,
  authorizeStudentAndTeacher,
} from "../../middlewares";

const router = Router();

router.use(authenticate);
router.use(authorizeStudentAndTeacher);
router.get("/type-levels/:idTypeLevel", LevelController.findAllByTypeLevel);
router.get("/info-basic", LevelController.findAllInfoBasic);
router.get("/:idLevel", LevelController.findOne);
router.get("/info/:idLevel", LevelController.findOneAll);
router.get("/teachers/:idLevel", LevelController.findAllTeacherByIdLevel);

router.use(authorizeTeacher);
router.post("/:idTypeLevel", LevelController.create);
router.put("/:idLevel", LevelController.update);
router.delete("/:idLevel", LevelController.delete);

router.get(
  "/relation/suscription/:idLevel",
  LevelRelationController.findAllSuscriptionByIdLevel
);
router.get(
  "/relation/type-level/:idLevel",
  LevelRelationController.findTypeLevelsByIdLevel
);

export default router;
