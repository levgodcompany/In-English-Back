import { NextFunction, Request, Response } from "express";
import { TypeLevelRelationsService } from "../Services";

class TypeLevelRelationsController {
  async assigLevel(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idLevel, idTypeLevel } = req.params;
      const typeLevel = await TypeLevelRelationsService.assigLevel(
        Number(idLevel),
        Number(idTypeLevel)
      );
      res.json(typeLevel);
    } catch (error) {
      next(error)
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idLevel, idTypeLevel } = req.params;
      const typeLevel = await TypeLevelRelationsService.remove(
        Number(idLevel),
        Number(idTypeLevel)
      );
      res.json(typeLevel);
    } catch (error) {
      next(error)
    }
  }
}

export default new TypeLevelRelationsController();
