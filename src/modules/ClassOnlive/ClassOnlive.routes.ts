import { Router } from "express";
import { ClassOnliveController } from "./controllers";
import {
  authorizeTeacher,
  authenticate,
  authorizeStudentAndTeacher,
} from "../../middlewares";

const router = Router();

router.use(authenticate);

router.post("/", authorizeTeacher, ClassOnliveController.create);
router.delete(
  "/:idClassOnlive",
  authorizeTeacher,
  ClassOnliveController.delete
);
router.get("/", authorizeStudentAndTeacher, ClassOnliveController.findAll);
router.get(
  "/:idClassOnlive",
  authorizeStudentAndTeacher,
  ClassOnliveController.findOne
);

router.get(
  "/cohort/class-onlive/:idCohort",
  authenticate,
  authorizeStudentAndTeacher,
  ClassOnliveController.findAllClassOnLive
);


export default router;
