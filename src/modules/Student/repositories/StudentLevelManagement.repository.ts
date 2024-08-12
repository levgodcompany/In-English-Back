import { prisma } from "../../../../prisma";

class StudentLevelManagement {
  async updateStudentLevel(
    idStudent: number,
    idLevelPrev: number,
    idLevel: number
  ) {
    try {
      return await prisma.levelStudent.update({
        where: {
          levelId_studentId: {
            levelId: idLevelPrev,
            studentId: idStudent,
          },
        },
        data: {
          levelId: idLevel,
          studentId: idStudent,
        },
      });
    } catch (error) {
      throw new Error(`Eror al actualizar el Student del Level: ${error}`);
    }
  }

  async updateStudentCourses(studentId: number, courseIds: number[]) {
    return await prisma.student.update({
      where: { id: studentId },
      data: {
        courses: {
          set: courseIds.map((id) => ({
            courseId_studentId: {
              courseId: studentId,
              studentId: id,
            },
          })),
        },
      },
      include: {
        courses: true, // Incluir para verificar los cursos actualizados
      },
    });
  }
}

export default new StudentLevelManagement();
