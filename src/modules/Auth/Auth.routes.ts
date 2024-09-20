import { Router } from "express";
import {
  AuthStudentController,
  AuthTeacherController,
  GenerateTokenFirebaseController,
} from "./controller";
import { authenticate, authorizeStudentAndTeacher } from "../../middlewares";

const router = Router();

router.post("/student/login", AuthStudentController.login);
router.post("/teacher/login", AuthTeacherController.login);

router.post(
  "/student/register/:idLevel/:idCohort",
  AuthStudentController.register
);
router.post("/teacher/register", AuthTeacherController.register);

router.use(authenticate);

router.use(authorizeStudentAndTeacher);
router.get("/:id", GenerateTokenFirebaseController.generarTokenPersonalizado);

export default router;
