import { prisma } from "../../../../prisma";

class CourseRelationRepository {
  async assigStudentToCourse(idStudent: number, idCourse: number) {
    try {
        const existingRelation = await prisma.courseStudent.findUnique({
            where: {
                courseId_studentId: {
                    courseId: idCourse,
                    studentId: idStudent,
                },
            },
        });

        if (!existingRelation) {
            const course = await prisma.courseStudent.create({
                data: {
                    courseId: idCourse,
                    studentId: idStudent,
                },
            });
        }else {
            console.log(`El curso ya existe`)
        }

        
    } catch (error) {
        throw new Error(`Error al completar el modulo: ${error}`);
    }
  }
}

export default new CourseRelationRepository()
