import { Router } from "express";
import {
  CohortAssignmentsController,
  CohortUnitController,
} from "../Controllers";

const router = Router();
// Rutas para las cohortes y unidades

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