import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../services";
import { Category } from "@prisma/client";

class CategoryController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Category = req.body;
      body.id = Number(body.id);
      const newCohort = await CategoryService.create(body);
      res.json(newCohort);
    } catch (error) {
      console.log("Error", error);
      next(error);
    }
  }

  async findAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const Category = await CategoryService.findAll();
      res.json(Category);
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
      const { idCategory } = req.params;
      const cohort = await CategoryService.findOne(Number(idCategory));
      res.json(cohort);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Category = req.body;
      const { idCategory } = req.params;
      const cohort = await CategoryService.update(Number(idCategory), body);
      res.json(cohort);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idCategory } = req.params;
      const cohort = await CategoryService.delete(Number(idCategory));
      res.json(cohort);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default new CategoryController();
