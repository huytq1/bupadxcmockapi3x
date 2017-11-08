"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getAncillaryClaim(req, res, next) {
    console.log(req);
    utils.processRequestWithResponseBody(req, res, next, 'claimHistory/getAncillaryClaim');
}
exports.getAncillaryClaim = getAncillaryClaim;
function getAncillaryClaimSummaries(req, res, next) {
    console.log(req);
    utils.processRequestWithResponseBody(req, res, next, 'claimHistory/getAncillaryClaimSummaries');
}
exports.getAncillaryClaimSummaries = getAncillaryClaimSummaries;
//# sourceMappingURL=claimHistoryController.js.map