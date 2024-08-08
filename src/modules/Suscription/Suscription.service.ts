import { Suscription } from "@prisma/client"
import SuscriptionRepository from "./Suscription.repository"
import BenefitRepository from "../Benefit/Benefit.repository"
import PaymentMethodRepositoy from "../PaymentMethod/PaymentMethod.repositoy"

class SuscriptionService {

    async create(data: Suscription){
        try {
            return await SuscriptionRepository.create(data)
        } catch (error) {
            throw new Error(`Error al crear una suscription: ${error}`)
        }
    }

    async findAll(){
        try {
            return await SuscriptionRepository.findAll()
        } catch (error) {
            throw new Error(`Error al buscar todas las suscriptions: ${error}`)
        }
    }

    async findOne(id: number){
        try {
            return await SuscriptionRepository.findOne(id)
        } catch (error) {
            throw new Error(`Error al buscar una suscription: ${error}`)
        }
    }

    async update(id: number, data: Suscription){
        try {
            return await SuscriptionRepository.update(id, data);
        } catch (error) {
            throw new Error(`Error al actualizar una suscription: ${error}`)
        }
    }

    async delete(id: number){
        try {
            return await SuscriptionRepository.delete(id)
        } catch (error) {
            throw new Error(`Error al buscar una suscription: ${error}`)
        }
    }


    async assignBenefitToSuscription(idSuscription:number, idBenefit: number){
        try {
            return SuscriptionRepository.assignBenefitToSuscription(idSuscription, idBenefit)
            
        } catch (error) {
            throw new Error(`Error al asignar un beneficio a una suscripcion: ${error}`)
        }
    }

    async assignBenefitsToSuscription(idSuscription:number, idBenefits: number[]){
        try {

            const benefits = await BenefitRepository.findAllById(idBenefits);

            benefits.forEach(({id})=> {
                SuscriptionRepository.assignBenefitToSuscription(idSuscription, id)
            })

        } catch (error) {
            throw new Error(`Error al asignar un beneficio a una suscripcion: ${error}`)
        }
    }

    async assignPaymentMethodToSuscription(idSuscription:number, idPaymentMethod: number){
        try {
            return SuscriptionRepository.assignPaymentMethodToSuscription(idSuscription, idPaymentMethod)
            
        } catch (error) {
            throw new Error(`Error al asignar un beneficio a una suscripcion: ${error}`)
        }
    }

    async assignPaymentMethodsToSuscription(idSuscription:number, idPaymentMethods: number[]){
        try {

            const paymentMethods = await PaymentMethodRepositoy.findAllById(idPaymentMethods);

            for(const { id } of paymentMethods){
                await SuscriptionRepository.assignPaymentMethodToSuscription(idSuscription, id)
            }
            
        } catch (error) {
            throw new Error(`Error al asignar un beneficio a una suscripcion: ${error}`)
        }
    }


    async assignStudentToSuscription(idSuscription:number, idStudent: number){
        try {
            return SuscriptionRepository.assignStudentToSuscription(idSuscription, idStudent)
            
        } catch (error) {
            throw new Error(`Error al asignar un beneficio a una suscripcion: ${error}`)
        }
    }


}

export default new SuscriptionService()