import { Router } from "express";
import {
  CohortAssignmentsController,
  CohortCourseController,
  CohortRelationshipsController,
} from "../Controllers";

const router = Router();
// Rutas para las cohortes y unidades

router.get(
  "/cohort-course/:idCohort",
  CohortRelationshipsController.findAllCohortCourseByIdCohort
);

router.put(
  "/assign/:idCohort/course/:idCourse",
  CohortAssignmentsController.assignCourseToCohort
);

router.put(
  "/enable/cohort/:idCohort/course/:idCourse",
  CohortCourseController.enableCourse
);
router.delete("/cohort/:idCohort/course/:idCourse", CohortCourseController.delete);

export default router;