"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function validateBsb(req, res, next) {
    console.log(req);
    utils.processRequestWithResponseBody(req, res, next, 'bsbValidation/getBsbNumber');
}
exports.validateBsb = validateBsb;
//# sourceMappingURL=bsbValidationController.js.map