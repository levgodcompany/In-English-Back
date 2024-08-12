import { Suscription } from "@prisma/client";
import { Request, Response } from "express";
import { SuscriptionService } from "../services";

class SuscriptionController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body: Suscription = req.body;
      body.idLevel = Number(body.idLevel);
      body.discountPercentage = Number(body.discountPercentage);
      body.numInstallments = Number(body.numInstallments);
      const suscripcion = await SuscriptionService.create(body);
      res.json(suscripcion);
    } catch (error) {
      console.log("Error", error);
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const suscriptions = await SuscriptionService.findAll();
      res.json(suscriptions);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idSuscription } = req.params;
      const suscripcion = await SuscriptionService.findOne(
        Number(idSuscription)
      );
      res.json(suscripcion);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const body: Suscription = req.body;
      const { idSuscription } = req.params;
      const suscripcion = await SuscriptionService.update(
        Number(idSuscription),
        body
      );
      res.json(suscripcion);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idSuscription } = req.params;
      const suscription = await SuscriptionService.delete(
        Number(idSuscription)
      );
      res.json(suscription);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new SuscriptionController();
