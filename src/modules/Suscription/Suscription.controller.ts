import { Suscription } from "@prisma/client";
import { Request, Response } from "express";
import SuscriptionService from "./Suscription.service";

class SuscriptionController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const body: Suscription = req.body;
            const suscripcion = await SuscriptionService.create(body);
            res.json(suscripcion)
        } catch (error) {
            console.log("Error", error)
            res.json(error)
        }
    }

    async findAll(_req: Request, res: Response): Promise<void> {
        try {
            const suscriptions = await SuscriptionService.findAll();
            res.json(suscriptions)
        } catch (error) {
            res.json(error)
        }
    }
    async findOne(req: Request, res: Response): Promise<void> {
        try {
            const {idSuscription} = req.params
            const suscripcion = await SuscriptionService.findOne(Number(idSuscription));
            res.json(suscripcion)
        } catch (error) {
            res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const body: Suscription = req.body
            const {idSuscription} = req.params
            const suscripcion = await SuscriptionService.update(Number(idSuscription), body);
            res.json(suscripcion)
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const {idSuscription} = req.params
            const suscription = await SuscriptionService.delete(Number(idSuscription));
            res.json(suscription)
        } catch (error) {
            res.json(error)
        }
    }


    async assignStudentToSuscription(req: Request, res: Response): Promise<void> {
        try {
            const {idSuscription, idStudent} = req.params
            const suscription = await SuscriptionService.assignStudentToSuscription(Number(idSuscription), Number(idStudent));
            res.json(suscription)
        } catch (error) {
            res.json(error)
        }
    }
    async assignBenefitToSuscription(req: Request, res: Response): Promise<void> {
        try {
            const {idSuscription, idBenefit} = req.params
            const suscription = await SuscriptionService.assignBenefitToSuscription(Number(idSuscription), Number(idBenefit));
            res.json(suscription)
        } catch (error) {
            res.json(error)
        }
    }
    async assignPaymentMethodToSuscription(req: Request, res: Response): Promise<void> {
        try {
            const {idSuscription, idPaymentMethod} = req.params
            const suscription = await SuscriptionService.assignPaymentMethodToSuscription(Number(idSuscription), Number(idPaymentMethod));
            res.json(suscription)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new SuscriptionController()