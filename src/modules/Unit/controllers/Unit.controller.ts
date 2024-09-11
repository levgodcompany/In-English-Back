import { Unit } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { UnitService } from "../services";
import { HttpStatus } from "../../../utilities";
import { CohortRelationshipsService } from "../../Cohorts/Services";

class UnitController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Unit = req.body;
      body.order = Number(body.order);
      const newModule = await UnitService.create(body);
      res.json(newModule);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const unities = await UnitService.findAll();
      res.json(unities);
    } catch (error) {
      next(error);
    }
  }

  async findAllInfoBasic(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const unities = await UnitService.findAllInfoBasic();
      res.json(unities);
    } catch (error) {
      next(error);
    }
  }

  async findAllByIdLevel(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idLevel } = req.params;
      const unities = await UnitService.findAllByIdLevel(Number(idLevel));
      res.json(unities);
    } catch (error) {
      next(error);
    }
  }

  async findAllUnitByIdLevelAndByIdStudent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idLevel, idStudent, idCohort } = req.params;
      
      const unities = await UnitService.findAllUnitByIdLevelAndByIdStudent(
        Number(idLevel),
        Number(idStudent),
        Number(idCohort)
      );
      const totalClass = await CohortRelationshipsService.findTotalClassOnLive(Number(idCohort));
      res.json({
        unities: unities,
        totalClass: totalClass
      });
    } catch (error) {
      next(error);
    }
  }

  async findAllTeacherByIdUnit(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idUnit } = req.params;
      const unities = await UnitService.findAllTeacherByIdUnit(Number(idUnit));
      res.status(HttpStatus.OK).json(unities);
    } catch (error) {
      next(error);
    }
  }

  async findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idUnit } = req.params;
      const unit = await UnitService.findOne(Number(idUnit));
      res.json(unit);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUnit } = req.params;
      const unit = await UnitService.delete(Number(idUnit));
      res.json(unit);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUnit } = req.params;
      const body = req.body;
      const unit = await UnitService.update(Number(idUnit), body);
      res.json(unit);
    } catch (error) {
      next(error);
    }
  }
}

export default new UnitController();
