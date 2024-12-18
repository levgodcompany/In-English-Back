import { Router } from "express";
import { CategoryController, CategoryTypeLevelController } from "./controllers";
import {
  authorizeTeacher,
  authenticate,
  authorizeStudentAndTeacher,
} from "../../middlewares";

const router = Router();

router.use(authenticate);
router.use(authorizeStudentAndTeacher);
router.get("/", CategoryController.findAll);
router.get(
  "/:idCategory",
  authorizeStudentAndTeacher,
  CategoryController.findOne
);

router.use(authorizeTeacher);

router.post("/", CategoryController.create);
router.put("/:idCategory", CategoryController.update);
router.delete("/:idCategory", CategoryController.delete);


router.post("/categories/assign", CategoryTypeLevelController.assignTypeLevel);
router.get("/categories/relations", CategoryTypeLevelController.findAllRelations);
router.delete(
  "/categories/:idCategory/typelevels/:idTypeLevel",
  CategoryTypeLevelController.deleteRelation
);

export default router;
