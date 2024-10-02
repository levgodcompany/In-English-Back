import { Router } from "express";
import { ClassOnliveController } from "./controllers";
import {
  authorizeTeacher,
  authenticate,
  authorizeStudentAndTeacher,
} from "../../middlewares";

const router = Router();

router.use(authenticate);
router.use(authorizeStudentAndTeacher);
router.get("/", ClassOnliveController.findAll);
router.get("/:idClassOnlive", authorizeStudentAndTeacher, ClassOnliveController.findOne);

router.get(
  "/cohort/class-onlive/:idCohort",
  ClassOnliveController.findAllClassOnLive
);
router.use(authorizeTeacher);

router.post("/", ClassOnliveController.create);
router.put("/:idClassOnlive", ClassOnliveController.update);
router.delete("/:idClassOnlive", ClassOnliveController.delete);


export default router;
