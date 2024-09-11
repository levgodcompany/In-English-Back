import { prisma } from "../../../prisma";
import { HttpStatus } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";

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
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
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
