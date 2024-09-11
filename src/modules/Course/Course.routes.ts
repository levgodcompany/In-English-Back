import { Router } from "express";
import { CourseController } from "./controllers";
import { authorizeTeacher, authenticate, authorizeStudentAndTeacher } from "../../middlewares";

const router = Router();

router.use(authenticate);

router.get("/", authorizeStudentAndTeacher, CourseController.findAll);
router.get("/unit/:idUnit", authorizeStudentAndTeacher, CourseController.findAllByIdUnit);
router.get("/info-basic", authorizeStudentAndTeacher, CourseController.findAllInfoBasic);
router.get("/:idUnit/unities", authorizeStudentAndTeacher, CourseController.findAllUnitiesByIdCourse);
router.get("/unit/:idUnit/cohort/:idCohort/student/:idStudent", authorizeStudentAndTeacher, CourseController.findAllCourseByIdUnitAndIdStudent);

router.use(authorizeTeacher);
router.post("/", CourseController.create);
router.put("/:idCourse", CourseController.update);
router.get("/:idCourse", CourseController.findOne);
router.delete("/:idCourse", CourseController.delete);

export default router;
