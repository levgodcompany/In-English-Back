import { Student } from "@prisma/client";
import { prisma } from "../../../prisma";


class StudentModel {
    /*
        Metodo para obtener a un Student 
     */
    async findOne(id: number) {
        try {
            const student = await prisma.student.findUnique({
                where: {
                    id
                },
                include: {
                    activitySubmission: true,
                    courses: true,
                    levels: {
                        include: {
                            level: {
                                select: {
                                    title: true,
                                    description: true,
                                    order: true
                                }
                            }
                        }
                    },
                    modules: true,
                    units: true
                }
            });

            if (!student) {
                throw new Error(`Student no encontrado ${id}`)
            }

            return student;

        } catch (error) {
            throw new Error(`Error al buscar el Student: ${error}`)
        }
    }

    /*
        Metodo para obtener a un Student con sus relaciones
    */

    async findOneStudentWithRelations(id: number, relations: string[]) {
        try {
            const includeRelations = relations.reduce((acc, relation) => {
                acc[relation] = true;
                return acc;
            }, {} as Record<string, boolean>);

            const student = await prisma.student.findUnique({
                where: {
                    id
                },
                include: includeRelations
            });

            return student;

        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    // Metodo para obtener todos los Students
    async findAll(): Promise<Student[]> {
        try {
            const students = await prisma.student.findMany();
            return students;

        } catch (error) {
            throw new Error(`Error al buscar todos los Student${error}`)
        }

    }

    // Metodo para obtener todos los student con sus relaciones
    async findAllStudentsWithRelations(relations: string[]) {
        try {
            const includeRelations = relations.reduce((acc, relation) => {
                acc[relation] = true;
                return acc
            }, {} as Record<string, boolean>);

            let students = await prisma.student.findMany({
                include: includeRelations
            });

            return students;

        } catch (error) {
            throw new Error(`Error al buscar los estudiantes con sus relaciones${error}`)
        }
    }


    async create(data: Student) {
        try {
            const student = await prisma.student.create({ data });
            return student;

        } catch (error) {
            throw new Error(`Error al crear un Student${error}`)
        }
    }


    async update(id: number, data: Student) {
        try {
            const student = await prisma.student.update({
                where: { id },
                data
            })

            return student;

        } catch (error) {
            throw new Error(`Error al actualizar un Student${error}`)
        }
    }


    /*
        CRUD CON NIVELES
    */
    async assignLevelToStudent(idStudent: number, idLevel: number) {
        try {
            const level = await prisma.level.findUnique({ where: { id: idLevel } });
            if (!level) {
                throw new Error(`No se encontro el Level ${level}`)
            }
            const student = await prisma.student.findUnique({ where: { id: idStudent } });

            if (!student) {
                throw new Error(`No se encontro el Student ${idStudent}`);
            }

            const updateStudent = await prisma.student.update({
                where: {
                    id: idStudent
                },
                data: {
                    levels: {
                        connectOrCreate: {
                            where: {
                                levelId_studentId: {
                                    levelId: idLevel,
                                    studentId: idStudent
                                }
                            },
                            create: {
                                levelId: idLevel
                            }
                        }
                    }
                },
                include: {
                    levels: {
                        include: {
                            level: {
                                select: {
                                    title: true,
                                    description: true,
                                    id: true
                                }
                            }
                        }
                    }
                }
            })

            return updateStudent;

        } catch (error) {
            throw new Error(`Error al asignar el Student al Level: ${error}`)
        }
    }

    async updateStudentLevel(idStudent: number, idLevelPrev: number, idLevel ) {
        try {
            return await prisma.levelStudent.update({
                where: {
                    levelId_studentId: {
                        levelId: idLevelPrev,
                        studentId: idStudent
                    }
                },
                data: {
                    levelId: idLevel,
                    studentId: idStudent
                }
            })

        } catch (error) {
            throw new Error(`Eror al actualizar el Student del Level: ${error}`)
        }
    }

    async removeLevelFromStudent(idStudent: number, idLevel: number) {
        try {
            await prisma.levelStudent.delete({
                where: {
                    levelId_studentId: {
                        levelId: idLevel,
                        studentId: idStudent
                    }
                }
            })

        } catch (error) {
            throw new Error(`Error al remover el Student del Level: ${error}`)
        }
    }


    /*
        CRUD CON UNIDADES
    */

    /*
        CRUD CON CURSOS
    */

    async assignCourseToStudent(studentId: number, courseId: number) {
        return await prisma.student.update({
            where: { id: studentId },
            data: {
                courses: {
                    connect: {
                        courseId_studentId: {
                            courseId: courseId,
                            studentId: studentId
                        }
                    }
                },
            },
        });
    }

    async updateStudentCourses(studentId: number, courseIds: number[]) {
        return await prisma.student.update({
            where: { id: studentId },
            data: {
                courses: {
                    set: courseIds.map(id => ({
                        courseId_studentId: {
                            courseId: studentId,
                            studentId: id
                        }
                    }))
                },
            },
            include: {
                courses: true, // Incluir para verificar los cursos actualizados
            },
        });
    }

    async removeCourseFromStudent(studentId: number, courseId: number) {
        return await prisma.student.update({
            where: { id: studentId },
            data: {
                courses: {
                    disconnect: {
                        courseId_studentId: {
                            courseId: courseId,
                            studentId: studentId
                        }
                    }
                },
            },
        });
    }

    /*
        CRUD CON MODULOS
    */
}

export default new StudentModel()