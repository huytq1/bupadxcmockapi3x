import { Request, Response, NextFunction } from 'express';
import * as utils from '../utils';

export function getPaymentFrequencies(req: Request, res: Response, next: NextFunction): void {
    utils.processRequest(req, res, next, 'reference/getPaymentFrequencies');
}
