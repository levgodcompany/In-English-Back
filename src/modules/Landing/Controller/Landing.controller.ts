import { Request, Response } from "express";
import LandingService from "../services/Landing.service";

class LandingController {
  async findAllLevels(_req: Request, res: Response) {
    try {
      const levles = await LandingService.findAllLevels();
      res.json(levles);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllTeacher(_req: Request, res: Response) {
    try {
      const levles = await LandingService.findAllTeacher();
      res.json(levles);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllCohortsByIdLevel(req: Request, res: Response) {
    try {
      const { idLevel } = req.params;
      const cohorts = await LandingService.findAllCohortsByIdLevel(
        Number(idLevel)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllSuscriptionByIdLevel(req: Request, res: Response) {
    try {
      const { idLevel } = req.params;
      const suscriptions = await LandingService.findAllSuscriptionByIdLevel(
        Number(idLevel)
      );
      res.json(suscriptions);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new LandingController();
