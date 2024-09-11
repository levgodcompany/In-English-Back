import { CourseRelationRepository } from "../repositories";

class CourseRelationService {
  async assigStudentToCourse(idStudent: number, idCourse: number) {
    await CourseRelationRepository.assigStudentToCourse(idStudent, idCourse);
  }
}

export default new CourseRelationService();
