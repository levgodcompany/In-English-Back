import { Request, Response, NextFunction } from "express";
import LandingService from "../Services/Landing.service";

class LandingController {
  async findAllLevels(_req: Request, res: Response, next: NextFunction) {
    try {
      const levles = await LandingService.findAllLevels();
      res.json(levles);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAllTeacher(_req: Request, res: Response, next: NextFunction) {
    try {
      const levles = await LandingService.findAllTeacher();
      res.json(levles);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAllCohortsByIdLevel(req: Request, res: Response, next: NextFunction) {
    try {
      const { idLevel } = req.params;
      const cohorts = await LandingService.findAllCohortsByIdLevel(
        Number(idLevel)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAllSuscriptionByIdLevel(req: Request, res: Response, next: NextFunction) {
    try {
      const { idLevel } = req.params;
      const suscriptions = await LandingService.findAllSuscriptionByIdLevel(
        Number(idLevel)
      );
      res.json(suscriptions);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

export default new LandingController();
