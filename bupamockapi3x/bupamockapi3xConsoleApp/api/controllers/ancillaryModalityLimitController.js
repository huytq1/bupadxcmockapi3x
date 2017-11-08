"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getAncillaryModalityLimit(req, res, next) {
    console.log(req);
    utils.processRequest(req, res, next, 'ancillaryModalityLimit/getAncillaryModalityLimit');
}
exports.getAncillaryModalityLimit = getAncillaryModalityLimit;
//# sourceMappingURL=ancillaryModalityLimitController.js.map