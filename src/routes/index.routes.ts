import { Router } from "express";
import StudentRouter from "../modules/Student/Student.routes"
import TeacherRouter from "../modules/Teacher/Teacher.routes"
import LevelRouter from "../modules/Level/Level.routes"
import UnitRouter from "../modules/Unit/Unit.routes"
import CourseRouter from "../modules/Course/Course.routes"
import ModuleRouter from "../modules/Module/Module.routes"
import StatusRouter from "../modules/Status/Status.routes"
import BenefitRouter from "../modules/Benefit/Benefit.routes"
import PaymentRouter from "../modules/Payment/Payment.routes"
import PaymentMethodRouter from "../modules/PaymentMethod/PaymentMethod.routes"
import StudentSuscriptionRouter from "../modules/StudentSuscription/StudentSuscription.routes"
import SuscriptionRouter from "../modules/Suscription/Suscription.routes"

import ExamLevelRouter from "../modules/ExamLevel/ExamLevel.routes"
import ExamUnitRouter from "../modules/ExamUnit/ExamUnit.routes"

const router = Router();

router.use("/students", StudentRouter);
router.use("/teachers", TeacherRouter);
router.use("/levels", LevelRouter);
router.use("/unities", UnitRouter);
router.use("/courses", CourseRouter);
router.use("/modules", ModuleRouter);
router.use("/status", StatusRouter);

router.use("/benefits", BenefitRouter);
router.use("/payment", PaymentRouter);
router.use("/payment-methods", PaymentMethodRouter);
router.use("/student-suscription", StudentSuscriptionRouter);
router.use("/suscription", SuscriptionRouter);

router.use("/level-exams", ExamLevelRouter);
router.use("/unities-exams", ExamUnitRouter);

export default router