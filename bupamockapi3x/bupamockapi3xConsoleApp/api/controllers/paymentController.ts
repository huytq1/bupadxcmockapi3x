import * as utils from '../utils';

export function getMemberCurrentPaymentDetails(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'payment/getMemberCurrentPaymentDetails');
}

export function calculateDirectDebitPremium(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'payment/calculateDirectDebitPremium');
}

export function caculateSinglePayment(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'payment/calculateSinglePayment');
}

export function caculateRefund(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'payment/calculateRefundPayment');
}

export function getPaymentCardList(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'payment/getPaymentCardList');
}

export function updateDirectDebit(req, res, next): void {
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
    return res.json()
}

export function updateSinglePayment(req, res, next): void {
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

export function getPaymentCardInfo(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'payment/getPaymentCardInfo');
}

export function updateRefund(req, res, next): void {
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

export function updatePaymentCardInformation(req, res, next): void {
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

export function getPolicyStatus(req, res, next): void {
    utils.processRequest(req, res, next, 'payment/getPolicyStatus');
}

export function createReceipt(req, res, next): void{
    console.log('createReceipt')
    utils.processRequestWithResponseBody(req, res, next, 'payment/createReceipt');
}
export function getRealTimePaymentStatusEnquiry(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'payment/getRealTimePaymentStatusEnquiry');
}

export function validateBsbNumber(req, res, next): void {
    utils.processRequestWithResponseBody(req, res, next, 'payment/validateBsbNumber');
}
