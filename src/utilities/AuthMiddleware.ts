import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: { userId: number; role: string }; // Añadimos una propiedad opcional para el usuario
}

class AuthMiddleware {
  private secretKey = process.env.JWT_SECRET || "secret";

  // Middleware para autenticación
  authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // El formato es "Bearer TOKEN"

    if (token == null) return res.sendStatus(401); // Si no hay token, respuesta 401 (No autorizado)

    jwt.verify(token, this.secretKey, (err, user) => {
      if (err) return res.sendStatus(403); // Si el token es inválido, respuesta 403 (Prohibido)

      req.user = user as { userId: number; role: string }; // Guardamos el usuario en la solicitud
      next(); // Pasamos al siguiente middleware o ruta
    });
  }
}

export default AuthMiddleware;
