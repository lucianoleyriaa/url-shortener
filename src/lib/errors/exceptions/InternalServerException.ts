

export class InternalServerException extends Error {
  statusCode: number = 500;

  constructor(message: string = 'Internal server error') {
    super(message);
    this.name = 'InternalServerException';
  }

}