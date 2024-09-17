import { Router } from "express";
import {
  CohortAssignmentsController,
  CohortModuleController,
  CohortRelationshipsController,
} from "../Controllers";

const router = Router();
// Rutas para las cohortes y unidades

router.get(
  "/cohort-module/:idCohort",
  CohortRelationshipsController.findAllCohortModuleByIdCohort
);

router.put(
  "/assign/:idCohort/module/:idModule",
  CohortAssignmentsController.assignModuleToCohort
);

router.put(
  "/enable/cohort/:idCohort/course/:idCourse",
  CohortModuleController.enableModule
);
router.delete(
  "/cohort/:idCohort/course/:idCourse",
  CohortModuleController.delete
);

export default router;
