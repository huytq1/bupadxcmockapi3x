"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getPaymentFrequencies(req, res, next) {
    utils.processRequest(req, res, next, 'reference/getPaymentFrequencies');
}
exports.getPaymentFrequencies = getPaymentFrequencies;
//# sourceMappingURL=referenceController.js.map