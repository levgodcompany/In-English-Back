import { Benefit } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { BenefitServices } from "../services";

class BenefitController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Benefit = req.body;
      const newBenefit = await BenefitServices.create(body);
      res.json(newBenefit);
    } catch (error) {
      console.log("Error", error);
      next(error)
    }
  }

  async findAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const benefits = await BenefitServices.findAll();
      res.json(benefits);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
  async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idBenefit } = req.params;
      const benefits = await BenefitServices.findOne(Number(idBenefit));
      res.json(benefits);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body: Benefit = req.body;
      const { idBenefit } = req.params;
      const benefits = await BenefitServices.update(Number(idBenefit), body);
      res.json(benefits);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idBenefit } = req.params;
      const benefits = await BenefitServices.delete(Number(idBenefit));
      res.json(benefits);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

export default new BenefitController();
