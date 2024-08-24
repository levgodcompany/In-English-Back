import { Router } from "express";
import { AuthStudentController, AuthTeacherController } from "./controller";

const router = Router();

router.post("/student/login", AuthStudentController.login);
router.post("/teacher/login", AuthTeacherController.login);

router.post("/student/register/:idLevel/:idCohort", AuthStudentController.register);
router.post("/teacher/register", AuthTeacherController.register);

export default router;
