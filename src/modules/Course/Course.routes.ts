import { Router } from "express";
import { CourseController } from "./controllers";
import { AuthMiddleware, Rol, RoleMiddleware } from "../../utilities";

const router = Router();

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

router.get(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER, Rol.STUDENT]),
  CourseController.findAll
);
router.get(
  "/unit/:idUnit",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER, Rol.STUDENT]),
  CourseController.findAllByIdUnit
);
router.get(
  "/info-basic",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER, Rol.STUDENT]),
  CourseController.findAllInfoBasic
);
router.get(
  "/:idUnit/unities",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER, Rol.STUDENT]),
  CourseController.findAllUnitiesByIdCourse
);
router.post(
  "/",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CourseController.create
);
router.put(
  "/:idCourse",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CourseController.update
);
router.get(
  "/:idCourse",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CourseController.findOne
);
router.delete(
  "/:idCourse",
  authMiddleware.authenticateToken.bind(authMiddleware),
  roleMiddleware.authorizeRole([Rol.TEACHER]),
  CourseController.delete
);

export default router;
