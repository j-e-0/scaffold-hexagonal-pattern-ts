import { Request, Response, NextFunction } from 'express';

export function validateNumber(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Invalid ID, must be a number' });
  }
  next();
}
