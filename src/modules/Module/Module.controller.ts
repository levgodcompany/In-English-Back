import { Module } from "@prisma/client";
import { Request, Response } from "express";
import ModuleService from "./Module.service";

class ModuleController {
        
    async create(req: Request, res: Response): Promise<void> {
        try {
            const module: Module = req.body;
            const newModule = await ModuleService.create(module);
            res.json(newModule)
        } catch (error) {
            res.json(error)
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const modules = await ModuleService.findAll();
            res.json(modules)
        } catch (error) {
            res.json(error)
        }
    }

    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const { idModule } = req.params
            const module = await ModuleService.findOne(Number(idModule));
            res.json(module)
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { idModule } = req.params
            const module = await ModuleService.delete(Number(idModule));
            res.json(module)
        } catch (error) {
            res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const { idModule } = req.params
            const body = req.body
            const module = await ModuleService.update(Number(idModule), body);
            res.json(module)
        } catch (error) {
            res.json(error)
        }
    }

    async assignActivityToModule(req: Request, res: Response): Promise<void> {
        try {
            const { idModule, idAcivity } = req.params
            const module = await ModuleService.assignActivityToModule(Number(idModule), Number(idAcivity));
            res.json(module)
        } catch (error) {
            res.json(error)
        }
    }

    async removeActivityToModule(req: Request, res: Response): Promise<void> {
        try {
            const { idModule, idAcivity } = req.params
            await ModuleService.removeActivityToModule(Number(idModule), Number(idAcivity));
            res.json("Eliminado con exito")
        } catch (error) {
            res.json(error)
        }
    }

}

export default new ModuleController()