import { Request, Response, NextFunction } from 'express';
import * as utils from '../utils';

export function getCustomerByCustomerId(req, res, next): void {
    console.log(req)
    utils.processRequest(req, res, next, 'customerSearch/getCustomerByCustomerId');
}

export function getCustomerByAttribute(req: Request, res: Response, next: NextFunction): void {
    utils.processRequest(req, res, next, 'customerSearch/getCustomerByAttribute');
}

export function getCustomerDetailWithMembershipId(req: Request, res: Response, next: NextFunction): void {
    utils.processRequest(req, res, next, 'customerSearch/getCustomerDetailWithMembershipId');
}

export function getCustomerDetail(req: Request, res: Response, next: NextFunction): void {
    utils.processRequest(req, res, next, 'customerSearch/getCustomerDetail');
}