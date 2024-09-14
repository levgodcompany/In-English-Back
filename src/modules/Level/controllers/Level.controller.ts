import { Level } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { LevelService } from "../services";

class LevelController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idTypeLevel } = req.params
      const level: Level = req.body;
      level.order = Number(level.order);
      const newLevel = await LevelService.create(level, Number(idTypeLevel));
      res.json(newLevel);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findAllByTypeLevel(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idTypeLevel } = req.params;
      const levels = await LevelService.findAllByTypeLevel(Number(idTypeLevel));
      res.json(levels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findAllInfoBasic(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const levels = await LevelService.findAllInfoBasic();
      res.json(levels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findAllTeacherByIdLevel(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelService.findAllTeacherByIdLevel(
        Number(idLevel)
      );
      res.json(levels);
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
      const { idLevel } = req.params;
      const levels = await LevelService.findOne(Number(idLevel));
      res.json(levels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findOneAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelService.findOneAll(Number(idLevel));
      res.json(levels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelService.delete(Number(idLevel));
      res.json(levels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idLevel } = req.params;
      const body = req.body;
      const levels = await LevelService.update(Number(idLevel), body);
      res.json(levels);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new LevelController();
