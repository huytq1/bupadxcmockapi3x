"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getCustomerByCustomerId(req, res, next) {
    console.log(req);
    utils.processRequest(req, res, next, 'customerSearch/getCustomerByCustomerId');
}
exports.getCustomerByCustomerId = getCustomerByCustomerId;
function getCustomerByAttribute(req, res, next) {
    utils.processRequest(req, res, next, 'customerSearch/getCustomerByAttribute');
}
exports.getCustomerByAttribute = getCustomerByAttribute;
function getCustomerDetailWithMembershipId(req, res, next) {
    utils.processRequest(req, res, next, 'customerSearch/getCustomerDetailWithMembershipId');
}
exports.getCustomerDetailWithMembershipId = getCustomerDetailWithMembershipId;
function getCustomerDetail(req, res, next) {
    utils.processRequest(req, res, next, 'customerSearch/getCustomerDetail');
}
exports.getCustomerDetail = getCustomerDetail;
//# sourceMappingURL=customerSearchController.js.map