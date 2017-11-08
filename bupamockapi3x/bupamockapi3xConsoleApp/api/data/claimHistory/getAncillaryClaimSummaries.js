"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: {
            membershipId: 789987
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 987789
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 922001,
            fromDate: "2017-08-20T00:00:00.000Z",
            toDate: "2017-08-21T00:00:00.000Z"
        },
        response: {
            data: [
                {
                    status: "Paid",
                    source: "ABC",
                    statusReason: "Active",
                    claimNumber: "111",
                    claimDate: "2017-10-16T09:53:59.317Z",
                    numberOfItems: 0,
                    totalFeeCharged: 0,
                    totalBenefit: 0
                },
                {
                    status: "Pending",
                    source: "TYA",
                    statusReason: "Something pending",
                    claimNumber: "333",
                    claimDate: "2017-10-16T09:53:59.317Z",
                    numberOfItems: 0,
                    totalFeeCharged: 0,
                    totalBenefit: 0
                },
                {
                    status: "Rejected",
                    source: "TYA",
                    statusReason: "Something wrong",
                    claimNumber: "222",
                    claimDate: "2017-10-16T09:53:59.317Z",
                    numberOfItems: 0,
                    totalFeeCharged: 0,
                    totalBenefit: 0
                }
            ]
        }
    }
];
//# sourceMappingURL=getAncillaryClaimSummaries.js.map