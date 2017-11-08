"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: {
            membershipId: 789987
        },
        response: {
            status: 500,
            headers: {
                "Error-Text": " 4546546546546546546546"
            }
        }
    },
    {
        //Test TC 73235 UC0100C_AC04_ST002
        request: {
            membershipId: 987789
        },
        response: {
            status: 400,
            headers: {
                "Error-Text": " 4546546546546546546546"
            }
        }
    },
    {
        request: {
            membershipId: 21026018,
        },
        response: {
            data: {
                currentPaymentMethod: "Payment Card",
                isGrandFathered: true,
                isMslApplicable: true,
                isSpeEligibility: true,
                isPaymentImpact: true,
                totalActiveCards: 12
            }
        }
    },
    {
        request: {
            membershipId: 254685,
        },
        response: {
            data: {
                currentPaymentMethod: "Payment Card",
                isGrandFathered: true,
                isMslApplicable: true,
                isSpeEligibility: true,
                isPaymentImpact: true,
                totalActiveCards: 12
            }
        }
    },
    {
        request: {
            membershipId: 59325001,
        },
        response: {
            data: {
                currentPaymentMethod: "Payment Card",
                isGrandFathered: true,
                isMslApplicable: true,
                isSpeEligibility: true,
                isPaymentImpact: true,
                totalActiveCards: 12
            }
        }
    },
    {
        request: {
            membershipId: 9684564,
        },
        response: {
            data: {
                currentPaymentMethod: "",
                isGrandFathered: false,
                isMslApplicable: false,
                isSpeEligibility: false,
                isPaymentImpact: false,
                totalActiveCards: 0
            }
        }
    },
    {
        request: {
            membershipId: 92206127,
        },
        response: {
            data: {
                currentPaymentMethod: "Payment Card",
                isGrandFathered: true,
                isMslApplicable: true,
                isSpeEligibility: true,
                isPaymentImpact: true,
                totalActiveCards: 12
            }
        }
    } //UC0264C_AC40_ST001;	 UC0264C_AC50_ST001
];
//# sourceMappingURL=getMembershipAdditionalInfo.js.map