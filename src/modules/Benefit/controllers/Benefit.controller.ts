import { Benefit } from "@prisma/client";
import { Request, Response } from "express";
import { BenefitServices } from "../services";

class BenefitController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body: Benefit = req.body;
      const newBenefit = await BenefitServices.create(body);
      res.json(newBenefit);
    } catch (error) {
      console.log("Error", error);
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const benefits = await BenefitServices.findAll();
      res.json(benefits);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idBenefit } = req.params;
      const benefits = await BenefitServices.findOne(Number(idBenefit));
      res.json(benefits);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const body: Benefit = req.body;
      const { idBenefit } = req.params;
      const benefits = await BenefitServices.update(Number(idBenefit), body);
      res.json(benefits);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idBenefit } = req.params;
      const benefits = await BenefitServices.delete(Number(idBenefit));
      res.json(benefits);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new BenefitController();
