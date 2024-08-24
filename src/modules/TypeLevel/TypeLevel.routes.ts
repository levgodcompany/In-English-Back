import { Router } from "express";
import {
  TypeLevelController,
  TypeLevelRelationsController,
} from "./Controller/";

const router = Router();

router.post("/", TypeLevelController.create);
router.get("/", TypeLevelController.findAll);
router.get("/type-level/:idTypeLevel", TypeLevelController.findOne);
router.delete("/type-level/:idTypeLevel", TypeLevelController.delete);
router.put("/type-level/:idTypeLevel", TypeLevelController.update);

router.post(
  "/assig/level/:idLevel/type-level/:idTypeLevel",
  TypeLevelRelationsController.assigLevel
);
router.delete(
  "/remove/level/:idLevel/type-level/:idTypeLevel",
  TypeLevelRelationsController.remove
);

export default router;
