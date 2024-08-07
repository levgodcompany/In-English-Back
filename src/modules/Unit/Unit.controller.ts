import { Unit } from "@prisma/client";
import UnitService from "./Unit.service";
import { Request, Response } from "express";

class UnitController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const body: Unit = req.body;
            const newModule = await UnitService.create(body);
            res.json(newModule)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const unities = await UnitService.findAll();
            res.json(unities)
        } catch (error) {
            res.json(error)
        }
    }

    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const { idUnit } = req.params
            const unit = await UnitService.findOne(Number(idUnit));
            res.json(unit)
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { idUnit } = req.params
            const unit = await UnitService.delete(Number(idUnit));
            res.json(unit)
        } catch (error) {
            res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const { idUnit } = req.params
            const body = req.body
            const unit = await UnitService.update(Number(idUnit), body);
            res.json(unit)
        } catch (error) {
            res.json(error)
        }
    }

    async assignActivityToUnit(req: Request, res: Response): Promise<void> {
        try {
            const { idUnit, idAcivity } = req.params
            const unit = await UnitService.assignActivityToUnit(Number(idUnit), Number(idAcivity));
            res.json(unit)
        } catch (error) {
            res.json(error)
        }
    }

    async removeActivityToUnit(req: Request, res: Response): Promise<void> {
        try {
            const { idUnit, idAcivity } = req.params
            await UnitService.removeActivityToUnit(Number(idUnit), Number(idAcivity));
            res.json("Eliminado con exito")
        } catch (error) {
            res.json(error)
        }
    }
}

export default new UnitController();