"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getCommunicationSummary(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'communicationsHistory/getCommunicationSummary');
}
exports.getCommunicationSummary = getCommunicationSummary;
function getCommunicationDocument(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'communicationsHistory/getCommunicationDocument');
}
exports.getCommunicationDocument = getCommunicationDocument;
function getCommunicationDetail(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'communicationsHistory/getCommunicationDetail');
}
exports.getCommunicationDetail = getCommunicationDetail;
//# sourceMappingURL=communicationsHistoryController.js.map