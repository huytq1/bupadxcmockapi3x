"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getMembershipAdditionalInfo(req, res, next) {
    utils.processRequest(req, res, next, 'membershipAdditionalInfo/getMembershipAdditionalInfo');
}
exports.getMembershipAdditionalInfo = getMembershipAdditionalInfo;
function getMembershipAddress(req, res, next) {
    utils.processRequest(req, res, next, 'membershipAdditionalInfo/getMembershipAddress');
}
exports.getMembershipAddress = getMembershipAddress;
function getPersonAddress(req, res, next) {
    utils.processRequest(req, res, next, 'membershipAdditionalInfo/getPersonAddress');
}
exports.getPersonAddress = getPersonAddress;
function getMembershipAddresses(req, res, next) {
    console.log(req);
    var type = req.query && req.query.type ? req.query.type : '';
    if (type == 'default') {
        req.swagger.params.type = 'default';
    }
    else {
        req.swagger.params.type = '';
    }
    utils.processRequestWithResponseBodyAsAddress(req, res, next, 'membershipAdditionalInfo/getMembershipAddresses');
}
exports.getMembershipAddresses = getMembershipAddresses;
//# sourceMappingURL=membershipAdditionalInfoController.js.map