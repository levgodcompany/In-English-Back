import { Router } from "express";
import { ModuleController, ModuleRelationController } from "./controllers";
import {
  authorizeTeacher,
  authenticate,
  authorizeStudentAndTeacher,
} from "../../middlewares";

const router = Router();

router.use(authenticate);

router.use(authorizeStudentAndTeacher);
// Rutas para asignación de estudiantes
router.get(
  "/assig/student/:idStudent",
  ModuleRelationController.findAllStudentToModule
);
router.put(
  "/assig/student/:idStudent/course/:idCourse/module/:idModule",
  ModuleRelationController.assigStudentToModule
);



router.use(authorizeTeacher);

router.get("/", ModuleController.findAll);
router.get("/course/:idCourse", ModuleController.findAllByIdCourse);
router.get("/info-basic", ModuleController.findAllInfoBasic);

router.post("/", ModuleController.create);
router.put("/:idModule", ModuleController.update);
router.get("/:idModule", ModuleController.findOne);
router.delete("/:idModule", ModuleController.delete);


export default router;
