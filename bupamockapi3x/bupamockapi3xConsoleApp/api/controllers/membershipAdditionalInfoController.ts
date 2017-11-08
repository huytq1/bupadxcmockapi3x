import { Request, Response, NextFunction } from 'express';
import * as utils from '../utils';

export function getMembershipAdditionalInfo(req: any, res: any, next: any): void {
    utils.processRequest(req, res, next, 'membershipAdditionalInfo/getMembershipAdditionalInfo');
}

export function getMembershipAddress(req, res , next) {
  utils.processRequest(req, res, next, 'membershipAdditionalInfo/getMembershipAddress');
}

export function getPersonAddress(req, res, next) {
    utils.processRequest(req, res, next, 'membershipAdditionalInfo/getPersonAddress');
}

export function getMembershipAddresses(req, res, next) {
    console.log(req)
    let type = req.query && req.query.type ? req.query.type : ''
    if(type=='default'){
      req.swagger.params.type = 'default'
    }
    else{
      req.swagger.params.type = ''
    }
    utils.processRequestWithResponseBodyAsAddress(req, res, next, 'membershipAdditionalInfo/getMembershipAddresses');
}
