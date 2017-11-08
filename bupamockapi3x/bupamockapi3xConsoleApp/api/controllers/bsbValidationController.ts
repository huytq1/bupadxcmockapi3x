import { Request, Response, NextFunction } from 'express';
import * as utils from '../utils';

export function validateBsb(req, res, next): void {
    console.log(req)
    utils.processRequestWithResponseBody(req, res, next, 'bsbValidation/getBsbNumber');
}
