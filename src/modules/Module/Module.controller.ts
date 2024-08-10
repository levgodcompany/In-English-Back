import { Module } from "@prisma/client";
import { Request, Response } from "express";
import ModuleService from "./Module.service";

class ModuleController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const module: Module = req.body;
      module.order = Number(module.order);
      module.idCourse = Number(module.idCourse);
      const newModule = await ModuleService.create(module);
      res.json(newModule);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const modules = await ModuleService.findAll();
      res.json(modules);
    } catch (error) {
      res.json(error);
    }
  }

  async findAllByIdCourse(req: Request, res: Response): Promise<void> {
    try {
      const { idCourse } = req.params;
      const modules = await ModuleService.findAllByIdCourse(Number(idCourse));
      res.json(modules);
    } catch (error) {
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idModule } = req.params;
      const module = await ModuleService.findOne(Number(idModule));
      res.json(module);
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idModule } = req.params;
      const module = await ModuleService.delete(Number(idModule));
      res.json(module);
    } catch (error) {
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { idModule } = req.params;
      const body = req.body;
      body.order = Number(body.order);
      body.idCourse = Number(body.idCourse);
      const module = await ModuleService.update(Number(idModule), body);
      res.json(module);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new ModuleController();
