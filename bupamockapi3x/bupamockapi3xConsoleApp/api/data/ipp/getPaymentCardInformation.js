"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: function (req) { return req.body.sst == '111111'; },
        response: {
            status: 400
        }
    },
    {
        request: function (req) { return req.body.sst == '222222'; },
        response: {
            status: 404
        }
    },
    {
        request: function (req) { return req.body.sst == '333333'; },
        response: {
            status: 500
        }
    },
    {
        request: function (req) { return true; },
        response: {
            data: {
                "cardBrandName": "Visa",
                "cardHolderName": "Jonh",
                "personPaymentCardId": 1234567890,
                "maskedCardNumber": "554888******4576",
                "expiryMonth": "06",
                "expiryYear": "2029"
            }
        }
    }
];
//# sourceMappingURL=getPaymentCardInformation.js.map