import { PaymentMethod } from "@prisma/client";
import { Request, Response } from "express";
import { PaymentMethodServices } from "../services";

class PaymentMethodController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body: PaymentMethod = req.body;
      const newPaymentMethod = await PaymentMethodServices.create(body);
      res.json(newPaymentMethod);
    } catch (error) {
      console.log("Error", error);
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const paymentMethods = await PaymentMethodServices.findAll();
      res.json(paymentMethods);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { idPaymentMethod } = req.params;
      const paymentMethod = await PaymentMethodServices.findOne(
        Number(idPaymentMethod)
      );
      res.json(paymentMethod);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const body: PaymentMethod = req.body;
      const { idPaymentMethod } = req.params;
      const paymentMethod = await PaymentMethodServices.update(
        Number(idPaymentMethod),
        body
      );
      res.json(paymentMethod);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { idPaymentMethod } = req.params;
      const paymentMethod = await PaymentMethodServices.delete(
        Number(idPaymentMethod)
      );
      res.json(paymentMethod);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new PaymentMethodController();
