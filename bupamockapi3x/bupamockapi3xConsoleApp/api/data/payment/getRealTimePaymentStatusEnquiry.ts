export default [
    {
        request: {
            membershipId: 21026018,
            transactionId: 5465665656
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 21026018,
            transactionId: 867567567
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",// constant, don't change
                "ErrorCode": "UserIdNotAssociatedWithBranch"// erro code as WDD
            }
        }
    },
    {
          request: {
              membershipId: 21026018,
              transactionId: 689879546879
          },
          response: {
              data: {
                  receiptId: 11113334,
                  transactionId: 6898795456321,
                  transactionStatus: { Value: "3", Description: "" },
                  rejectionReason: ""
              }
          }
    },
    {
          request: {
              membershipId: 21026018,
              transactionId: 6898795456321
          },
          response: {
              data: {
                  receiptId: 11113334,
                  transactionId: 435666663434,
                  transactionStatus: { Value: "3", Description: "" },
                  rejectionReason: ""
              }
          }
    }
    ,

// Data for QC
    {   // Test Case 134799: UC0098Cv34_AC11_ST034 Step 6 Action 5 - Success
        request: {
            membershipId: 922002,
            transactionId: 99009876001
        },
        response: {
            data: {
                receiptId: 990002,
                transactionId: 99009876002,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 139766: UC0098Cv34_AC11_ST036 Step 10 (Action 5)
        // Verify bug 155501
        request: {
            membershipId: 922010,
            transactionId: 99009877661
        },
        response: {
            data: {
                receiptId: 997662,
                transactionId: 99009877662,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 139766: UC0098Cv34_AC11_ST036 Step 11 (Action 5)
        // Verify bug 155501
        request: {
            membershipId: 922010,
            transactionId: 99009877662
        },
        response: {
            data: {
                receiptId: 997663,
                transactionId: 99009877663,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case Anh Phan - Action 5 (first)
        request: {
            membershipId: 922007,
            transactionId: 99009876031
        },
        response: {
            data: {
                receiptId: 990032,
                transactionId: 99009876032,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case Anh Phan - Action 4 (second)
        request: {
            membershipId: 922007,
            transactionId: 99009876032
        },
        response: {
            data: {
                receiptId: 990033,
                transactionId: 99009876033,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: "Not valid data"
            }
        }
    },
    {   // Test Case 134766: UC0098Cv34_AC11_ST042 Step 9 (Action 5)
        request: {
            membershipId: 922010,
            transactionId: 99009876421
        },
        response: {
            data: {
                receiptId: 990422,
                transactionId: 99009876422,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134766: UC0098Cv34_AC11_ST042 Step 10 (Action 5)
        request: {
            membershipId: 922010,
            transactionId: 99009876422
        },
        response: {
            data: {
                receiptId: 990423,
                transactionId: 99009876423,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 108809: UC0098Cv34_AC11_ST099 Step 10 (Action 5)
        request: {
            membershipId: 922010,
            transactionId: 99009870991
        },
        response: {
            data: {
                receiptId: 990992,
                transactionId: 99009870992,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 108809: UC0098Cv34_AC11_ST099 Step 11 (Action 3)
        request: {
            membershipId: 922010,
            transactionId: 99009870992
        },
        response: {
            data: {
                receiptId: 990993,
                transactionId: 99009870993,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134717: UC0098Cv34_AC11_ST100 Step 10 (Action 5)
        request: {
            membershipId: 922010,
            transactionId: 99009871001
        },
        response: {
            data: {
                receiptId: 991002,
                transactionId: 99009871002,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134717: UC0098Cv34_AC11_ST100 Step 11 (Action 3)
        request: {
            membershipId: 922010,
            transactionId: 99009871002
        },
        response: {
            data: {
                receiptId: 991003,
                transactionId: 99009871003,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 148234: UC0098Cv34_AC11_ST103 Step 11 (Action 5)
        request: {
            membershipId: 922010,
            transactionId: 99009871031
        },
        response: {
            data: {
                receiptId: 991032,
                transactionId: 99009871032,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 148234: UC0098Cv34_AC11_ST103 Step 12 (Action 4)
        request: {
            membershipId: 922010,
            transactionId: 99009871032
        },
        response: {
            data: {
                receiptId: 991033,
                transactionId: 99009871033,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: "The payment details have incorrect information"
            }
        }
    },
    {   // UC0101Cv34_AC28_ST068
        request: {
            membershipId: 311111,
            transactionId: 300001
        },
        response: {
            data: {
                receiptId: 30002,
                transactionId: 300002,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134861: UC0098Cv34_AC11_ST138 Step 12 (Action 5)
        request: {
            membershipId: 922010,
            transactionId: 99009871381
        },
        response: {
            data: {
                receiptId: 991382,
                transactionId: 99009871382,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134861: UC0098Cv34_AC11_ST138 Step 13 (Action 5)
        request: {
            membershipId: 922010,
            transactionId: 99009871382
        },
        response: {
            data: {
                receiptId: 991383,
                transactionId: 99009871383,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134862: UC0098Cv34_AC11_ST139 Step 12 (Action 5)
        request: {
            membershipId: 922009,
            transactionId: 99009871391
        },
        response: {
            data: {
                receiptId: 991392,
                transactionId: 99009871392,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134862: UC0098Cv34_AC11_ST139 Step 13 (Action 5)
        request: {
            membershipId: 922009,
            transactionId: 99009871392
        },
        response: {
            data: {
                receiptId: 991393,
                transactionId: 99009871393,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134863: UC0098Cv34_AC11_ST140 Step 12 (Action 5)
        request: {
            membershipId: 922009,
            transactionId: 99009871401
        },
        response: {
            data: {
                receiptId: 991402,
                transactionId: 99009871402,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134863: UC0098Cv34_AC11_ST140 Step 13 (Action 5)
        request: {
            membershipId: 922009,
            transactionId: 99009871402
        },
        response: {
            data: {
                receiptId: 991403,
                transactionId: 99009871403,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134865: UC0098Cv34_AC11_ST142 Step 12 (Action 5)
        request: {
            membershipId: 922009,
            transactionId: 99009871421
        },
        response: {
            data: {
                receiptId: 991422,
                transactionId: 99009871422,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // Test Case 134865: UC0098Cv34_AC11_ST142 Step 13 (Action 5)
        request: {
            membershipId: 922009,
            transactionId: 99009871422
        },
        response: {
            data: {
                receiptId: 991423,
                transactionId: 99009871423,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // AC28_ST037 Anh Phan
        request: {
            membershipId: 311111,
            transactionId: 300030
        },
        response: {
            data: {
                receiptId: 30031,
                transactionId: 300031,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // AC28_ST037 Anh Phan
        request: {
            membershipId: 311111,
            transactionId: 99009876001
        },
        response: {
            data: {
                receiptId: 102002,
                transactionId: 99009876002,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // AC28_ST038
        request: {
            membershipId: 311111,
            transactionId: 300020
        },
        response: {
            data: {
                receiptId: 30021,
                transactionId: 300021,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // AC28_ST038_create receipt
        request: {
            membershipId: 311111,
            transactionId: 300021
        },
        response: {
            data: {
                receiptId: 30022,
                transactionId: 300022,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // AC28_ST026
        request: {
            membershipId: 311111,
            transactionId: 300040
        },
        response: {
            data: {
                receiptId: 30041,
                transactionId: 300041,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // AC28_ST027
        request: {
            membershipId: 311111,
            transactionId: 300050
        },
        response: {
            data: {
                receiptId: 30050,
                transactionId: 300050,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: "Rejected"
            }
        }
    },
    {   // 140485: UC0098Cv34_AC11_ST081 (Action 5 - 3)
        request: {
            membershipId: 922010,
            transactionId: 89000018
        },
        response: {
            data: {
                receiptId: 890019,
                transactionId: 89000019,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // ACAC11_ST082
        request: {
            membershipId: 170390,
            transactionId: 9999999991
        },
        response: {
            data: {
                receiptId: 30021,
                transactionId: 9999999992,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // ACAC11_ST085
        request: {
            membershipId: 170390,
            transactionId: 9999999881
        },
        response: {
            data: {
                receiptId: 30021,
                transactionId: 9999999882,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: "Invalid Payment"
            }
        }
    },
    {   // AC11_ST0143
        request: {
            membershipId: 170390,
            transactionId: 9112299881
        },
        response: {
            data: {
                receiptId: 30021,
                transactionId: 9112299111,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            transactionId: 9112299111
        },
        response: {
            data: {
                receiptId: 301122,
                transactionId: 9112299222,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST060_second time
        request: {
            membershipId: 311111,
            transactionId: 300080
        },
        response: {
            data: {
                receiptId: 30081,
                transactionId: 300081,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST060_third time
        request: {
            membershipId: 311111,
            transactionId: 300081
        },
        response: {
            data: {
                receiptId: 30082,
                transactionId: 300082,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
         }
    },
    {   // // UC0101Cv34_AC28_ST058_second time
        request: {
            membershipId: 311111,
            transactionId: 300090
        },
        response: {
            data: {
                receiptId: 30091,
                transactionId: 300091,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST058_third time
        request: {
            membershipId: 311111,
            transactionId: 300091
        },
        response: {
            data: {
                receiptId: 30092,
                transactionId: 300092,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST064_second time
        request: {
            membershipId: 311111,
            transactionId: 300100
        },
        response: {
            data: {
                receiptId: 30101,
                transactionId: 300101,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST064_third time
        request: {
            membershipId: 311111,
            transactionId: 300101
        },
        response: {
            data: {
                receiptId: 30102,
                transactionId: 300102,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST063_second time
        request: {
            membershipId: 311111,
            transactionId: 300200
        },
        response: {
            data: {
                receiptId: 30201,
                transactionId: 300201,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST063_third time
        request: {
            membershipId: 311111,
            transactionId: 300201
        },
        response: {
            data: {
                receiptId: 30202,
                transactionId: 300202,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST062_second time
        request: {
            membershipId: 311111,
            transactionId: 300300
        },
        response: {
            data: {
                receiptId: 30301,
                transactionId: 300301,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST062_third time
        request: {
            membershipId: 311111,
            transactionId: 300301
        },
        response: {
            data: {
                receiptId: 30302,
                transactionId: 300302,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST061_second time
        request: {
            membershipId: 311111,
            transactionId: 300400
        },
        response: {
            data: {
                receiptId: 30401,
                transactionId: 300401,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST061_third time
        request: {
            membershipId: 311111,
            transactionId: 300401
        },
        response: {
            data: {
                receiptId: 30402,
                transactionId: 300402,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST059_second time
        request: {
            membershipId: 311111,
            transactionId: 300500
        },
        response: {
            data: {
                receiptId: 30501,
                transactionId: 300501,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST059_third time
        request: {
            membershipId: 311111,
            transactionId: 300501
        },
        response: {
            data: {
                receiptId: 30502,
                transactionId: 300502,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST003_second time
        request: {
            membershipId: 311111,
            transactionId: 300600
        },
        response: {
            data: {
                receiptId: 30601,
                transactionId: 300601,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // // UC0101Cv34_AC28_ST003_third time
        request: {
            membershipId: 311111,
            transactionId: 300601
        },
        response: {
            data: {
                receiptId: 30602,
                transactionId: 300602,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // AC11_ST0144
        request: {
            membershipId: 170390,
            transactionId: 9112255881
        },
        response: {
            data: {
                receiptId: 30021,
                transactionId: 9112255882,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {
        request: {
            membershipId: 170390,
            transactionId: 9112255882
        },
        response: {
            data: {
                receiptId: 301122,
                transactionId: 9112255883,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0098Cv34_AC11_ST141 (Action 5 - 5 2nd)
        request: {
            membershipId: 922010,
            transactionId: 89001411
        },
        response: {
            data: {
                receiptId: 891412,
                transactionId: 89001412,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0098Cv34_AC11_ST141 (Action 5 - 422)
        request: {
            membershipId: 922010,
            transactionId: 89001412
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    {   // UC0101Cv34_AC28_ST078
        request: {
            membershipId: 311111,
            transactionId: 300700
        },
        response: {
            data: {
                receiptId: 30701,
                transactionId: 300701,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0101Cv34_AC28_ST078 - Action 3
        request: {
            membershipId: 311111,
            transactionId: 300701
        },
        response: {
            data: {
                receiptId: 30702,
                transactionId: 300702,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0101Cv34_AC28_ST077
        request: {
            membershipId: 311111,
            transactionId: 300800
        },
        response: {
            data: {
                receiptId: 30801,
                transactionId: 300801,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0101Cv34_AC28_ST077 - Action 3
        request: {
            membershipId: 311111,
            transactionId: 300801
        },
        response: {
            data: {
                receiptId: 30802,
                transactionId: 300802,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0101Cv34_AC28_ST076
        request: {
            membershipId: 311111,
            transactionId: 300900
        },
        response: {
            data: {
                receiptId: 30901,
                transactionId: 300901,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0101Cv34_AC28_ST076 - Action 4
        request: {
            membershipId: 311111,
            transactionId: 300901
        },
        response: {
            data: {
                receiptId: 30902,
                transactionId: 300902,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: "FAILED due to payment is rejected"
            }
        }
    },
    {   // UC0101Cv34_AC28_ST075
        request: {
            membershipId: 311111,
            transactionId: 301000
        },
        response: {
            data: {
                receiptId: 31001,
                transactionId: 301001,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    }, {   // UC0101Cv34_AC28_ST075 - Create Receipt
        request: {
            membershipId: 311111,
            transactionId: 301001
        },
        response: {
            data: {
                receiptId: 31002,
                transactionId: 301002,
                transactionStatus: { Value: "0", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0098Cv34_AC11_ST203 (Action 5-4)
        request: {
            membershipId: 98111114,
            transactionId: 89811001
        },
        response: {
            data: {
                receiptId: 8981102,
                transactionId: 89811002,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0098Cv34_AC11_ST202 (Action 5-3)
        request: {
            membershipId: 98111114,
            transactionId: 89811003
        },
        response: {
            data: {
                receiptId: 8981104,
                transactionId: 89811004,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0098Cv34_AC11_ST201 (Action 5-3)
        request: {
            membershipId: 98111114,
            transactionId: 89811006
        },
        response: {
            data: {
                receiptId: 8981107,
                transactionId: 89811007,
                transactionStatus: { Value: "1", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0098Cv34_AC11_ST189 (Action 5-5)
        request: {
            membershipId: 98111114,
            transactionId: 89811012
        },
        response: {
            data: {
                receiptId: 8981113,
                transactionId: 89811013,
                transactionStatus: { Value: "3", Description: "" },
                rejectionReason: ""
            }
        }
    },
    {   // UC0098Cv34_AC11_ST189 (Action 5-4)
        request: {
            membershipId: 98111114,
            transactionId: 89811013
        },
        response: {
            data: {
                receiptId: 8981114,
                transactionId: 89811014,
                transactionStatus: { Value: "2", Description: "" },
                rejectionReason: ""
            }
        }
    }
]
