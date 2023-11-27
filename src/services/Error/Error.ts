import formateError from '../../utils/error/formateError';

class CustomError {
  message: string;

  status: number;

  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
  }

  static notFound(message = '404 Not Found', status = 404) {
    return new CustomError(formateError(message), status);
  }

  static unauthorized(message = 'Unauthorized', status = 401) {
    return new CustomError(formateError(message), status);
  }
}

export default CustomError;
