import express from "express";
import {
  StudentCRUDController,
  StudentEntityAssignmentController,
  StudentRelationsController,
} from "./controllers";

const router = express.Router();

router.get("/", StudentCRUDController.findAll);
router.get("/:id", StudentCRUDController.findOne);
router.post("/", StudentCRUDController.create);
router.delete("/:id", StudentCRUDController.delete);

// Assign
router.put(
  "/:idStudent/level/:idLevel",
  StudentEntityAssignmentController.assignLevelToStudent
);
router.put(
  "/:idStudent/unit/:idUnit",
  StudentEntityAssignmentController.assignUnitToStudent
);
router.put(
  "/:idStudent/course/:idCourse",
  StudentEntityAssignmentController.assignCourseToStudent
);
router.put(
  "/:idStudent/module/:idModule",
  StudentEntityAssignmentController.assignModuleToStudent
);

// remove
router.delete(
  "/:idStudent/level/:idLevel",
  StudentEntityAssignmentController.removeLevelFromStudent
);

router.get("/info-basic", StudentRelationsController.findAllInfoBasic);
router.get("/levels", StudentRelationsController.findAllAndLevels);

export default router;
