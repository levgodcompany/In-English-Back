import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async assignStudentToSuscription(idSuscription: number, idStudent: number) {
    try {
      return SuscriptionAssignmentsRepository.assignStudentToSuscription(
        idSuscription,
        idStudent
      );
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new SuscriptionAssignmentsService();
