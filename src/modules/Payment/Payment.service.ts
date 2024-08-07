import { Payment } from "@prisma/client"
import PaymentRepository from "./Payment.repository"

class PaymentServices {
    async create(data: Payment){
        try {
            return await PaymentRepository.create(data)
        } catch (error) {
            throw new Error(`Error al crear un payment: ${error}`)
        }
    }

    async findAll(){
        try {
            return await PaymentRepository.findAll()
        } catch (error) {
            throw new Error(`Error al buscar todas los payments: ${error}`)
        }
    }

    async findOne(id: number){
        try {
            return await PaymentRepository.findOne(id)
        } catch (error) {
            throw new Error(`Error al buscar un payment: ${error}`)
        }
    }

    async update(id: number, data: Payment){
        try {
            return await PaymentRepository.update(id, data)
        } catch (error) {
            throw new Error(`Error al actualizar un payment: ${error}`)
        }
    }

    async delete(id: number){
        try {
            return await PaymentRepository.delete(id)
        } catch (error) {
            throw new Error(`Error al eliminar un payment: ${error}`)
        }
    }

}

export default new PaymentServices()