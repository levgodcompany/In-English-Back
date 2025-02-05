import { Teacher } from "@prisma/client";
import AuthService from "./Auth.service";
import { TeacherService } from "../../Teacher/services/index";
import { response } from "../dto/AuthDto";
import { HttpStatus, Rol, TokenExpiryOptions } from "../../../utilities";
import { CustomError } from "../../../utilities/Errors";

class AuthTeacherService extends AuthService<Teacher> {
  constructor() {
    const jwt = process.env.JWT_SECRET || "secret";
    super(jwt, TokenExpiryOptions.hours.sixHours, Rol.TEACHER);
  }

  async register(data: Teacher): Promise<{ user: response; token: string }> {
    try {
      const hashedPassword = await this.hashPassword(data.password);
      const newTeacher = await TeacherService.create({
        ...data,
        password: hashedPassword,
      });

      const token = this.generateToken(newTeacher.id);
      return {
        user: {
          id: newTeacher.id,
          email: newTeacher.email,
          name: newTeacher.name,
          lastName: newTeacher.lastName,
        },
        token,
      };
    } catch (error) {
      throw new CustomError(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(
    email: string,
    password: string
  ): Promise<{ user: response; token: string }> {
    // try {
    const teacher = await TeacherService.findOneByEmail(email);

    if (
      !teacher ||
      !(await this.comparePasswords(password, teacher.password))
    ) {
      throw new CustomError(
        "Invalid email or password",
        HttpStatus.UNAUTHORIZED
      );
    }

    const token = this.generateToken(teacher.id);
    return {
      user: {
        id: teacher.id,
        email: teacher.email,
        name: teacher.name,
        lastName: teacher.lastName,
      },
      token,
    };
    // } catch (error) {
    //   throw error;
    // }
  }
}

export default new AuthTeacherService();
