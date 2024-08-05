import { Course } from "@prisma/client";
import { prisma } from "../../../prisma";

class CourseRepository {

    async create(data: Course) {
        try {
            const course = await prisma.course.create({
                data
            });

            return course
        } catch (error) {
            throw new Error(`Error al crear el course: ${error}`);
        }
    }

    async findOne(id: number) {
        try {
            const course = await prisma.course.findUnique({ where: { id } });
            return course
        } catch (error) {
            throw new Error(`Error al buscar el course: ${error}`);
        }
    }

    async findAll() {
        try {
            const courses = await prisma.course.findMany()
            return courses
        } catch (error) {
            throw new Error(`Error al buscar los courses: ${error}`);
        }
    }

    async update(id: number, data: Course) {
        try {
            const course = await prisma.course.update({ where: { id }, data });
            return course
        } catch (error) {
            throw new Error(`Error al actualizar el Course: ${error}`);
        }
    }

    async delete(id: number) {
        try {
            const course = await prisma.course.delete({ where: { id } });
            return course
        } catch (error) {
            throw new Error(`Error al eliminar el course: ${error}`);
        }
    }


    // Métodos específicos para asignación de entidades
    async assignActivityToCourse(idCourse: number, idAcivity: number) {
        try {
            const updatedCourse = await prisma.course.update({
                where: { id: idCourse },
                data: {
                    activities: {
                        connectOrCreate: {
                            where: {
                                courseId_activityId: {
                                    activityId: idAcivity,
                                    courseId: idCourse
                                }
                            },
                            create: {
                                activityId: idAcivity
                            }
                        }
                    }
                }
            });

            return updatedCourse;
        } catch (error) {
            throw new Error(`Error al associar el Course con Activity: ${error}`);
        }
    }

    async removeActivityToCourse(idCourse: number, idAcivity: number){
        try {
            await prisma.courseActivity.delete({
                where: {
                    courseId_activityId: {
                        activityId: idAcivity,
                        courseId: idCourse
                    }
                }
            })
        } catch (error) {
            throw new Error(`Error al remover el Course de la Activity: ${error}`);
        }
    }


}

export default new CourseRepository();