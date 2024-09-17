import { Router } from "express";
import {
  CohortAssignmentsController,
  CohortRelationshipsController,
  CohortsController,
} from "./Controllers";
import {
  authenticate,
  authorizeStudentAndTeacher,
  authorizeTeacher,
} from "../../middlewares";
import routerUnit from "./routes/CohortUnit.routes";
import routerCourse from "./routes/CohorCourses.routes";
import routerModules from "./routes/CohorModules.routes";

const router = Router();

router.use(authenticate);
router.use(authorizeTeacher);

router.post("/", CohortsController.create);
router.get("/:idLevel", CohortsController.findAll);

router.get("/all-info/:idCohort", CohortRelationshipsController.findOneAllInfo);

router.get(
  "/cohort-all-info/:idCohort",
  CohortRelationshipsController.findAllRelationByIdCohort
);




router.get(
  "/cohort-teacher/:idCohort",
  CohortRelationshipsController.findAllCohortTeacherByIdCohort
);
router.get(
  "/cohort-student/:idCohort",
  CohortRelationshipsController.findAllCohortStudentByIdCohort
);

router.get(
  "/cohort/total-class/:idCohort",
  authorizeStudentAndTeacher,
  CohortRelationshipsController.findTotalClassOnLive
);

router.get("/:idCohort", CohortsController.findOne);
router.put("/:idCohort", CohortsController.update);
router.delete("/:idCohort", CohortsController.delete);

router.use("/cohort-unit", routerUnit);
router.use("/cohort-course", routerCourse);
router.use("/cohort-module", routerModules);

router.put(
  "/assign/:idCohort/teacher/:idTeacher",
  CohortAssignmentsController.assignTeacherToCohort
);



router.put(
  "/assign/:idCohort/student/:idStudent",
  CohortAssignmentsController.assignStudentToCohort
);

export default router;
