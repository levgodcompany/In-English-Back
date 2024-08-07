import { Payment } from "@prisma/client";
import { Request, Response } from "express";
import PaymentServices from "./Payment.service"


class PaymentController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const body: Payment = req.body;
            const newPayment = await PaymentServices.create(body);
            res.json(newPayment)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }

    async findAll(_req: Request, res: Response): Promise<void> {
        try {
            const payments = await PaymentServices.findAll();
            res.json(payments)
        } catch (error) {
            res.json(error)
        }
    }
    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const {idPayment} = req.params
            const payments = await PaymentServices.findOne(Number(idPayment));
            res.json(payments)
        } catch (error) {
            res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const body: Payment = req.body
            const {idPayment} = req.params
            const payments = await PaymentServices.update(Number(idPayment), body);
            res.json(payments)
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const {idPayment} = req.params
            const payment = await PaymentServices.delete(Number(idPayment));
            res.json(payment)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new PaymentController()