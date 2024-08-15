import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: { userId: number; role: string }; // Añadimos una propiedad opcional para el usuario
}

class RoleMiddleware {
  // Middleware para autorización basado en roles
  authorizeRole(roles: string[]) {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
      if (req.user && roles.includes(req.user.role)) {
        next(); // Usuario autorizado, pasar al siguiente middleware o ruta
      } else {
        res.sendStatus(403); // Usuario no autorizado, respuesta 403 (Prohibido)
      }
    };
  }
}

export default RoleMiddleware;
