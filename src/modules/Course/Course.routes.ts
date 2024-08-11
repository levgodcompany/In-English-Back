import { Router } from "express";
import CourseController from "./Course.controller";

const router = Router();

router.get("/", CourseController.findAll);
router.get("/unit/:idUnit", CourseController.findAllByIdUnit);
router.get("/info-basic", CourseController.findAllInfoBasic);
router.get("/:idUnit/unities", CourseController.findAllUnitiesByIdCourse);
router.post("/", CourseController.create);
router.put("/:idCourse", CourseController.update);
router.get("/:idCourse", CourseController.findOne);
router.delete("/:idCourse", CourseController.delete);

export default router;
