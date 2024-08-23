import { Router } from "express";
import LandingController from "./Controller/Landing.controller";

const router = Router();

router.get("/levels", LandingController.findAllLevels);
router.get("/teachers", LandingController.findAllTeacher);
router.get("/level/cohorts/:idLevel", LandingController.findAllCohortsByIdLevel);
router.get(
  "/level/suscriptions/:idLevel",
  LandingController.findAllSuscriptionByIdLevel
);

export default router;
