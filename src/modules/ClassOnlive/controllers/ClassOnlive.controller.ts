import { NextFunction, Request, Response } from "express";
import { ClassOnliveService } from "../services";
import { ClassOnlive } from "@prisma/client";

class ClassOnliveController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: ClassOnlive = req.body;
      body.idCohort = Number(body.idCohort);
      const newCohort = await ClassOnliveService.create(body);
      res.json(newCohort);
    } catch (error) {
      console.log("Error", error);
      next(error);
    }
  }

  async findAllClassOnLive(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idCohort } = req.params;
      const cohorts = await ClassOnliveService.findAllClassOnLive(
        Number(idCohort)
      );
      res.json(cohorts);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }


  async findAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const classOnlive = await ClassOnliveService.findAll();
      res.json(classOnlive);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idClassOnlive } = req.params;
      const cohort = await ClassOnliveService.findOne(Number(idClassOnlive));
      res.json(cohort);
    } catch (error) {
      next(error);
    }
  }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
      try {
        const body: ClassOnlive = req.body;
        const { idClassOnlive } = req.params;
        const cohort = await ClassOnliveService.update(Number(idClassOnlive), body);
        res.json(cohort);
      } catch (error) {
        next(error)
      }
    }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idClassOnlive } = req.params;
      const cohort = await ClassOnliveService.delete(Number(idClassOnlive));
      res.json(cohort);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new ClassOnliveController();
