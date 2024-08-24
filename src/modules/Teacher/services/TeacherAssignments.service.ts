import { TeacherAssignmentsRepository } from "../repositories";

class TeacherAssignmentsService {
  // Métodos específicos para asignación de entidades
  assignLevelToTeacher(idTeacher: number, idLevel: number) {
    return TeacherAssignmentsRepository.assignLevelToTeacher(
      idTeacher,
      idLevel
    );
  }

  assignUnitToTeacher(idTeacher: number, idUnit: number) {
    return TeacherAssignmentsRepository.assignUnitToTeacher(idTeacher, idUnit);
  }

  assignCourseToTeacher(idTeacher: number, idCourse: number) {
    return TeacherAssignmentsRepository.assignCourseToTeacher(
      idTeacher,
      idCourse
    );
  }

  assignModuleToTeacher(idTeacher: number, idModule: number) {
    return TeacherAssignmentsRepository.assignModuleToTeacher(
      idTeacher,
      idModule
    );
  }
}

export default new TeacherAssignmentsService();
