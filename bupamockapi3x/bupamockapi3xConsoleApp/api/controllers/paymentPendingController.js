"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getPendingTransactions(req, res, next) {
    utils.processRequest(req, res, next, 'paymentPending/getPaymentPending');
}
exports.getPendingTransactions = getPendingTransactions;
function getPendingSinglePaymentDetail(req, res, next) {
    utils.processRequest(req, res, next, 'paymentPending/getPendingSinglePaymentDetail');
}
exports.getPendingSinglePaymentDetail = getPendingSinglePaymentDetail;
function getPendingDirectDebitDetail(req, res, next) {
    utils.processRequest(req, res, next, 'paymentPending/getPendingDirectDebitDetail');
}
exports.getPendingDirectDebitDetail = getPendingDirectDebitDetail;
function getPendingRefundDetail(req, res, next) {
    utils.processRequest(req, res, next, 'paymentPending/getPendingRefundDetail');
}
exports.getPendingRefundDetail = getPendingRefundDetail;
function deletePendingTransaction(req, res, next) {
    var membershipId = req.swagger.params.membershipId.value;
    console.log(membershipId);
    switch (membershipId) {
        case 12345678:
            return res.status(422).send();
        case 87654321:
            //console.log(membershipId)
            return res.status(422).send();
        //case 11513200:
        //    return res.status(200).send();
        case 65939258:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotSetUpInBOSS" });
            return res.status(422).send();
        case 133140:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserBranchNotReconciled" });
            return res.status(422).send();
        case 82404708:// Chon Vuong - Test Case 119378: UC0222C_AC06_ST009
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotAssociatedWithBranch" });
            return res.status(422).send();
        default:
            utils.processRequest(req, res, next, 'paymentPending/deletePendingTransaction');
            break;
    }
}
exports.deletePendingTransaction = deletePendingTransaction;
//# sourceMappingURL=paymentPendingController.js.map