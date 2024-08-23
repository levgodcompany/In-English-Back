import { Level } from "@prisma/client";
import { Request, Response } from "express";
import { LevelService } from "../services";

class LevelController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const level: Level = req.body;
      level.order = Number(level.order);
      const newLevel = await LevelService.create(level);
      res.json(newLevel);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const levels = await LevelService.findAll();
      res.json(levels);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAllInfoBasic(req: Request, res: Response): Promise<void> {
    try {
      const levels = await LevelService.findAllInfoBasic();
      res.json(levels);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelService.findOne(Number(idLevel));
      res.json(levels);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findOneAll(req: Request, res: Response): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelService.findOneAll(Number(idLevel));
      res.json(levels);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idLevel } = req.params;
      const levels = await LevelService.delete(Number(idLevel));
      res.json(levels);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { idLevel } = req.params;
      const body = req.body;
      const levels = await LevelService.update(Number(idLevel), body);
      res.json(levels);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new LevelController();
