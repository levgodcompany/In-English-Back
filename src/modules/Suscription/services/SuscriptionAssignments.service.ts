import { BenefitRepository } from "../../Benefit/repositories";
import { PaymentMethodRepositoy } from "../../PaymentMethod/repositories";
import { SuscriptionAssignmentsRepository } from "../repositories";

class SuscriptionAssignmentsService {
  async assignBenefitToSuscription(idSuscription: number, idBenefit: number) {
    try {
      return SuscriptionAssignmentsRepository.assignBenefitToSuscription(
        idSuscription,
        idBenefit
      );
    } catch (error) {
      throw new Error(
        `Error al asignar un beneficio a una suscripcion: ${error}`
      );
    }
  }

  async assignBenefitsToSuscription(
    idSuscription: number,
    idBenefits: number[]
  ) {
    try {
      const benefits = await BenefitRepository.findAllById(idBenefits);

      benefits.forEach(({ id }) => {
        SuscriptionAssignmentsRepository.assignBenefitToSuscription(
          idSuscription,
          id
        );
      });
    } catch (error) {
      throw new Error(
        `Error al asignar un beneficio a una suscripcion: ${error}`
      );
    }
  }

  async assignPaymentMethodToSuscription(
    idSuscription: number,
    idPaymentMethod: number
  ) {
    try {
      return SuscriptionAssignmentsRepository.assignPaymentMethodToSuscription(
        idSuscription,
        idPaymentMethod
      );
    } catch (error) {
      throw new Error(
        `Error al asignar un beneficio a una suscripcion: ${error}`
      );
    }
  }

  async assignPaymentMethodsToSuscription(
    idSuscription: number,
    idPaymentMethods: number[]
  ) {
    try {
      const paymentMethods = await PaymentMethodRepositoy.findAllById(
        idPaymentMethods
      );

      for (const { id } of paymentMethods) {
        await SuscriptionAssignmentsRepository.assignPaymentMethodToSuscription(
          idSuscription,
          id
        );
      }
    } catch (error) {
      throw new Error(
        `Error al asignar un beneficio a una suscripcion: ${error}`
      );
    }
  }

  async assignStudentToSuscription(idSuscription: number, idStudent: number) {
    try {
      return SuscriptionAssignmentsRepository.assignStudentToSuscription(
        idSuscription,
        idStudent
      );
    } catch (error) {
      throw new Error(
        `Error al asignar un beneficio a una suscripcion: ${error}`
      );
    }
  }
}

export default new SuscriptionAssignmentsService();
