import { Router } from "express";
import StudentRouter from "../modules/Student/Student.routes"
import TeacherRouter from "../modules/Teacher/Teacher.routes"
import LevelRouter from "../modules/Level/Level.routes"
import UnitRouter from "../modules/Unit/Unit.routes"
import CourseRouter from "../modules/Course/Course.routes"
import ModuleRouter from "../modules/Module/Module.routes"

const router = Router();

router.use("/students", StudentRouter);
router.use("/teachers", TeacherRouter);
router.use("/levels", LevelRouter);
router.use("/unities", UnitRouter);
router.use("/courses", CourseRouter);
router.use("/modules", ModuleRouter);

export default router