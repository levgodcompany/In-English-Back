import { Router } from "express";
import StudentRouter from "../modules/Student/Student.routes"
import TeacherRouter from "../modules/Teacher/Teacher.routes"
import CourseRouter from "../modules/Course/Course.routes"
import LevelRouter from "../modules/Level/Level.routes"


const router = Router();

router.use("/students", StudentRouter);
router.use("/teachers", TeacherRouter);
router.use("/courses", CourseRouter);
router.use("/levels", LevelRouter);

export default router