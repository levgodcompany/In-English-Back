import { Unit } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { UnitService } from "../services";

class UnitController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Unit = req.body;
      body.order = Number(body.order);
      const newModule = await UnitService.create(body);
      res.json(newModule);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const unities = await UnitService.findAll();
      res.json(unities);
    } catch (error) {
      next(error)
    }
  }

  async findAllInfoBasic(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const unities = await UnitService.findAllInfoBasic();
      res.json(unities);
    } catch (error) {
      next(error)
    }
  }

  async findAllByIdLevel(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idLevel } = req.params;
      const unities = await UnitService.findAllByIdLevel(Number(idLevel));
      res.json(unities);
    } catch (error) {
      next(error)
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUnit } = req.params;
      const unit = await UnitService.findOne(Number(idUnit));
      res.json(unit);
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUnit } = req.params;
      const unit = await UnitService.delete(Number(idUnit));
      res.json(unit);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idUnit } = req.params;
      const body = req.body;
      const unit = await UnitService.update(Number(idUnit), body);
      res.json(unit);
    } catch (error) {
      next(error)
    }
  }
}

export default new UnitController();
