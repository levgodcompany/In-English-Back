import { Router } from "express";
import {
  CohortAssignmentsController,
  CohortRelationshipsController,
  CohortUnitController,
} from "../Controllers";

const router = Router();
// Rutas para las cohortes y unidades

router.get(
  "/cohort-unit/:idCohort",
  CohortRelationshipsController.findAllCohortUnitByIdCohort
);

router.put(
  "/assign/:idCohort/unit/:idUnit",
  CohortAssignmentsController.assignUnitToCohort
);

router.put(
  "/enable/cohort/:idCohort/unit/:idUnit",
  CohortUnitController.enableUnit
);
router.delete("/cohort/:idCohort/unit/:idUnit", CohortUnitController.delete);

router.put(
  "/assign/cohort/:idCohort/unit:/:idUnit",
  CohortAssignmentsController.assignUnitToCohort
);

export default router;