import { Request, Response, NextFunction } from "express";
// @desc Logs request to console
export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //req.get("host") instead of req.host because req.host does not show port
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};
