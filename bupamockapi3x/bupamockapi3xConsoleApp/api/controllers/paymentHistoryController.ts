import { Request, Response, NextFunction } from 'express';
import * as utils from '../utils';

export function getPaymentHistory(req, res, next): void {
    //utils.processRequest(req, res, next, 'paymentHistory/getPaymentHistory');
    var membershipId = req.swagger.params.membershipId.value;
    switch (membershipId) {
        case 1234567:
            return res.status(406).send();
        default:
            utils.processRequestWithResponseBody(req, res, next, 'paymentHistory/getPaymentHistory');
            break;
    }
}

export function getPaymentDetail(req: Request, res: Response, next: NextFunction): void {
    utils.processRequestWithResponseBody(req, res, next, 'paymentHistory/getPaymentDetail');
}
