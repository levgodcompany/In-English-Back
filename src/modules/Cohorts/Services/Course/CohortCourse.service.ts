import CohortCourseRepository from "../../Repositoryies/Course/CohortCourse.repository";

class CohortCourseService {
  async enableCourse(idCohort: number, idCourse: number, enabled: boolean) {
    await CohortCourseRepository.enableCourse(idCohort, idCourse, enabled);
  }

  async delete(idCohort: number, idCourse: number) {
    await CohortCourseRepository.delete(idCohort, idCourse);
  }
}

export default new CohortCourseService();
