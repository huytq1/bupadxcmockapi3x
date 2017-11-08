import * as utils from '../utils';

export function getPersonAddressInfo(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPersonAddressInfo');
}

export function getPolicyPersonAddress(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPolicyPersonAddress');
}

export function getPersonContactInfo(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPersonContactInfo');
}

export function getPolicyPersonContactInfo(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPolicyPersonContactInfo');
}

export function getPersonMembershipCommunications(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPersonMembershipCommunications');
}

export function getPersonPoliciesInformation(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPersonPoliciesInformation');
}

export function getTop5Claims(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getTop5Claims');
}
