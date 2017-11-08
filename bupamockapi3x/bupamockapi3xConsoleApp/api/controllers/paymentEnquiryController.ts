import * as utils from '../utils';

export function getCurrentContributorName(req, res, next): void {
    utils.processRequest(req, res, next, 'paymentEnquiry/getCurrentContributorName');
}

export function getMembershipAdditionalProperties(req, res, next): void {
    utils.processRequest(req, res, next, 'paymentEnquiry/getMembershipAdditionalProperties');
}

export function getClaimsLatestServiceDate(req, res, next): void {
    utils.processRequest(req, res, next, 'paymentEnquiry/getClaimsLatestServiceDate');
}
