"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getPolicyDetail(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'policyDetail/getPolicyDetail');
}
exports.getPolicyDetail = getPolicyDetail;
//# sourceMappingURL=policyDetailController.js.map