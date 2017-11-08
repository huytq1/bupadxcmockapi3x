import { Request, Response, NextFunction } from 'express';
import * as utils from '../utils';

export function getContactInformationDetail(req: Request, res: Response, next: NextFunction): void {
    utils.processRequestWithResponseBody(req, res, next, 'paymentStatementReceipt/getContactInformationDetail');
}

export function getAddressInformation(req: Request, res: Response, next: NextFunction): void {
    utils.processRequestWithResponseBody(req, res, next, 'paymentStatementReceipt/getAddressInformation');
}

export function getCommunicationInformation(req, res, next): void {
    var membershipId = req.swagger.params.membershipId.value;
    switch (membershipId)
    {
        case 11211107:
            return res.status(400).send();
        case 11211108:
            return res.status(401).send();
        case 11211109:
            return res.status(403).send();
        case 11211110:
            return res.status(404).send();
        case 11211111:
            return res.status(406).send();
        case 11211112:
            return res.status(500).send();
        default:
            utils.processRequestWithResponseBody(req, res, next, 'paymentStatementReceipt/getCommunicationInformation');
            break;
    }
    
}

export function getAddressValidation(req, res, next): void {
    //utils.processRequest(req, res, next, 'paymentStatementReceipt/getAddressValidation');
    var addressSearch = req.swagger.params.addressLine.value;
    console.log(addressSearch)
    switch (addressSearch) {
        case "error 404":
            return res.status(404).send();
        case "error 500":
            return res.status(500).send();
        case "error 400":
            return res.status(400).send();
        case "error 401":
            return res.status(401).send();
        case "error 403":
            return res.status(403).send();
        case "error 406":
            return res.status(406).send();
        case "error 204":
            return res.status(204).send();
        default:
            utils.processRequestWithResponseBody(req, res, next, 'paymentStatementReceipt/getAddressValidation');
            break;
    }
}