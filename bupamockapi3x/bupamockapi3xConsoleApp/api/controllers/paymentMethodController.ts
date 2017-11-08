import * as utils from '../utils';
export function calculateRenewalAmount(req, res, next) {
    console.log('calculateRenewalAmount');
    utils.processRequestWithResponseBody(req, res, next, 'paymentMethod/calculateRenewalAmount');
}

export function updatePaymentMethod(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'paymentMethod/updatePaymentMethod');
}
