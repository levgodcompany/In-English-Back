import { Router } from "express";
import {
  StudentCRUDController,
  StudentEntityAssignmentController,
  StudentRelationsController,
} from "./controllers";
import { authenticate, authorizeStudentAndTeacher, authorizeTeacher } from "../../middlewares";

const router = Router();

// Middlewares globales para todas las rutas en este archivo
router.use(authenticate);
router.use(authorizeTeacher);

// Rutas para obtener información básica y relaciones
router.get("/info-basic", StudentRelationsController.findAllInfoBasic);
router.get("/levels", StudentRelationsController.findAllAndLevels);

// Rutas CRUD para estudiantes
router.get("/", StudentCRUDController.findAll);
router.get("/:id", StudentCRUDController.findOne);
router.post("/", StudentCRUDController.create);
router.put("/active/:idStudent/:idStatus", StudentCRUDController.updateActiveStudent);
router.delete("/:id", StudentCRUDController.delete);

// Rutas para asignar entidades al estudiante
router.put("/:idStudent/level/:idLevel", StudentEntityAssignmentController.assignLevelToStudent);
router.put("/:idStudent/unit/:idUnit", StudentEntityAssignmentController.assignUnitToStudent);
router.put("/:idStudent/course/:idCourse", StudentEntityAssignmentController.assignCourseToStudent);
router.put("/:idStudent/module/:idModule", StudentEntityAssignmentController.assignModuleToStudent);

// Rutas para remover entidades del estudiante
router.delete("/:idStudent/level/:idLevel", StudentEntityAssignmentController.removeLevelFromStudent);

router.use(authorizeStudentAndTeacher);
router.get('level/:idLevel/cohorts/student/:idStudent')

export default router;
