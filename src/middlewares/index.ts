import { AuthMiddleware, Rol, RoleMiddleware } from "../utilities";

const authMiddleware = new AuthMiddleware();
const roleMiddleware = new RoleMiddleware();

const authenticate = authMiddleware.authenticateToken.bind(authMiddleware);
const authorizeTeacher = roleMiddleware.authorizeRole([Rol.TEACHER]);
const authorizeStudentAndTeacher = roleMiddleware.authorizeRole([
  Rol.TEACHER,
  Rol.STUDENT,
]);

export { authenticate, authorizeTeacher, authorizeStudentAndTeacher };
