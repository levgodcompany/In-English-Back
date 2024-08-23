import { Request, Response } from "express";
import { LevelRelationService } from "../services";

class LevelRelationController {
  async findAllSuscriptionByIdLevel(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelRelationService.findAllSuscriptionByIdLevel(
        Number(idLevel)
      );
      res.json(levels);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findTypeLevelsByIdLevel(req: Request, res: Response): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelRelationService.findTypeLevelsByIdLevel(
        Number(idLevel)
      );
      res.json(levels);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new LevelRelationController();
