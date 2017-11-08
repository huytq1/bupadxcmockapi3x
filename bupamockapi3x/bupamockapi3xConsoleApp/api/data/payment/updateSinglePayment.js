"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: {
            membershipId: 922008,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Cash",
                premiumAmount: 309
            }
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 922008,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Cash",
                premiumAmount: 310
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "Other"
            }
        }
    },
    {
        request: {
            membershipId: 922008,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Cash",
                premiumAmount: 311
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserBranchNotReconciled"
            }
        }
    },
    {
        request: {
            membershipId: 922008,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Cash",
                premiumAmount: 312
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotAssociatedWithBranch"
            }
        }
    },
    {
        request: {
            membershipId: 922008,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Cash",
                premiumAmount: 313
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    {
        request: {
            membershipId: 922008,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Cash",
                premiumAmount: 314
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
            membershipId: 922008,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Cash",
                premiumAmount: 315
            }
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 21026018,
            body: {
                paymentDate: "2017-09-18T17:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 1,
                premiumAmount: 12154.6
            }
        },
        response: {
            data: {
                receiptId: 11113334,
                transactionId: 689879546879,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 21026018,
            body: {
                paymentDate: "2017-09-18T17:00:00.000Z",
                paymentType: "Cash",
                premiumAmount: 12154.6
            }
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 21026018,
            body: {
                paymentDate: "2017-09-18T17:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 1,
                premiumAmount: 11111
            }
        },
        // error example
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotAssociatedWithBranch" // erro code as WDD
            }
        }
    },
    // error
    {
        request: {
            membershipId: 320015,
            body: {
                paymentDate: "2017-09-27T17:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 1,
                premiumAmount: 111
            }
        },
        // error example
        response: {
            status: 500,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "500 123456789" // erro code as WDD
            }
        }
    },
    {
        request: {
            membershipId: 21026018,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 1,
                premiumAmount: 1454.9
            }
        },
        response: {
            data: {
                receiptId: 11113334,
                transactionId: 689879546879,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    // Data for QC
    {
        request: {
            membershipId: 922002,
            body: {
                paymentDate: "2017-10-31T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9731,
                premiumAmount: 45345.9
            }
        },
        response: {
            data: {
                receiptId: 990001,
                transactionId: 99009876001,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922004,
            body: {
                paymentDate: "2017-09-26T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9740,
                premiumAmount: 79712.46
            }
        },
        response: {
            data: {
                receiptId: 990011,
                transactionId: 99009876011,
                transactionStatus: { Value: "4", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        // Verify bug 155501
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-10-31T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9747,
                premiumAmount: 2139766.01
            }
        },
        response: {
            data: {
                receiptId: 997661,
                transactionId: 99009877661,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-10-05T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9748,
                premiumAmount: 20342.99
            }
        },
        response: {
            data: {
                receiptId: 990421,
                transactionId: 99009876421,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9749,
                premiumAmount: 21044.95
            }
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9747,
                premiumAmount: 20045.01
            }
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9747,
                premiumAmount: 20246.01
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
            membershipId: 922010,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9748,
                premiumAmount: 2108809.15
            }
        },
        response: {
            data: {
                receiptId: 990991,
                transactionId: 99009870991,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9749,
                premiumAmount: 2134717
            }
        },
        response: {
            data: {
                receiptId: 991001,
                transactionId: 99009871001,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-10-04T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9749,
                premiumAmount: 21482.34
            }
        },
        response: {
            data: {
                receiptId: 991031,
                transactionId: 99009871031,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9747,
                premiumAmount: 20138.10
            }
        },
        response: {
            data: {
                receiptId: 991381,
                transactionId: 99009871381,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922009,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9746,
                premiumAmount: 29139.40
            }
        },
        response: {
            data: {
                receiptId: 991391,
                transactionId: 99009871391,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922009,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9750,
                premiumAmount: 28140.06
            }
        },
        response: {
            data: {
                receiptId: 991401,
                transactionId: 99009871401,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922009,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9751,
                premiumAmount: 26142.68
            }
        },
        response: {
            data: {
                receiptId: 991421,
                transactionId: 99009871421,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922003,
            body: {
                paymentDate: '2017-09-26T00:00:00.000Z',
                paymentType: 'Payment Card',
                personPaymentCardId: 9737,
                premiumAmount: 8735.01
            }
        },
        response: {
            data: {
                receiptId: 990021,
                transactionId: 99009876021,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: "",
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 922007,
            body: {
                paymentDate: "2017-09-26T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9744,
                premiumAmount: 54345
            }
        },
        response: {
            data: {
                receiptId: 990031,
                transactionId: 99009876031,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 5262274,
            body: {
                paymentDate: "2017-10-31T00:00:00.000Z",
                paymentType: "Bank Account",
                personPaymentCardId: 0,
                bankAccountDetails: {
                    "accountName": "Jennise M Aletta",
                    "accountNumber": "8888888888",
                    "bsbNumber": "123456"
                },
                premiumAmount: 1454.90
            }
        },
        response: {
            data: {
                receiptId: 526201,
                transactionId: 1234935870013,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            body: {
                paymentDate: "2017-10-23T00:00:00.000Z",
                paymentType: "Bank Account",
                personPaymentCardId: 0,
                bankAccountDetails: {
                    "accountName": "Jaric Waston",
                    "accountNumber": "84656468",
                    "bsbNumber": "123456"
                },
                premiumAmount: 1454.90
            }
        },
        response: {
            data: {
                receiptId: 166861,
                transactionId: 1234935870014,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 20265534,
            body: {
                paymentDate: "2017-10-29T00:00:00.000Z",
                paymentType: "Bank Account",
                personPaymentCardId: 0,
                bankAccountDetails: {
                    "accountName": "Itai Erfurth",
                    "accountNumber": "704354864",
                    "bsbNumber": "712377"
                },
                premiumAmount: 1454.9
            }
        },
        response: {
            data: {
                receiptId: 166861,
                transactionId: 1234935870014,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 82404708,
            body: {
                paymentDate: "2017-10-29T00:00:00.000Z",
                paymentType: "Cash",
                personPaymentCardId: 0,
                bankAccountDetails: null,
                premiumAmount: 1454.9
            }
        },
        response: {
            data: {
                receiptId: 166862,
                transactionId: 1234935870015,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 21253
            }
        },
        response: {
            data: {
                receiptId: 102001,
                transactionId: 99009876001,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-26T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 1454.9
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    {
        request: {
            membershipId: 59325001,
            body: {
                paymentDate: "2017-09-26T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 303,
                premiumAmount: 123
            }
        },
        response: {
            data: {
                receiptId: 1228800465,
                transactionId: 123456789,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 10
            }
        },
        response: {
            data: {
                receiptId: 30600,
                transactionId: 300600,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90000
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotAssociatedWithBranch"
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90001
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserBranchNotReconciled"
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90002
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "Other"
            }
        }
    },
    /*{   // UC0098Cv34_AC11_ST051
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90003
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    }, */
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 301
            }
        },
        response: {
            data: {
                receiptId: 30001,
                transactionId: 300001,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 302
            }
        },
        response: {
            data: {
                receiptId: 30010,
                transactionId: 300010,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 303
            }
        },
        response: {
            data: {
                receiptId: 30020,
                transactionId: 300020,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 304
            }
        },
        response: {
            data: {
                receiptId: 30030,
                transactionId: 300030,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 305
            }
        },
        response: {
            data: {
                receiptId: 30040,
                transactionId: 300040,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 306
            }
        },
        response: {
            data: {
                receiptId: 30050,
                transactionId: 300050,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 307
            }
        },
        response: {
            data: {
                receiptId: 30060,
                transactionId: 300060,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: "AC28_ST012"
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 308
            }
        },
        response: {
            data: {
                receiptId: 30070,
                transactionId: 300070,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 450
            }
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 310
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "Other"
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 311
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserBranchNotReconciled"
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 312
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotAssociatedWithBranch"
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 313
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 314
            }
        },
        response: {
            status: 404
            //headers: {
            //    "Access-Control-Expose-Headers": "ErrorCode",
            //    "ErrorCode": "MembershipIdNotFound"
            //}
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 315
            }
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 316
            }
        },
        response: {
            data: {
                receiptId: 30080,
                transactionId: 300080,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 317
            }
        },
        response: {
            data: {
                receiptId: 30090,
                transactionId: 300090,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 318
            }
        },
        response: {
            data: {
                receiptId: 30100,
                transactionId: 300100,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 319
            }
        },
        response: {
            data: {
                receiptId: 30200,
                transactionId: 300200,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 320
            }
        },
        response: {
            data: {
                receiptId: 30300,
                transactionId: 300300,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 321
            }
        },
        response: {
            data: {
                receiptId: 30400,
                transactionId: 300400,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 322
            }
        },
        response: {
            data: {
                receiptId: 30500,
                transactionId: 300500,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                premiumAmount: 323
            }
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9749,
                premiumAmount: 80345.99
            }
        },
        response: {
            data: {
                receiptId: 890001,
                transactionId: 8900018901,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90003
            }
        },
        response: {
            data: {
                receiptId: 999991,
                transactionId: 9999999991,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: "Invalid Payment. Rejected"
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90004
            }
        },
        response: {
            data: {
                receiptId: 999991,
                transactionId: 9999999991,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9747,
                premiumAmount: 80035.19
            }
        },
        response: {
            data: {
                receiptId: 890018,
                transactionId: 89000018,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90005
            }
        },
        response: {
            data: {
                receiptId: 999881,
                transactionId: 9999999881,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90006
            }
        },
        response: {
            data: {
                receiptId: 999881,
                transactionId: 9119999881,
                transactionStatus: { Value: "4", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90007
            }
        },
        response: {
            data: {
                receiptId: 999881,
                transactionId: 9112299881,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 49990,
                premiumAmount: 90008
            }
        },
        response: {
            data: {
                receiptId: 999881,
                transactionId: 9112255881,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 922010,
            body: {
                paymentDate: "2017-09-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 9747,
                premiumAmount: 80045.45
            }
        },
        response: {
            data: {
                receiptId: 891410,
                transactionId: 89001410,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 328
            }
        },
        response: {
            data: {
                receiptId: 30700,
                transactionId: 300700,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-05T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 329
            }
        },
        response: {
            data: {
                receiptId: 30800,
                transactionId: 300800,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 330
            }
        },
        response: {
            data: {
                receiptId: 30900,
                transactionId: 300900,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 311111,
            body: {
                paymentDate: "2017-10-02T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 306,
                premiumAmount: 331
            }
        },
        response: {
            data: {
                receiptId: 31000,
                transactionId: 301000,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5434
            }
        },
        response: {
            data: {
                receiptId: 8981101,
                transactionId: 89811001,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5444
            }
        },
        response: {
            data: {
                receiptId: 8981103,
                transactionId: 89811003,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5455
            }
        },
        response: {
            data: {
                receiptId: 8981106,
                transactionId: 89811006,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5466
            }
        },
        response: {
            data: {
                receiptId: 8981108,
                transactionId: 89811008,
                transactionStatus: { Value: "4", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5477
            }
        },
        response: {
            data: {
                receiptId: 8981109,
                transactionId: 89811009,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5488
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-28T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5499
            }
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-11-06T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5500
            }
        },
        response: {
            data: {
                receiptId: 8981111,
                transactionId: 89811011,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5501
            }
        },
        response: {
            data: {
                receiptId: 8981112,
                transactionId: 89811012,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 98111114,
            body: {
                paymentDate: "2017-10-29T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811117,
                premiumAmount: 5502
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
            membershipId: 11211113,
            body: {
                paymentDate: "2017-10-30T00:00:00.000Z",
                paymentType: "Payment Card",
                personPaymentCardId: 811119,
                premiumAmount: 5430
            }
        },
        response: {
            status: 400
        }
    },
    // Bottom
    {
        request: function (req) { return true; },
        response: {
            data: {}
        }
    }
];
//# sourceMappingURL=updateSinglePayment.js.map