"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getPersonAddressInfo(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPersonAddressInfo');
}
exports.getPersonAddressInfo = getPersonAddressInfo;
function getPolicyPersonAddress(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPolicyPersonAddress');
}
exports.getPolicyPersonAddress = getPolicyPersonAddress;
function getPersonContactInfo(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPersonContactInfo');
}
exports.getPersonContactInfo = getPersonContactInfo;
function getPolicyPersonContactInfo(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPolicyPersonContactInfo');
}
exports.getPolicyPersonContactInfo = getPolicyPersonContactInfo;
function getPersonMembershipCommunications(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPersonMembershipCommunications');
}
exports.getPersonMembershipCommunications = getPersonMembershipCommunications;
function getPersonPoliciesInformation(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getPersonPoliciesInformation');
}
exports.getPersonPoliciesInformation = getPersonPoliciesInformation;
function getTop5Claims(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'displayPerson/getTop5Claims');
}
exports.getTop5Claims = getTop5Claims;
//# sourceMappingURL=displayPersonController.js.map