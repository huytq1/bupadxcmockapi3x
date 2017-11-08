"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getCurrentContributorName(req, res, next) {
    utils.processRequest(req, res, next, 'paymentEnquiry/getCurrentContributorName');
}
exports.getCurrentContributorName = getCurrentContributorName;
function getMembershipAdditionalProperties(req, res, next) {
    utils.processRequest(req, res, next, 'paymentEnquiry/getMembershipAdditionalProperties');
}
exports.getMembershipAdditionalProperties = getMembershipAdditionalProperties;
function getClaimsLatestServiceDate(req, res, next) {
    utils.processRequest(req, res, next, 'paymentEnquiry/getClaimsLatestServiceDate');
}
exports.getClaimsLatestServiceDate = getClaimsLatestServiceDate;
//# sourceMappingURL=paymentEnquiryController.js.map