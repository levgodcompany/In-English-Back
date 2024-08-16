import { TypeLevel } from "@prisma/client";
import { TypeLevelService } from "../Services";
import { Request, Response } from "express";

class TypeLevelController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body: TypeLevel = req.body;
      const typeLevel = await TypeLevelService.create(body);
      res.json(typeLevel);
    } catch (error) {
      res.json(error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idTypeLevel } = req.params;
      const typeLevel = await TypeLevelService.findOne(Number(idTypeLevel));
      res.json(typeLevel);
    } catch (error) {
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const typeLevel = await TypeLevelService.findAll();
      res.json(typeLevel);
    } catch (error) {
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { idTypeLevel } = req.params;
      const body: TypeLevel = req.body;
      const typeLevel = await TypeLevelService.update(
        Number(idTypeLevel),
        body
      );
      res.json(typeLevel);
    } catch (error) {
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idTypeLevel } = req.params;
      const typeLevel = await TypeLevelService.delete(Number(idTypeLevel));
      res.json(typeLevel);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new TypeLevelController();
