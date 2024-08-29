import { Router } from "express";
import { LevelController, LevelRelationController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities/index";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

// Middleware combinados para reutilización
const authenticate = authMiddleware.authenticateToken.bind(authMiddleware);
const authorizeTeacher = roleMiddleware.authorizeRole([Rol.TEACHER]);
const authorizeStudentAndTeacher = roleMiddleware.authorizeRole([
  Rol.STUDENT,
  Rol.TEACHER,
]);

// Rutas GET
router.get(
  "/",
  authenticate,
  authorizeStudentAndTeacher,
  LevelController.findAll
);
router.get(
  "/info-basic",
  authenticate,
  authorizeStudentAndTeacher,
  LevelController.findAllInfoBasic
);
router.get(
  "/:idLevel",
  authenticate,
  authorizeStudentAndTeacher,
  LevelController.findOne
);
router.get(
  "/info/:idLevel",
  authenticate,
  authorizeStudentAndTeacher,
  LevelController.findOneAll
);

router.get(
  "/teachers/:idLevel",
  authenticate,
  authorizeStudentAndTeacher,
  LevelController.findAllTeacherByIdLevel
);




router.get(
  "/relation/suscription/:idLevel",
  authenticate,
  authorizeTeacher,
  LevelRelationController.findAllSuscriptionByIdLevel
);

router.get(
  "/relation/type-level/:idLevel",
  authenticate,
  authorizeTeacher,
  LevelRelationController.findTypeLevelsByIdLevel
);






// Rutas POST
router.post("/", authenticate, authorizeTeacher, LevelController.create);

// Rutas PUT
router.put("/:idLevel", authenticate, authorizeTeacher, LevelController.update);

// Rutas DELETE
router.delete(
  "/:idLevel",
  authenticate,
  authorizeTeacher,
  LevelController.delete
);

export default router;
