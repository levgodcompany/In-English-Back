import { Student } from "@prisma/client";
import AuthService from "./Auth.service";
import { StudentCRUDService } from "../../Student/services/index";
import { HttpStatus, Rol, TokenExpiryOptions } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";

class AuthStudentService extends AuthService<Student> {
  constructor() {
    const jwt = process.env.JWT_SECRET || "secret";
    super(jwt, TokenExpiryOptions.hours.oneHour, Rol.STUDENT);
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

    if (student.status == "014") {
      throw new CustomError(`Usuario no avilitado`, HttpStatus.NOT_FOUND);
    }

    const token = this.generateToken(student.id);

    return {
      user: {
        id: student.id,
        name: student.name,
        lastName: student.lastName,
        email: student.email,
      },
      token,
    };
  }
}

export default new AuthStudentService();
