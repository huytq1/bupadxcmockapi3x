"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getPolicyDetails(req, res, next) {
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyDetails');
}
exports.getPolicyDetails = getPolicyDetails;
function getPolicyCoverSummary(req, res, next) {
    console.log('getPolicyCoverSummary');
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyCoverSummary');
}
exports.getPolicyCoverSummary = getPolicyCoverSummary;
function getPolicyClaimsandPaymentsTotals(req, res, next) {
    console.log('getPolicyClaimsandPaymentsTotals');
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyClaimsandPaymentsTotals');
}
exports.getPolicyClaimsandPaymentsTotals = getPolicyClaimsandPaymentsTotals;
function getPolicyCommunicationPreferences(req, res, next) {
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyCommunicationPreferences');
}
exports.getPolicyCommunicationPreferences = getPolicyCommunicationPreferences;
function getPersonsOnPolicy(req, res, next) {
    utils.processRequest(req, res, next, 'displayPolicy/getPersonsOnPolicy');
}
exports.getPersonsOnPolicy = getPersonsOnPolicy;
function getSpecialFeatures(req, res, next) {
    utils.processRequest(req, res, next, 'displayPolicy/getSpecialFeatures');
}
exports.getSpecialFeatures = getSpecialFeatures;
function getPolicyStatus(req, res, next) {
    utils.processRequest(req, res, next, 'displayPolicy/getPolicyStatus');
}
exports.getPolicyStatus = getPolicyStatus;
function getRemainigLimits(req, res, next) {
    utils.processRequest(req, res, next, 'displayPolicy/getRemainingLimits');
}
exports.getRemainigLimits = getRemainigLimits;
function getAdditionalPolicyDetails(req, res, next) {
    utils.processRequest(req, res, next, 'displayPolicy/getAdditionalPolicyDetails');
}
exports.getAdditionalPolicyDetails = getAdditionalPolicyDetails;
//# sourceMappingURL=displayPolicyControllser.js.map