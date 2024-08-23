import { Cohort } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { CohortService } from "../Services/index";

class CohortController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Cohort = req.body;
      body.idLevel = Number(body.idLevel);
      const newCohort = await CohortService.create(body);
      res.json(newCohort);
    } catch (error) {
      console.log("Error", error);
      next(error)
    }
  }

  async findAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cohorts = await CohortService.findAll();
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohort = await CohortService.findOne(Number(idCohort));
      res.json(cohort);
    } catch (error) {
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Cohort = req.body;
      const { idCohort } = req.params;
      const cohort = await CohortService.update(Number(idCohort), body);
      res.json(cohort);
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohort = await CohortService.delete(Number(idCohort));
      res.json(cohort);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

export default new CohortController();
