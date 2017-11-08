"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function calculateRenewalAmount(req, res, next) {
    console.log('calculateRenewalAmount');
    utils.processRequestWithResponseBody(req, res, next, 'paymentMethod/calculateRenewalAmount');
}
exports.calculateRenewalAmount = calculateRenewalAmount;
function updatePaymentMethod(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'paymentMethod/updatePaymentMethod');
}
exports.updatePaymentMethod = updatePaymentMethod;
//# sourceMappingURL=paymentMethodController.js.map