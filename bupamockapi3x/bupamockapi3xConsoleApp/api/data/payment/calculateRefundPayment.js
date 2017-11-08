"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: function (req) { return [req.body.newDatePaidTo, req.body.amountToRefund].filter(function (x) { return x != null; }).length !== 1; },
        response: {
            status: 400,
            data: "Request must contain exactly one of the following values: newDatePaidTo, amountToRefund"
        }
    },
    {
        request: {
            membershipId: 422422,
            body: {
                amountToRefund: 422
            }
        },
        response: {
            status: 422,
            headers: {
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    //{ //error UserIdNotSetUpInBOSS
    //    request: {
    //        membershipId: 320016,
    //        body: {
    //            amountToRefund: 422
    //        }
    //    },
    //    response: {
    //        status: 422,
    //        headers: {
    //            "Access-Control-Expose-Headers": "ErrorCode",
    //            "ErrorCode": "UserIdNotSetUpInBOSS"
    //        }
    //    }
    //},
    //{ //error UserIdNotAssociatedWithBranch
    //    request: {
    //        membershipId: 320016,
    //        body: {
    //            amountToRefund: 466
    //        }
    //    },
    //    response: {
    //        status: 422,
    //        headers: {
    //            "Access-Control-Expose-Headers": "ErrorCode",
    //            "ErrorCode": "UserIdNotAssociatedWithBranch"
    //        }
    //    }
    //},
    //{ //error UserBranchNotReconciled
    //    request: {
    //        membershipId: 320016,
    //        body: {
    //            newDatePaidTo: "2017-10-03T00:00:00.000Z"
    //        }
    //    },
    //    response: {
    //        status: 422,
    //        headers: {
    //            "Access-Control-Expose-Headers": "ErrorCode",
    //            "ErrorCode": "UserBranchNotReconciled"
    //        }
    //    }
    //},
    //{ //error 422 Other
    //    request: {
    //        membershipId: 320016,
    //        body: {
    //            newDatePaidTo: "2017-11-03T00:00:00.000Z"
    //        }
    //    },
    //    response: {
    //        status: 422,
    //        headers: {
    //            "Access-Control-Expose-Headers": "ErrorCode",
    //            "ErrorCode": "N/A"
    //        }
    //    }
    //},
    {
        request: {
            membershipId: 320016,
            body: {
                amountToRefund: 999
            }
        },
        response: {
            status: 404,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "MembershipIdNotFound"
            }
        }
    },
    {
        request: {
            membershipId: 21026018,
            body: {
                newDatePaidTo: "2017-06-03T00:00:00.000Z"
            }
        },
        response: {
            data: {
                refundAmount: 123456789.10,
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 21026018,
            body: {
                amountToRefund: 123.45
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-07-01T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    // UC0100Cv3v4_AC02_ST002
    {
        request: {
            membershipId: 61634119,
            body: {
                newDatePaidTo: "2017-09-16T00:00:00.000Z"
            }
        },
        response: {
            data: {
                refundAmount: 888886.10,
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    // UC0100Cv3v4_AC02_ST002
    {
        request: {
            membershipId: 61634119,
            body: {
                newDatePaidTo: "2017-09-18T00:00:00.000Z"
            }
        },
        response: {
            data: {
                refundAmount: 569999.10,
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    // UC0100Cv3v4_AC02_ST001
    {
        request: {
            membershipId: 61634119,
            body: {
                newDatePaidTo: "2017-08-18T00:00:00.000Z"
            }
        },
        response: {
            data: {
                refundAmount: 598989879.10,
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    // UC0100Cv3v4_AC02_ST004
    {
        request: {
            membershipId: 80114531,
            body: {
                newDatePaidTo: "2017-07-25T00:00:00.000Z"
            }
        },
        response: {
            data: {
                refundAmount: 99999.10,
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    // UC0100Cv3v4_AC03_ST002
    {
        request: {
            membershipId: 80114531,
            body: {
                amountToRefund: 123,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-08-25T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 80114531,
            body: {
                amountToRefund: 123.651,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-08-10T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 80114531,
            body: {
                amountToRefund: 1231.75,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-09-25T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    // UC0100Cv3v4_AC03_ST004
    {
        request: {
            membershipId: 80114531,
            body: {
                amountToRefund: 88854,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-07-01T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    //UC0100Cv3v4_AC03_ST005
    {
        request: {
            membershipId: 80114531,
            body: {
                amountToRefund: 9654.14,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-07-01T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: false,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 80114531,
            body: {
                amountToRefund: 88854,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-07-20T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: false,
                _links: {}
            }
        }
    },
    // UC0100Cv3v4_AC03_ST005
    {
        request: {
            membershipId: 99999999,
            body: {
                amountToRefund: 6664,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-08-10T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 99999999,
            body: {
                amountToRefund: 8476,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-08-24T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    // UC0100Cv3v4_AC02_ST006
    {
        request: {
            membershipId: 4004073,
            body: {
                newDatePaidTo: "2017-11-20T00:00:00.000Z",
            }
        },
        response: {
            data: {
                refundAmount: 7777.10,
                adjustedBalance: 897,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 4004073,
            body: {
                amountToRefund: 8554.554,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-11-20T00:00:00.000Z",
                adjustedBalance: 897,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 4004073,
            body: {
                amountToRefund: 3019.554,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-10-18T00:00:00.000Z",
                adjustedBalance: 897,
                isSplitRefundRequired: false,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 4004073,
            body: {
                newDatePaidTo: "2017-12-27T00:00:00.000Z",
            }
        },
        response: {
            data: {
                refundAmount: 1077.10,
                adjustedBalance: 756,
                isSplitRefundRequired: false,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 4004073,
            body: {
                newDatePaidTo: "2017-06-27T00:00:00.000Z",
            }
        },
        response: {
            data: {
                refundAmount: 2013.10,
                adjustedBalance: 756,
                isSplitRefundRequired: false,
                _links: {}
            }
        }
    },
    //UC0100Cv3v4_AC03_ST006
    {
        request: {
            membershipId: 3743028,
            body: {
                amountToRefund: 8899.5,
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-01-01T00:00:00.000Z",
                adjustedBalance: 123,
                isSplitRefundRequired: false,
                _links: {}
            }
        }
    },
    // Anh Phan
    {
        request: {
            membershipId: 16686701,
            body: {
                newDatePaidTo: "2017-11-20T00:00:00.000Z",
            }
        },
        response: {
            data: {
                refundAmount: 7777.10,
                adjustedBalance: 897,
                isSplitRefundRequired: true,
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 320021,
            body: {
                amountToRefund: 1231230.45
            }
        },
        response: {
            data: {
                newDatePaidTo: "2017-10-04T00:00:00.000Z",
                adjustedBalance: 15723,
                isSplitRefundRequired: false,
                _links: {}
            }
        }
    },
];
//# sourceMappingURL=calculateRefundPayment.js.map