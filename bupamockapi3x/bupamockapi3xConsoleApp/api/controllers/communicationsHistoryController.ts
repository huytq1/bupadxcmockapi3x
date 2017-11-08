import { Request, Response, NextFunction } from 'express';
import * as utils from '../utils';

export function getCommunicationSummary(req: Request, res: Response, next: NextFunction): void {
    utils.processRequestWithResponseBody(req, res, next, 'communicationsHistory/getCommunicationSummary');
}

export function getCommunicationDocument(req: Request, res: Response, next: NextFunction): void {
    utils.processRequestWithResponseBody(req, res, next, 'communicationsHistory/getCommunicationDocument');
}

export function getCommunicationDetail(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'communicationsHistory/getCommunicationDetail');
}

