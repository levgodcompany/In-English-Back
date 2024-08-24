import { Request, Response, NextFunction } from "express";
import { LevelRelationService } from "../services";

class LevelRelationController {
  async findAllSuscriptionByIdLevel(
    req: Request,
    res: Response, next: NextFunction
  ): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelRelationService.findAllSuscriptionByIdLevel(
        Number(idLevel)
      );
      res.json(levels);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findTypeLevelsByIdLevel(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelRelationService.findTypeLevelsByIdLevel(
        Number(idLevel)
      );
      res.json(levels);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

export default new LevelRelationController();
