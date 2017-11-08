import * as utils from '../utils';

export function getPolicyDetails(req, res, next): void {
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyDetails');
}

export function getPolicyCoverSummary(req, res, next): void {
    console.log('getPolicyCoverSummary')
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyCoverSummary');
}

export function getPolicyClaimsandPaymentsTotals(req, res, next): void {
    console.log('getPolicyClaimsandPaymentsTotals')
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyClaimsandPaymentsTotals');
}

export function getPolicyCommunicationPreferences(req, res, next): void {
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyCommunicationPreferences');
}

export function getPersonsOnPolicy(req, res, next): void {
    utils.processRequest(req, res, next, 'displayPolicy/getPersonsOnPolicy');
}

export function getSpecialFeatures(req, res, next): void {
    utils.processRequest(req, res, next, 'displayPolicy/getSpecialFeatures');
}

export function getPolicyStatus(req, res, next): void {
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyStatus');
}
export function getRemainigLimits(req, res, next): void {
    utils.processRequest(req, res, next, 'displayPolicy/getRemainingLimits');
}

export function getAdditionalPolicyDetails(req, res, next): void {
    utils.processRequest(req, res, next, 'displayPolicy/getAdditionalPolicyDetails');
}
