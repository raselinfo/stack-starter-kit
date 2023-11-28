import { NextFunction, Request, Response } from 'express';

const demoController = (_req: Request, _res: Response, next: NextFunction) => {
  next({ message: 'Hello errro', status: 300 });
  // res.status(200).json({ message: 'OK Demo' });
};
export default demoController;
