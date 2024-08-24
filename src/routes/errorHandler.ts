import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utilities/Errors";

const errorHandler = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.statusCode;
  const message = err.message;

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export default errorHandler;
