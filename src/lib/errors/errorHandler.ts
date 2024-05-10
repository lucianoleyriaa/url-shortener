import { PrismaClientValidationError } from "@prisma/client/runtime/library";

export const errorHandler = (error: any) => {
  if (error instanceof PrismaClientValidationError) {
    return {
      error: true,
      data: null,
      status: 400,
      message: error.message,
    }
  } 

  return {
    error: true,
    data: null,
    status: error.statusCode,
    message: error.message,
  }
}