import { Student } from "@prisma/client";
import AuthService from "./Auth.service";
import {
  StudentCRUDService,
  StudentEntityAssignmentService,
} from "../../Student/services/index";
import { HttpStatus, Rol, TokenExpiryOptions } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";
import CohortAssignmentsService from "../../Cohorts/Services/CohortAssignments.service";
import { prisma } from "../../../prisma";
import { transformStudentData } from "../dto/loginStudentDto";

class AuthStudentService extends AuthService<Student> {
  constructor() {
    const jwt = process.env.JWT_SECRET || "secret";
    super(jwt, TokenExpiryOptions.hours.oneHour, Rol.STUDENT);
  }

  async inscription(data: Student, idLevel: number, idCohort: number) {
    try {
      const student = await this.register(data);
      const idStudent = student.user.id;
      await StudentEntityAssignmentService.assignLevelToStudent(
        idStudent,
        idLevel
      );
      await CohortAssignmentsService.assignStudentToCohort(idCohort, idStudent);
    } catch (error) {
      throw error;
    }
  }

  async register(data: Student) {
    try {
      const hashedPassword = await this.hashPassword(data.password);
      const newStudent = await StudentCRUDService.create({
        ...data,
        password: hashedPassword,
      });
      const token = this.generateToken(newStudent.id);
      return {
        user: {
          id: newStudent.id,
          name: newStudent.name,
          lastName: newStudent.lastName,
          email: newStudent.email,
        },
        token: token,
      };
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(email: string, password: string) {
    const student = await StudentCRUDService.findOneByEmail(email);

    if (
      !student ||
      !(await this.comparePasswords(password, student.password))
    ) {
      throw new CustomError(
        "Invalid email or password",
        HttpStatus.UNAUTHORIZED
      );
    }

    const exep = ["014", "003", "005", "007", "012", "015"];

    if (exep.includes(student.status)) {
      throw new CustomError(`Usuario no avilitado`, HttpStatus.NOT_FOUND);
    }

    const studentData = await prisma.student.findUnique({
      where: { id: 8 },
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        levels: {
          select: {
            level: {
              select: {
                id: true,
                title: true,
                cohorts: {
                  select: {
                    id: true,
                    title: true,
                    cohortStudents: {
                      // where: { idStudent: student.id },
                      select: {
                        idCohort: true,
                        enabled: true,
                        
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    const token = this.generateToken(student.id);
    const trasform = transformStudentData(studentData);

    return {
      user: {
        ...trasform,
      },
      token,
    };
  }
}

export default new AuthStudentService();
