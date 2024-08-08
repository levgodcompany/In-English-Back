import { Level } from "@prisma/client";
import { Request, Response } from "express";
import LevelService from "./Level.service";

class LevelController {
    
    async create(req: Request, res: Response): Promise<void> {
        try {
            const level: Level = req.body;
            level.order = Number(level.order)
            const newLevel = await LevelService.create(level);
            res.json(newLevel)
        } catch (error) {
            console.log(error)
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

    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const { idLevel } = req.params
            const levels = await LevelService.findOne(Number(idLevel));
            res.json(levels)
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { idLevel } = req.params
            const levels = await LevelService.delete(Number(idLevel));
            res.json(levels)
        } catch (error) {
            res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const { idLevel } = req.params
            const body = req.body
            const levels = await LevelService.update(Number(idLevel), body);
            res.json(levels)
        } catch (error) {
            res.json(error)
        }
    }

    async assignActivityToLevel(req: Request, res: Response): Promise<void> {
        try {
            const { idLevel, idAcivity } = req.params
            const levels = await LevelService.assignActivityToLevel(Number(idLevel), Number(idAcivity));
            res.json(levels)
        } catch (error) {
            res.json(error)
        }
    }

    
}

export default new LevelController()