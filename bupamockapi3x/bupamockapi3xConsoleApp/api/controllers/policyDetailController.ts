import { Request, Response, NextFunction } from 'express';
import * as utils from '../utils';

export function getPolicyDetail(req: any, res: any, next: any): void {
    utils.processRequestWithResponseBody(req, res, next, 'policyDetail/getPolicyDetail');
}
