export default [
    {
        request: {
            membershipId: 21026018,
            transactionId: 435666663434,
            body: {
                lanId: "pho",
                membershipId: 21026018,
                sessionId: "21124782",
                transactionId: 435666663434
            }
        },
        response: {
            data: {
                receiptId: 11113334,
                transactionId: 6898795456321,
                transactionStatus: { Value: 3, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 21026018,
            transactionId: 656343434,
            body: {
                lanId: "pho",
                membershipId: 21026018,
                sessionId: "21124782",
                transactionId: 656343434
            }
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 21026018,
            transactionId: 345343434,
            body: {
                lanId: "pho",
                membershipId: 21026018,
                sessionId: "21124782",
                transactionId: 345343434
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",// constant, don't change
                "ErrorCode": "UserIdNotAssociatedWithBranch"// erro code as WDD
            }
        }
    },

// Data for QC
    {      // Test Case Anh Phan
        request: {
            membershipId: 922003,
            transactionId: 99009876021,
            body: {
                lanId: "ttnguyen",
                membershipId: 922003,
                sessionId: "1020767",
                transactionId: 99009876021
            }
        },
        response: {
            data: {
                receiptId: 990022,
                transactionId: 99009876022,
                transactionStatus: { Value: 3, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // Test Case 134766: UC0098Cv34_AC11_ST042 Step 11 (Manual Request)
        request: {
            membershipId: 922010,
            transactionId: 99009876423,
            body: {
                lanId: "aphan",
                membershipId: 922010,
                sessionId: "1020774",
                transactionId: 99009876423
            }
        },
        response: {
            data: {
                receiptId: 990424,
                transactionId: 99009876424,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // Test Case 108809: UC0098Cv34_AC11_ST099 Step 12
        request: {
            membershipId: 922010,
            transactionId: 99009870993,
            body: {
                lanId: "aphan",
                membershipId: 922010,
                sessionId: "1020774",
                transactionId: 99009870993
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
    {      // Test Case 134717: UC0098Cv34_AC11_ST100 Step 12
        request: {
            membershipId: 922010,
            transactionId: 99009871003,
            body: {
                lanId: "aphan",
                membershipId: 922010,
                sessionId: "1020774",
                transactionId: 99009871003
            }
        },
        response: {
            data: {
                receiptId: 991004,
                transactionId: 99009871004,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // Test Case 134861: UC0098Cv34_AC11_ST138 Step 14 (Manual Request)
        request: {
            membershipId: 922010,
            transactionId: 99009871383,
            body: {
                lanId: "aphan",
                membershipId: 922010,
                sessionId: "1020774",
                transactionId: 99009871383
            }
        },
        response: {
            status: 400
        }
    },
    {      // Test Case 134862: UC0098Cv34_AC11_ST139 Step 14 (Manual Request)
        request: {
            membershipId: 922009,
            transactionId: 99009871393,
            body: {
                lanId: "aphan",
                membershipId: 922009,
                sessionId: "1020773",
                transactionId: 99009871393
            }
        },
        response: {
            status: 404
        }
    },
    {      // Test Case 134863: UC0098Cv34_AC11_ST140 Step 14 (Manual Request)
        request: {
            membershipId: 922009,
            transactionId: 99009871403,
            body: {
                lanId: "aphan",
                membershipId: 922009,
                sessionId: "1020773",
                transactionId: 99009871403
            }
        },
        response: {
            status: 500
        }
    },
    {      // Test Case AC28_ST037 Anh Phan
        request: {
            membershipId: 311111,
            transactionId: 300030,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300030
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
    {      // Test Case 134865: UC0098Cv34_AC11_ST142 Step 14 (Manual Request)
        request: {
            membershipId: 922009,
            transactionId: 99009871423,
            body: {
                lanId: "aphan",
                membershipId: 922009,
                sessionId: "1020773",
                transactionId: 99009871423
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
    {      // Test Case Hau Nguyen
        request: {
            membershipId: 59325001,
            transactionId: 123456789,
            body: {
                lanId: "aphan",
                membershipId: 922003,
                sessionId: "1020767",
                transactionId: 99009876021
            }
        },
        response: {
            data: {
                receiptId: 990022,
                transactionId: 99009876022,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    //{      // 140025 UC0101Cv34_AC28_ST003: Step 6
    //    request: {
    //        membershipId: 922004,
    //        transactionId: 1100101001,
    //        body: {
    //            lanId: "ndo",
    //            membershipId: 922004,
    //            sessionId: "1020768",
    //            transactionId: 1100101001
    //        }
    //    },
    //    response: {
    //        data: {
    //            receiptId: 110002,
    //            transactionId: 1100101002,
    //            transactionStatus: { Value: 3, Description: "" },
    //            rejectionReason: ""
    //        }
    //    }
    //},
    //{      // 140025 UC0101Cv34_AC28_ST003: Step 7
    //    request: {
    //        membershipId: 922004,
    //        transactionId: 1100101002,
    //        body: {
    //            lanId: "ndo",
    //            membershipId: 922004,
    //            sessionId: "1020768",
    //            transactionId: 1100101002
    //        }
    //    },
    //    response: {
    //        data: {
    //            receiptId: 110003,
    //            transactionId: 1100101003,
    //            transactionStatus: { Value: 3, Description: "" },
    //            rejectionReason: ""
    //        }
    //    }
    //},
    //{      // 140025 UC0101Cv34_AC28_ST003: Step 8
    //    request: {
    //        membershipId: 922004,
    //        transactionId: 1100101003,
    //        body: {
    //            lanId: "ndo",
    //            membershipId: 922004,
    //            sessionId: "1020768",
    //            transactionId: 1100101003
    //        }
    //    },
    //    response: {
    //        data: {
    //            receiptId: 110004,
    //            transactionId: 1100101004,
    //            transactionStatus: { Value: 0, Description: "" },
    //            rejectionReason: ""
    //        }
    //    }
    //},
    {      // UC0101Cv34_AC28_ST068
        request: {
            membershipId: 311111,
            transactionId: 300002,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300002
            }
        },
        response: {
            data: {
                receiptId: 30003,
                transactionId: 300003,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0101Cv34_AC28_ST038
        request: {
            membershipId: 311111,
            transactionId: 300021,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300021
            }
        },
        response: {
            data: {
                receiptId: 30022,
                transactionId: 300022,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0101Cv34_AC28_ST026
        request: {
            membershipId: 311111,
            transactionId: 300041,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300041
            }
        },
        response: {
            data: {
                receiptId: 30042,
                transactionId: 300042,
                transactionStatus: { Value: 1, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0101Cv34_AC28_ST026 _ create receipt
        request: {
            membershipId: 311111,
            transactionId: 300042,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300042
            }
        },
        response: {
            data: {
                receiptId: 30043,
                transactionId: 300043,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0101Cv34_AC28_ST011 _ create receipt
        request: {
            membershipId: 311111,
            transactionId: 300070,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300070
            }
        },
        response: {
            data: {
                receiptId: 30071,
                transactionId: 300071,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0098Cv34_AC11_ST051 (Action 3 - 200)
        request: {
            membershipId: 922010,
            transactionId: 8900018901,
            body: {
                lanId: "cvuong",
                membershipId: 922010,
                sessionId: "1020774",
                transactionId: 8900018901
            }
        },
        response: {
            data: {
                receiptId: 890001,
                transactionId: 8900018902,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    /*{   // UC0098Cv34_AC11_ST082
        request: {
            membershipId: 170390,
            transactionId: 9999999991,
            body: {
                lanId: "ttnguyen",
                membershipId: 170390,
                sessionId: "269154",
                transactionId: 9999999991
            }
        },
        response: {
            data: {
                receiptId: 999992,
                transactionId: 9999999992,
                transactionStatus: { Value: 1, Description: "" },
                rejectionReason: ""
            }
        }
    },*/
    {
        request: {
            membershipId: 170390,
            transactionId: 9999999992,
            body: {
                lanId: "ttnguyen",
                membershipId: 170390,
                sessionId: "269154",
                transactionId: 9999999992
            }
        },
        response: {
            data: {
                receiptId: 999993,
                transactionId: 9999999993,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // 140485: UC0098Cv34_AC11_ST081 (Action 3 - not 200)
        request: {
            membershipId: 922010,
            transactionId: 89000019,
            body: {
                lanId: "cvuong",
                membershipId: 922010,
                sessionId: "1020774",
                transactionId: 89000019
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
    { //AC11_ST143
        request: {
            membershipId: 170390,
            transactionId: 9112299222,
            body: {
                lanId: "ttnguyen",
                membershipId: 170390,
                sessionId: "269154",
                transactionId: 9112299222
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
    { //AC11_ST144
        request: {
            membershipId: 170390,
            transactionId: 9112255883,
            body: {
                lanId: "ttnguyen",
                membershipId: 170390,
                sessionId: "269154",
                transactionId: 9112255883
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
    {      // UC0101Cv34_AC28_ST060
        request: {
            membershipId: 311111,
            transactionId: 300082,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300082
            }
        },
        response: {
            status: 500
        }
    },
    {      // UC0101Cv34_AC28_ST058
        request: {
            membershipId: 311111,
            transactionId: 300092,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300092
            }
        },
        response: {
            status: 400
        }
    },
    {      // UC0101Cv34_AC28_ST64
        request: {
            membershipId: 311111,
            transactionId: 300102,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300102
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
    {      // UC0101Cv34_AC28_ST63
        request: {
            membershipId: 311111,
            transactionId: 300202,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300202
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
    {      // UC0101Cv34_AC28_ST62
        request: {
            membershipId: 311111,
            transactionId: 300302,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300302
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
    {      // UC0101Cv34_AC28_ST61
        request: {
            membershipId: 311111,
            transactionId: 300402,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300402
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
    {      // UC0101Cv34_AC28_ST59
        request: {
            membershipId: 311111,
            transactionId: 300502,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300502
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
    {      // UC0101Cv34_AC28_ST003 _ create receipt
        request: {
            membershipId: 311111,
            transactionId: 300602,
            body: {
                lanId: "aphan",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300602
            }
        },
        response: {
            data: {
                receiptId: 30603,
                transactionId: 300603,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    //{      // UC0101Cv34_AC28_ST003 _ create receipt
    //    request: {
    //        membershipId: 311111,
    //        transactionId: 300602,
    //        body: {
    //            lanId: "hngoc",
    //            membershipId: 311111,
    //            sessionId: "409875",
    //            transactionId: 300602
    //        }
    //    },
    //    response: {
    //        data: {
    //            receiptId: 30603,
    //            transactionId: 300603,
    //            transactionStatus: { Value: 0, Description: "" },
    //            rejectionReason: ""
    //        }
    //    }
    //},
    {      // Anh Phan
        request: {
            membershipId: 311111,
            transactionId: 99009876002,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 99009876002
            }
        },
        response: {
            data: {
                receiptId: 102003,
                transactionId: 99009876003,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0101Cv34_AC28_ST078 - HTTP not 200 is returned 3 times
        request: {
            membershipId: 311111,
            transactionId: 300702,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300702
            }
        },
        response: {
            data: {
                receiptId: 30703,
                transactionId: 300702,
                transactionStatus: { Value: 1, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0101Cv34_AC28_ST077
        request: {
            membershipId: 311111,
            transactionId: 300802,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 300802
            }
        },
        response: {
            data: {
                receiptId: 30803,
                transactionId: 300803,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0101Cv34_AC28_ST075
        request: {
            membershipId: 311111,
            transactionId: 301001,
            body: {
                lanId: "thuynh",
                membershipId: 311111,
                sessionId: "409875",
                transactionId: 301001
            }
        },
        response: {
            data: {
                receiptId: 31002,
                transactionId: 301002,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0098Cv34_AC11_ST202 - HTTP 200 
        request: {
            membershipId: 98111114,
            transactionId: 89811004,
            body: {
                lanId: "cvuong",
                membershipId: 98111114,
                sessionId: "98209878",
                transactionId: 89811004
            }
        },
        response: {
            data: {
                receiptId: 8981105,
                transactionId: 89811005,
                transactionStatus: { Value: 0, Description: "" },
                rejectionReason: ""
            }
        }
    },
    {      // UC0098Cv34_AC11_ST201 - HTTP not 200 
        request: {
            membershipId: 98111114,
            transactionId: 89811007,
            body: {
                lanId: "cvuong",
                membershipId: 98111114,
                sessionId: "98209878",
                transactionId: 89811007
            }
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotAssociatedWithBranch"
            }
        }
    }
]
