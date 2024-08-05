import { Level } from "@prisma/client";
import { Request, Response } from "express";
import LevelService from "./Level.service";

class LevelController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const level: Level = req.body;
            const newLevel = await LevelService.create(level);
            res.json(newLevel)
        } catch (error) {
            res.json(error)
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const levels = await LevelService.findAll();
            res.json(levels)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new LevelController()