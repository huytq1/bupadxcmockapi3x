export default [
    {   // UC0101Cv34_AC28_ST004
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
    {   // UC0101Cv34_AC28_ST010
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
    {   // UC0101Cv34_AC28_ST09
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
    {   // UC0101Cv34_AC28_ST08
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
    {   // UC0101Cv34_AC28_ST07
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
    {   // UC0101Cv34_AC28_ST06
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
    {   // UC0101Cv34_AC28_ST05
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
                "Access-Control-Expose-Headers": "ErrorCode",// constant, don't change
                "ErrorCode": "UserIdNotAssociatedWithBranch"// erro code as WDD
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
                "Access-Control-Expose-Headers": "ErrorCode",// constant, don't change
                "ErrorCode": "500 123456789"// erro code as WDD
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
    {   // Test Case 134799: UC0098Cv34_AC11_ST034 Step 5
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
    {   // Test Case 134796: UC0098Cv34_AC11_ST029 Step 10
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
    {   // Test Case 139766: UC0098Cv34_AC11_ST036 Step 9 (Action 5)
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
    {   // Test Case 134766: UC0098Cv34_AC11_ST042 Step 8 (Action 5)
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
    {   // Test Case 134767: UC0098Cv34_AC11_ST044 Step 11
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
    {   // Test Case 134745: UC0098Cv34_AC11_ST045 Step 10
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
    {   // Test Case 134746: UC0098Cv34_AC11_ST046 Step 9
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
    {   // Test Case 108809: UC0098Cv34_AC11_ST099 Step 9 (Action 5)
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
    {   // Test Case 134717: UC0098Cv34_AC11_ST100 Step 9 (Action 5)
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
    {   // Test Case 148234: UC0098Cv34_AC11_ST103 Step 10 (Action 5)
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
    {   // Test Case 134861: UC0098Cv34_AC11_ST138 Step 11 (Action 5)
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
    {   // Test Case 134862: UC0098Cv34_AC11_ST139 Step 11 (Action 5)
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
    {   // Test Case 134863: UC0098Cv34_AC11_ST140 Step 11 (Action 5)
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
    {   // Test Case 134865: UC0098Cv34_AC11_ST142 Step 11 (Action 5)
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
    {   // Test Case Anh Phan
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
    {   // Test Case Anh Phan
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
    {   // Verify bug 153215 - reactivationDate null
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
    {   // Verify bug 153215 - reactivationDate < current date
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
    {   // Test Case Anh Phan
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
    {   // UC0098Cv34_AC11_ST047
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
    {   // Test Case Hau Nguyen
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
    {   // Test Case 140025: UC0101Cv34_AC28_ST003 Step 5
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
    {   // UC0098Cv34_AC11_ST048
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
    {   // UC0098Cv34_AC11_ST049
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
    {   // UC0098Cv34_AC11_ST050
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
    {   // UC0101Cv34_AC28_ST068
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
    {   // UC0101Cv34_AC28_ST065
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
    {   // UC0101Cv34_AC28_ST038
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
    {   // UC0101Cv34_AC28_ST037
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
    {   // UC0101Cv34_AC28_ST026
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
    {   // UC0101Cv34_AC28_ST027
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
    {   // UC0101Cv34_AC28_ST012
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
    {   // UC0101Cv34_AC28_ST011
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
    {   // UC0101Cv34_AC28_ST004
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
    {   // UC0101Cv34_AC28_ST010
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
    {   // UC0101Cv34_AC28_ST09
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
    {   // UC0101Cv34_AC28_ST08
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
    {   // UC0101Cv34_AC28_ST07
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
    {   // UC0101Cv34_AC28_ST06
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
    {   // UC0101Cv34_AC28_ST05
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
    {   // UC0101Cv34_AC28_ST060
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
    {   // UC0101Cv34_AC28_ST058
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
    {   // UC0101Cv34_AC28_ST064
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
    {   // UC0101Cv34_AC28_ST063
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
    {   // UC0101Cv34_AC28_ST062
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
    {   // UC0101Cv34_AC28_ST061
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
    {   // UC0101Cv34_AC28_ST059
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
    { // UC0101Cv34_AC28_ST074
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
    {   // UC0098Cv34_AC11_ST051 (Action 2-3)
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
    {   // UC0098Cv34_AC11_ST060 (Action 2-4)
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
    {   // UC0098Cv34_AC11_ST082 (Action 2-5)
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
    {   // UC0098Cv34_AC11_ST081 (Action 2-5)
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
    {   // UC0098Cv34_AC11_ST085 (Action 2-5)
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
    {   // UC0098Cv34_AC11_ST065 (Action 2-6)
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
    {   // UC0098Cv34_AC11_ST143 (Action 2-5-5-5)
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
    {   // UC0098Cv34_AC11_ST144 (Action 2-5-5-5-N/A)
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
    {   // UC0098Cv34_AC11_ST141 (Action 2-5)
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
    {   // UC0101Cv34_AC28_ST078
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
    {   // UC0101Cv34_AC28_ST077
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
    {   // UC0101Cv34_AC28_ST076
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
    {   // UC0101Cv34_AC28_ST075
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
    {   // UC0098Cv34_AC11_ST203 (Action 2-5)
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
    {   // UC0098Cv34_AC11_ST202 (Action 2-5)
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
    {   // UC0098Cv34_AC11_ST201 (Action 2-5)
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
    {   // UC0098Cv34_AC11_ST200 (Action 2-6)
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
    {   // UC0098Cv34_AC11_ST199 (Action 2-4)
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
    {   // UC0098Cv34_AC11_ST198 (Action 2 - http 422)
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
    {   // UC0098Cv34_AC11_ST197 (Action 2 - http 400)
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
    {   // UC0098Cv34_AC11_ST196 (Action 2 - http 200)
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
    {   // UC0098Cv34_AC11_ST189 (Action 2-5)
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
    {   // UC0098Cv34_AC11_ST190 
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
    {   // UC0098Cv34_AC11_ST195 
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
        request: req => true,
        response: {
            data: {}
        }
    }
]
