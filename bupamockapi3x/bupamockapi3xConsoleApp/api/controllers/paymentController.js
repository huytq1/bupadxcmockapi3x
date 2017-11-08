"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../utils");
function getMemberCurrentPaymentDetails(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'payment/getMemberCurrentPaymentDetails');
}
exports.getMemberCurrentPaymentDetails = getMemberCurrentPaymentDetails;
function calculateDirectDebitPremium(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'payment/calculateDirectDebitPremium');
}
exports.calculateDirectDebitPremium = calculateDirectDebitPremium;
function caculateSinglePayment(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'payment/calculateSinglePayment');
}
exports.caculateSinglePayment = caculateSinglePayment;
function caculateRefund(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'payment/calculateRefundPayment');
}
exports.caculateRefund = caculateRefund;
function getPaymentCardList(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'payment/getPaymentCardList');
}
exports.getPaymentCardList = getPaymentCardList;
function updateDirectDebit(req, res, next) {
    var membershipId = req.swagger.params.membershipId.value;
    switch (membershipId) {
        case 21309604:
            return res.status(400).send();
        case 21237193:
            return res.status(500).send();
        case 12345:
            return res.status(401).send();
        case 3456:
            return res.status(401).send();
        case 111213:
            return res.status(400).send();
        case 66118027:
            return res.status(500).send();
        case 141516:
            return res.status(500).send();
        case 94381761:
            return res.status(400).send();
        case 82616798:
            return res.status(500).send();
        case 45635433:
            return res.status(404).send();
        case 922011:
            return res.status(400).send();
        case 45635434:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "MembershipIdNotFound" });
            return res.status(404).send();
        case 3455431:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotSetUpInBOSS" });
            return res.status(422).send();
        case 3455434:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotAssociatedWithBranch" });
            return res.status(422).send();
        case 3455436:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserBranchNotReconciled" });
            return res.status(422).send();
        case 3455437:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "Other" });
            return res.status(422).send();
        case 82601204:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserBranchNotReconciled" });
            return res.status(422).send();
        case 82616798:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotAssociatedWithBranch" });
            return res.status(422).send();
        case 82686833:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotSetUpInBOSS" });
            return res.status(422).send();
        case 28121992:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotSetUpInBOSS" });
            return res.status(422).send();
        case 408195:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "Other" });
            return res.status(422).send();
    }
    return res.json();
}
exports.updateDirectDebit = updateDirectDebit;
function updateSinglePayment(req, res, next) {
    var membershipId = req.swagger.params.membershipId.value;
    switch (membershipId) {
        case 21309604:
            return res.status(400).send();
        case 21237193:
            return res.status(500).send();
        case 12345:
            return res.status(401).send();
        case 3456:
            return res.status(401).send();
        case 111213:
            return res.status(400).send();
        case 141516:
            return res.status(500).send();
        case 94381761:
            return res.status(400).send();
        case 83168617:
            return res.status(500).send();
        case 11122223:
            return res.status(400).send();
        case 11122224:
            return res.status(404).send();
        case 11122216:
            return res.status(500).send();
        case 28811111:
            return res.status(500).send();
        case 11122219:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserBranchNotReconciled" });
            return res.status(422).send();
        case 11122218:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotAssociatedWithBranch" });
            return res.status(422).send();
        case 11122217:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotSetUpInBOSS" });
            return res.status(422).send();
        case 922001:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotSetUpInBOSS" });
            return res.status(422).send();
        case 922002:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserBranchNotReconciled" });
            return res.status(422).send();
        case 922003:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotAssociatedWithBranch" });
            return res.status(422).send();
        case 922007:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "Other" });
            return res.status(422).send();
        case 922008:
            return res.status(400).send();
        case 11122220:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "Other" });
            return res.status(422).send();
        case 320013:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "MembershipIdNotFound" });
            return res.status(404).send();
        case 80114531:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "MembershipIdNotFound" });
            return res.status(404).send();
        case 45635432:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "Other" });
            return res.status(422).send();
        default:
            utils.processRequestWithResponseBody(req, res, next, 'payment/updateSinglePayment');
            break;
    }
}
exports.updateSinglePayment = updateSinglePayment;
function getPaymentCardInfo(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'payment/getPaymentCardInfo');
}
exports.getPaymentCardInfo = getPaymentCardInfo;
function updateRefund(req, res, next) {
    var membershipId = req.swagger.params.membershipId.value;
    switch (membershipId) {
        case 21309604:
            return res.status(400).send();
        case 21237193:
            return res.status(500).send();
        case 12345:
            return res.status(401).send();
        case 3456:
            return res.status(401).send();
        case 111213:
            return res.status(400).send();
        case 141516:
            return res.status(500).send();
        case 94381761:
            return res.status(400).send();
        case 83168617:
            return res.status(500).send();
        case 247858:
            return res.status(400).send();
        case 98434236:
            return res.status(404).send();
        case 66118027:
            return res.status(500).send();
        case 82686833:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotSetUpInBOSS" });
            return res.status(422).send();
        case 12345678:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserIdNotAssociatedWithBranch" });
            return res.status(422).send();
        case 82601204:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserBranchNotReconciled" });
            return res.status(422).send();
        case 320011:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserBranchNotReconciled" });
            return res.status(422).send();
        /*case 320015:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "MembershipIdNotFound" });
            return res.status(404).send();*/
        case 24899015:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "UserBranchNotReconciled" });
            return res.status(422).send();
        case 408195:
            res.set({ "Access-Control-Expose-Headers": "ErrorCode" });
            res.set({ "ErrorCode": "N/A" });
            return res.status(422).send();
    }
    return res.json();
}
exports.updateRefund = updateRefund;
function updatePaymentCardInformation(req, res, next) {
    var cardId = req.swagger.params.personPaymentCardId.value;
    console.log(req.swagger.params.personPaymentCardId);
    switch (cardId) {
        case 111111:
            return res.status(400).send();
        case 222222:
            return res.status(404).send();
        case 333333:
            return res.status(500).send();
        case 200200:
            return res.status(200).send({ message: "Payment Card has been updated" });
        default:
            return res.json();
    }
}
exports.updatePaymentCardInformation = updatePaymentCardInformation;
function getPolicyStatus(req, res, next) {
    utils.processRequest(req, res, next, 'payment/getPolicyStatus');
}
exports.getPolicyStatus = getPolicyStatus;
function createReceipt(req, res, next) {
    console.log('createReceipt');
    utils.processRequestWithResponseBody(req, res, next, 'payment/createReceipt');
}
exports.createReceipt = createReceipt;
function getRealTimePaymentStatusEnquiry(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'payment/getRealTimePaymentStatusEnquiry');
}
exports.getRealTimePaymentStatusEnquiry = getRealTimePaymentStatusEnquiry;
function validateBsbNumber(req, res, next) {
    utils.processRequestWithResponseBody(req, res, next, 'payment/validateBsbNumber');
}
exports.validateBsbNumber = validateBsbNumber;
//# sourceMappingURL=paymentController.js.map