"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getPaymentHistory(req, res, next) {
    //utils.processRequest(req, res, next, 'paymentHistory/getPaymentHistory');
    var membershipId = req.swagger.params.membershipId.value;
    switch (membershipId) {
        case 1234567:
            return res.status(406).send();
        default:
            utils.processRequestWithResponseBody(req, res, next, 'paymentHistory/getPaymentHistory');
            break;
    }
}
exports.getPaymentHistory = getPaymentHistory;
function getPaymentDetail(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'paymentHistory/getPaymentDetail');
}
exports.getPaymentDetail = getPaymentDetail;
//# sourceMappingURL=paymentHistoryController.js.map