import { Request, Response } from "express";
import { SuscriptionAssignmentsService } from "../services";

class SuscriptionAssignmentsController {
  async assignStudentToSuscription(req: Request, res: Response): Promise<void> {
    try {
      const { idSuscription, idStudent } = req.params;
      const suscription =
        await SuscriptionAssignmentsService.assignStudentToSuscription(
          Number(idSuscription),
          Number(idStudent)
        );
      res.json(suscription);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async assignBenefitToSuscription(req: Request, res: Response): Promise<void> {
    try {
      const { idSuscription, idBenefit } = req.params;
      const suscription =
        await SuscriptionAssignmentsService.assignBenefitToSuscription(
          Number(idSuscription),
          Number(idBenefit)
        );
      res.json(suscription);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async assignBenefitsToSuscription(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idSuscription } = req.params;
      const idBenefits: number[] = req.body;
      console.log("Beneficios", idBenefits);
      const suscription =
        await SuscriptionAssignmentsService.assignBenefitsToSuscription(
          Number(idSuscription),
          idBenefits.map((id) => Number(id))
        );
      res.json(suscription);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async assignPaymentMethodToSuscription(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idSuscription, idPaymentMethod } = req.params;
      const suscription =
        await SuscriptionAssignmentsService.assignPaymentMethodToSuscription(
          Number(idSuscription),
          Number(idPaymentMethod)
        );
      res.json(suscription);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async assignPaymentMethodsToSuscription(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { idSuscription } = req.params;
      const idPaymentMethods: number[] = req.body;
      const suscription =
        await SuscriptionAssignmentsService.assignPaymentMethodsToSuscription(
          Number(idSuscription),
          idPaymentMethods.map((id) => Number(id))
        );
      res.json(suscription);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

export default new SuscriptionAssignmentsController();
