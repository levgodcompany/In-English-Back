import { Unit } from "@prisma/client";
import UnitService from "./Unit.service";
import { Request, Response } from "express";

class UnitController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body: Unit = req.body;
      body.order = Number(body.order);
      const newModule = await UnitService.create(body);
      res.json(newModule);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const unities = await UnitService.findAll();
      res.json(unities);
    } catch (error) {
      res.json(error);
    }
  }

  async findAllByIdLevel(req: Request, res: Response): Promise<void> {
    try {
      const { idLevel } = req.params;
      const unities = await UnitService.findAllByIdLevel(Number(idLevel));
      res.json(unities);
    } catch (error) {
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idUnit } = req.params;
      const unit = await UnitService.findOne(Number(idUnit));
      res.json(unit);
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idUnit } = req.params;
      const unit = await UnitService.delete(Number(idUnit));
      res.json(unit);
    } catch (error) {
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { idUnit } = req.params;
      const body = req.body;
      const unit = await UnitService.update(Number(idUnit), body);
      res.json(unit);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new UnitController();
