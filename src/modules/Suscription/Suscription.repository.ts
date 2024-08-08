import { Suscription } from "@prisma/client";
import {prisma} from "../../../prisma/index"

class SuscriptionRepository {

    async create(data: Suscription){
        try {
            return await prisma.suscription.create({data})
        } catch (error) {
            throw new Error(`Error al crear una suscription: ${error}`)
        }
    }

    async findAll(){
        try {
            return await prisma.suscription.findMany()
        } catch (error) {
            throw new Error(`Error al buscar todas las suscriptions: ${error}`)
        }
    }

    async findOne(id: number){
        try {
            return await prisma.suscription.findUnique({where: {id}})
        } catch (error) {
            throw new Error(`Error al buscar una suscription: ${error}`)
        }
    }

    async update(id: number, data: Suscription){
        try {
            return await prisma.suscription.update({where: {id}, data});
        } catch (error) {
            throw new Error(`Error al actualizar una suscription: ${error}`)
        }
    }

    async delete(id: number){
        try {
            return await prisma.suscription.delete({where: {id}})
        } catch (error) {
            throw new Error(`Error al buscar una suscription: ${error}`)
        }
    }


    async assignBenefitToSuscription(idSubscription: number, idBenefit: number) {
        try {
            // Buscar el beneficio en la base de datos
            const benefit = await prisma.benefit.findUnique({
                where: { id: idBenefit }
            });
    
            // Verificar si el beneficio existe
            if (benefit) {
               // Actualizar la suscripción con el beneficio
            return await prisma.suscription.update({
                where: { id: idSubscription },
                data: {
                    benefits: {
                        connectOrCreate: {
                            where: {
                                idSuscription_idBenefit: {
                                    idBenefit,
                                    idSuscription: idSubscription
                                }
                            },
                            create: {
                                idBenefit
                            }
                        }
                    }
                }
            });
    
            }
    
            
        } catch (error) {
            // Manejo de errores más específico
            console.error('Error al asignar un beneficio a una suscripción:', error);
            throw new Error(`Error al asignar un beneficio a una suscripción: ${error}`);
        }
    }
    

    async assignPaymentMethodToSuscription(idSuscription:number, idPaymentMethod: number){
        try {
            const paymentMethod = await prisma.paymentMethod.findUnique({where: {id: idPaymentMethod}});

            if(!paymentMethod){
                throw new Error(`No se econtro el metodo de pago con el ID ${idPaymentMethod}`);
            }

            return await prisma.suscription.update({
                where: {
                    id: idSuscription
                },
                data: {
                    paymentMethods: {
                        connectOrCreate: {
                            where: {
                                idSuscription_idPaymentMethod: {
                                    idPaymentMethod,
                                    idSuscription
                                }
                            },
                            create: {
                                idPaymentMethod
                            }
                        }
                    }
                }
            })

            
        } catch (error) {
            throw new Error(`Error al asignar un beneficio a una suscripcion: ${error}`)
        }
    }

    async assignStudentToSuscription(idSuscription:number, idStudent: number){
        try {
            const student = await prisma.student.findUnique({where: {id: idStudent}});

            if(!student){
                throw new Error(`No se econtro el sutdent con el ID ${idStudent}`);
            }

            return await prisma.suscription.update({
                where: {
                    id: idSuscription
                },
                data: {
                    students: {
                        connect: {
                            idStudent_idSuscription: {
                                idStudent,
                                idSuscription
                            }
                        }
                    }
                }
            })

            
        } catch (error) {
            throw new Error(`Error al asignar un beneficio a una suscripcion: ${error}`)
        }
    }

}

export default new SuscriptionRepository()