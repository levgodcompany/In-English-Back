import { Router } from "express";
import CourseController from "./Course.controller";

const router = Router();

router.get("/", CourseController.findAll);
router.post("/", CourseController.create);
router.put("/:idCourse", CourseController.update);
router.get("/:idCourse", CourseController.findOne);
router.delete("/:idCourse", CourseController.delete);
router.post("/:idCourse/activity/:idAcivity", CourseController.assignActivityToCourse);
router.delete("/:idCourse/activity/:idAcivity", CourseController.removeActivityToCourse);

export default router