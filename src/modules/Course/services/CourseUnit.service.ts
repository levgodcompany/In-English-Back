import { CourseInfoBasic } from "../CourseDto";
import { CourseCRUDRepository, CourseUnitRepository } from "../repositories";

class CourseUnitService {
  async findAllByIdUnit(idUnit: number) {
    try {
      return CourseUnitRepository.findAllByIdUnit(idUnit);
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }

  async findAllInfoBasic() {
    try {
      const courses = await CourseCRUDRepository.findAll();
      return courses.map((course) => {
        const info: CourseInfoBasic = {
          id: course.id,
          title: course.title,
          idUnit: course.idUnit,
        };
        return info;
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async findAllUnitiesByIdCourse(idUnit: number) {
    try {
      return CourseUnitRepository.findAllUnitiesByIdCourse(idUnit);
    } catch (error) {
      throw new Error(`Error al buscar los courses: ${error}`);
    }
  }
}

export default new CourseUnitService();
