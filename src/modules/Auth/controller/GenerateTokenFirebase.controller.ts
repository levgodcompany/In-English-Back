import { NextFunction, Request, Response } from "express";
import { GenerateTokenFirebaseService } from "../services";

class GenerateTokenFirebaseController {
  async generarTokenPersonalizado(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const student =
        await GenerateTokenFirebaseService.generarTokenPersonalizado(id);
      res.json(student);
    } catch (error) {
      next(error);
    }
  }
}

export default new GenerateTokenFirebaseController();
