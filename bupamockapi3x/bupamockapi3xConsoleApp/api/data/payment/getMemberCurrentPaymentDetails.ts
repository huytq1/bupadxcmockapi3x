export default [
    {
        //Test TC 107597 UC0100Cv34_AC04_ST003
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
        //Test TC 107595 UC0100Cv34_AC04_ST001
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
    {	// Test case UC0098Cv2_AC08_ST001
        request: {
            membershipId: 133140
        },
        response: {
            status: 400,
            headers: {
                "Error-Text": "400 12345678901234567890"
            }
        }
    },
    {	// Test case 107596 UC0100Cv34_AC04_ST002
        request: {
            membershipId: 159210
        },
        response: {
            status: 404,
            headers: {
                "Error-Text": "404 12345678901234567890"
            }
        }
    },
    {	// Test case UC0098Cv2_AC08_ST003
        request: {
            membershipId: 21237193
        },
        response: {
            status: 500,
            headers: {
                "Error-Text": "500 12345678901234567890"
            }
        }
    },
    {	// Test case UC0098Cv2_AC08_ST003
        request: {
            membershipId: 202234
        },
        response: {
            status: 500,
            headers: {
                "Error-Text": "500 12345678901234567890"
            }
        }
    },
    {
        request: {
            membershipId: 422422
        },
        response: {
            status: 422,
            response: {
                data: null,
                items: { code: 1 }
            }
        }
    },
    {
        request: {// error 500
            membershipId: 1233216
        },
        response: {
            status: 500,
            headers: {
                "Error-Text": " 4546546546546546546546"
            }
        }
    },

    {
        request: {// error 404
            membershipId: 1233212
        },
        response: {
            status: 404,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "MembershipIdNotFound "
            }
        }
    },

    {// error 400
        request: {
            membershipId: 1233211
        },
        response: {
            status: 400,
            headers: {
                "ErrorCode": "400 12345678901234567890"
            }
        }
    },

    {// error 401
        request: {
            membershipId: 1233213
        },
        response: {
            status: 401,
            headers: {
                "ErrorCode": "401 12345678901234567890"
            }
        }
    },

    {// error 403
        request: {
            membershipId: 1233214
        },
        response: {
            status: 403,
            headers: {
                "ErrorCode": "403 12345678901234567890"
            }
        }
    },

    {// error 406
        request: {
            membershipId: 1233215
        },
        response: {
            status: 406,
            headers: {
                "ErrorCode": "406 12345678901234567890"
            }
        }
    },
	/*{
        // Test case 73202, TC 73236 UC0100C_AC04_ST003
        request: { membershipId: 99122137 },
        response: { status: 999 }
    },*/
    //  {
    //Test case 73238 UC0100C_AC04_ST004
    //      request: { membershipId: 83107490 },
    //      response: { status: 404 }
    //  },
    {
        request: {
            membershipId: 21026018
        },
        response: {
            data: {
                membershipId: 21026018,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21026018,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2015-12-15T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-12-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 21026018,
                    datePaidTo: "2018-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "",
                    premiumAmount: 2017,
                    period: 17,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 21026018,
                    datePaidTo: "2017-10-10T00:00:00.000Z",
                    newDatePaidTo: "2017-10-10T00:00:00.000Z",
                    corporateGroup: "",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Renewal',
                paymentRenewalInfo: null,
                //paymentRenewalInfo: {
                //    amount: 0,
                //    frequency: "Monthly",
                //    datePaidTo: "2016-09-15T00:00:00.000Z",
                //    rateSummary: {
                //        "rebateAmount": 111,
                //        "rebatePercent": 24.2225,
                //        "lhcAmount": 1124,
                //        "lhcPercent": 33.76,
                //        "discountAmount": 445,
                //        "discountPercent": 24.6666,
                //        "baseAmount": 11111111,
                //        "gst": 44444,
                //        "netAmount": 22222223
                //    }
                //},
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thao - 123456 - 0000000000",
                    isWithinDishonourPeriod: false
                }

            }

        }
    },

    // Thao Huynh
    {
        request: {
            membershipId: 83107490
        },
        response: {
            data: {
                membershipId: 133140,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21026018,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 21026018,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 83107490,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Zhigang W Kumararaja - 123456 - 6565656565",
                    adjustedBalance: 101010101,
                    paymentCardId: 1,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thao - 123456 - 0000000000",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {
        request: {
            membershipId: 28121992
        },
        response: {
            data: {
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                directDebitDetail: {
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    netCost: 38.54,
                    baseCost: 55.05,
                    medicareRebate: 16.52,
                    lhcLoading: 15.41,
                    discount: 0,
                    gst: 0,
                    frequency: 'Weekly',
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentCardId: 0,
                    paymentDetails: "0",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    baseCost: 1316589,
                    medicareRebate: 1316589.2874,
                    lhcLoading: 46.54,
                    discount: 11.1,
                    gst: 22.4,
                    netCost: 45.5,
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentCardId: 0,
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Days",
                    paymentDetails: "Testing",
                    _links: {}
                },
                refundPaymentInfo: {
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1,
                    payee: "Thao Huynh - Current Payment",
                    paymentType: "Payment Card",
                    paymentCardId: 0,
                    paymentDetails: "Test Thao Huynh - 2654********5568 - 07/2024",
                    contributor: "Thao Huynh",
                    latestClaimServiceDate: "2017-12-30",
                    _links: {}
                },
                customerType: "Gold",
                latestClaimServiceDate: "",
                currentPaymentMethod: 'Renewal',
                paymentRenewalInfo: {
                    "amount": 12456,
                    "frequency": "",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222222
                    }
                }
            }
        }
    },

    // Data for QC

    {	// Test case 145695: UC0098Cv34_AC08_ST003
        request: {
            membershipId: 1233217
        },
        response: {
            status: 404,
            headers: {
                "Error-Text": "500 12345678901234567890"
            }
        }
    },
    {	// Test case 145703: UC0098Cv34_AC08_ST011
        request: {
            membershipId: 2344321
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    {	// Test case 145704: UC0098Cv34_AC08_ST012
        request: {
            membershipId: 2344322
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotAssociatedWithBranch"
            }
        }
    },
    {	// Test case 145705: UC0098Cv34_AC08_ST013
        request: {
            membershipId: 2344323
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserBranchNotReconciled"
            }
        }
    },
    {	// Test case 145706: UC0098Cv34_AC08_ST014
        request: {
            membershipId: 2344324
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "Other"
            }
        }
    },
    {   //  Test Case 134571: UC0100Cv3v4_AC15_ST001;       134633: UC0100Cv3v4_AC09_ST009
        //  Test Case 134740: UC0098Cv34_AC01_ST002;      134753: UC0098Cv34_AC03_ST002
        //  Test Case 145589: UC0101Cv34_AC28_ST073 (AP)
        request: {
            membershipId: 16686701
        },
        response: {
            data: {
                membershipId: 16686701,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 16686701,
                    datePaidTo: '2017-09-26T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 16686701,
                    datePaidTo: "2018-03-15T00:00:00.000Z",
                    newDatePaidTo: "2018-03-16T00:00:00.000Z",
                    rateDate: "2017-04-0100:00:00.000Z",
                    corporateGroup: "DXC",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2018-09-15T00:00:00.000Z",
                    paymentType: "Payment Card",
                    paymentDetails: "",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 16686701,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134572: UC0100Cv3v4_AC15_ST002
        request: {
            membershipId: 9684564
        },
        response: {
            data: {
                membershipId: 9684564,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 9684564,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal Service Now",
                    frequency: "Monthly",
                    nextDebitDate: '2018-12-03T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 138.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Urmila Waston - 712377 - 846346810",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2018-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 9181,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 9684564,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexey Waston - 947715 - 970246001",
                    paymentStatus: "Pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 9684564,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 112113114",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 1,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Urmila Waston - 712377 - 846346810",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Data for 59325001
    // UC0101Cv34_AC01_ST004
    {
        request: {
            membershipId: 59325001
        },
        response: {
            data: {
                membershipId: 59325001,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 59325001,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 59325001,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "101v34",
                    premiumAmount: 12154.6,
                    period: 25,
                    periodType: "Months",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cash",
                    paymentDetails: "Kheng E Drousas - 123456 - 1226939697",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": null,
                        "rebatePercent": null,
                        "lhcAmount": null,
                        "lhcPercent": null,
                        "discountAmount": null,
                        "discountPercent": null,
                        "baseAmount": null,
                        "gst": null,
                        "netAmount": null
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 59325001,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "5555********6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134739: UC0098Cv34_AC01_ST001
        //  Test Case 134653: UC0101Cv34_AC01_ST003
        //  Verify bug SIT 158229
        request: {
            membershipId: 45635432
        },
        response: {
            data: {
                membershipId: 45635432,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 45635432,
                    datePaidTo: '',
                    corporateGroup: "",
                    frequency: "",
                    nextDebitDate: '',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 0,
                    paymentType: "",
                    paymentDetails: "",
                    catchupDays: 0,
                    catchUpAmount: 0.00,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 0,
                        "rebatePercent": 0,
                        "lhcAmount": 0,
                        "lhcPercent": 0,
                        "discountAmount": 0,
                        "discountPercent": 0,
                        "baseAmount": 0,
                        "gst": 0,
                        "netAmount": 0
                    },
                    deactivatedDate: "",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 45635432,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexey Waston - 947715 - 970246001",
                    paymentStatus: "Pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": null,
                        "rebatePercent": null,
                        "lhcAmount": null,
                        "lhcPercent": null,
                        "discountAmount": null,
                        "discountPercent": null,
                        "baseAmount": null,
                        "gst": null,
                        "netAmount": null
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 45635432,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 112113114",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: '',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 1,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Alexey Layer - 123459 - 970214001",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134743: UC0098Cv34_AC01_ST005
        //  Verify bug SIT 158229
        request: {
            membershipId: 45635431
        },
        response: {
            data: {
                membershipId: 45635431,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 45635431,
                    datePaidTo: '',
                    corporateGroup: "",
                    frequency: "",
                    nextDebitDate: '',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 0,
                    paymentType: "",
                    paymentDetails: "",
                    catchupDays: 0,
                    catchUpAmount: 0.00,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 0,
                        "rebatePercent": 0,
                        "lhcAmount": 0,
                        "lhcPercent": 0,
                        "discountAmount": 0,
                        "discountPercent": 0,
                        "baseAmount": 0,
                        "gst": 0,
                        "netAmount": 0
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 45635431,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexey Waston - 947715 - 970246001",
                    paymentStatus: "Pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 45635431,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 112113114",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 1,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Alexey Layer - 123459 - 970214001",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134741: UC0098Cv34_AC01_ST003
        //  Test Case 134653: UC0101Cv34_AC01_ST003
        //  UC0098Cv34 _ Bug UAT 151840
        request: {
            membershipId: 5262274
        },
        response: {
            data: {
                membershipId: 5262274,
                contributor: "",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 5262274,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "DXC Technology Global",
                    frequency: "ABCD Unkn",
                    nextDebitDate: '2018-01-03T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 138.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jennise John - 123457 - 990765454",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2018-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 9181,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 5262274,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Jennise John - 123457 - 990765454",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 5262274,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Bank Account",
                    paymentDetails: "Bank 5 - 123456 - 112113114",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 1,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jennise John - 123457 - 990765454",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },

    {   //  Test Case 134742: UC0098Cv34_AC01_ST004;   Test Case 134791: UC0098Cv34_AC11_ST010
        //  Test Case 145582: UC0101Cv34_AC11_ST024
        request: {
            membershipId: 922001
        },
        response: {
            data: {
                membershipId: 922001,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922001,
                    datePaidTo: '2017-01-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2018-01-23T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 87354.54,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 9181,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922001,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922001,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // Test Case 134792: UC0098Cv34_AC11_ST011;      139761: UC0098Cv34_AC12_ST008;
        // Test Case 134791: UC0098Cv34_AC11_ST010;      134799: UC0098Cv34_AC11_ST034;
        // Test Case 145583: UC0101Cv34_AC11_ST025
        request: {
            membershipId: 922002
        },
        response: {
            data: {
                membershipId: 922002,
                contributor: "",
                customerType: "AIC",
                directDebitDetail: {
                    membershipId: 922002,
                    datePaidTo: '2016-12-15T00:00:00.000Z',
                    corporateGroup: "BUPA - International IT Technology",
                    frequency: "Quarterly",
                    nextDebitDate: '2018-02-28T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 654354.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jacka Lee - 123454 - 75300460",
                    catchupDays: 88,
                    catchUpAmount: 45345.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 8565.46,
                        "rebatePercent": 80,
                        "lhcAmount": 3012,
                        "lhcPercent": 75,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": -54116,
                        "gst": 100067,
                        "netAmount": 1350.46
                    },
                    deactivatedDate: "",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922002,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "DXC",
                    premiumAmount: 12154.6,
                    period: 2,
                    periodType: "Months",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Jacka Lee - 123451 - 2049406749",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922002,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 120,
                    paymentType: "Bank Account",
                    paymentDetails: "Jacka Lee - 123451 - 2049406749",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "COLIN JEFF",
                        cardHolderName: "Jonh",
                        personPaymentCardId: 81111,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 21,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "WDU",
                    paymentDetails: "Jacka Lee - 123451 - 2049406749",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //  Test Case 134745: UC0098Cv34_AC11_ST010;    145584: UC0101Cv34_AC11_ST026
        request: {
            membershipId: 922003
        },
        response: {
            data: {
                membershipId: 922003,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922003,
                    datePaidTo: '2017-01-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2018-01-23T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 8754.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    catchupDays: 53,
                    catchUpAmount: 8735.01,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 9181,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922003,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-12-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 8750.6,
                    period: 4,
                    periodType: "Years",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922003,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134783: UC0098Cv34_AC11_ST002;    134796: UC0098Cv34_AC11_ST029
        request: {
            membershipId: 922004
        },
        response: {
            data: {
                membershipId: 922004,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922004,
                    datePaidTo: '2017-06-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2018-02-01T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 16464.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jimmea John - 9740********6012 - 09/2023",
                    catchupDays: 74,
                    catchUpAmount: -8735.01,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 662.15648,
                        "rebatePercent": 45.25,
                        "lhcAmount": -524.34,
                        "lhcPercent": 34.01,
                        "discountAmount": 854.45,
                        "discountPercent": 71.660,
                        "baseAmount": 567.4,
                        "gst": -460.153,
                        "netAmount": -7535456.66
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922004,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Years",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 7500,
                        "rebatePercent": 34,
                        "lhcAmount": 6800.54,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": 1450.586,
                        "gst": 4200,
                        "netAmount": 1600
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922004,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134784: UC0098Cv34_AC11_ST003
        // AP Verify bug 130299 nextDebitDate < datePaidTo = future, currentPaymentMethod: 'Direct Debit'
        request: {
            membershipId: 922005
        },
        response: {
            data: {
                membershipId: 922005,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922005,
                    datePaidTo: '2018-01-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2017-12-01T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 16464.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Husana John - 9742********6012 - 09/2023",
                    catchupDays: 0,
                    catchUpAmount: 0,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 662.15648,
                        "rebatePercent": 45.25,
                        "lhcAmount": -524.34,
                        "lhcPercent": 34.01,
                        "discountAmount": 854.45,
                        "discountPercent": 71.660,
                        "baseAmount": 567.4,
                        "gst": -460.153,
                        "netAmount": -7535456.66
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922005,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Years",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922005,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case  134785: UC0098Cv34_AC11_ST004;   134790: UC0098Cv34_AC11_ST009
        // AP Verify bug 130299 nextDebitDate > datePaidTo = future, currentPaymentMethod: 'Agent Branch'
        request: {
            membershipId: 922006
        },
        response: {
            data: {
                membershipId: 922006,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922006,
                    datePaidTo: '2017-06-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2018-02-01T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 16464.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Channa Leo - 123457 - 0546496484",
                    catchupDays: 0,
                    catchUpAmount: 0,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 662.15648,
                        "rebatePercent": 45.25,
                        "lhcAmount": -524.34,
                        "lhcPercent": 34.01,
                        "discountAmount": 854.45,
                        "discountPercent": 71.660,
                        "baseAmount": 567.4,
                        "gst": -460.153,
                        "netAmount": -7535456.66
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922006,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Years",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922006,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Agent Branch',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case  134786: UC0098Cv34_AC11_ST005;   134787: UC0098Cv34_AC11_ST006
        //  Test Case 145585: UC0101Cv34_AC11_ST027
        // AP Verify bug 130299 nextDebitDate < datePaidTo = future, currentPaymentMethod: 'Agent Branch'
        request: {
            membershipId: 922007
        },
        response: {
            data: {
                membershipId: 922007,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922006,
                    datePaidTo: '2017-12-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Yearly",
                    nextDebitDate: '2017-11-25T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: -464.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Channa Leo - 123457 - 0546496484",
                    catchupDays: 0,
                    catchUpAmount: 0,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 662.15648,
                        "rebatePercent": 45.25,
                        "lhcAmount": -524.34,
                        "lhcPercent": 34.01,
                        "discountAmount": 854.45,
                        "discountPercent": 71.660,
                        "baseAmount": 567.4,
                        "gst": -460.153,
                        "netAmount": -7535456.66
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922007,
                    datePaidTo: "2017-05-21T00:00:00.000Z",
                    newDatePaidTo: "2017-08-21T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 750241.6,
                    period: 12,
                    periodType: "Weeks",
                    paymentDate: "2017-08-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 662.15648,
                        "rebatePercent": 45.25,
                        "lhcAmount": -524.34,
                        "lhcPercent": 34.01,
                        "discountAmount": 854.45,
                        "discountPercent": 71.660,
                        "baseAmount": 567.4,
                        "gst": -460.153,
                        "netAmount": -7535456.66
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922007,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Agent Branch',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Cash",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case  134791: UC0098Cv34_AC11_ST010;   145586: UC0101Cv34_AC11_ST028
        // AP Verify bug 130299 nextDebitDate = datePaidTo, currentPaymentMethod: 'Agent Branch'
        request: {
            membershipId: 922008
        },
        response: {
            data: {
                membershipId: 922008,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922008,
                    datePaidTo: '2018-01-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Quarterly",
                    nextDebitDate: '2018-01-05T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 7064.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Marusha John - 123450 - 4504864590",
                    catchupDays: 10,
                    catchUpAmount: 1100,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922008,
                    datePaidTo: "2016-12-15T00:00:00.000Z",
                    newDatePaidTo: "2017-05-08T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 301910.6,
                    period: 31,
                    periodType: "Months",
                    paymentDate: "2017-01-24T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922008,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Agent Branch',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134788: UC0098Cv34_AC11_ST007;    134789: UC0098Cv34_AC11_ST008
        //  Test Case 134862: UC0098Cv34_AC11_ST139;    134863: UC0098Cv34_AC11_ST140
        //  Test Case 134865: UC0098Cv34_AC11_ST142;
        request: {
            membershipId: 922009
        },
        response: {
            data: {
                membershipId: 922009,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922009,
                    datePaidTo: '2017-06-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2018-02-01T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 16464.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Nuhoha John - 9740********6012 - 09/2023",
                    catchupDays: 74,
                    catchUpAmount: -8735.01,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 662.15648,
                        "rebatePercent": 45.25,
                        "lhcAmount": -524.34,
                        "lhcPercent": 34.01,
                        "discountAmount": 854.45,
                        "discountPercent": 71.660,
                        "baseAmount": 567.4,
                        "gst": -460.153,
                        "netAmount": -7535456.66
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922009,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Years",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Nuhoha John - 9737********6014 - 09/2023",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922009,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Nuhoha John - 9737********6014 - 09/2023",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "Nuhoha John - 9737********6014 - 09/2023",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134745: UC0098Cv34_AC11_ST045;    134746: UC0098Cv34_AC11_ST046
        //  Test Case 134766: UC0098Cv34_AC11_ST042;    134767: UC0098Cv34_AC11_ST044
        //  Test Case 134861: UC0098Cv34_AC11_ST138;    140485: UC0098Cv34_AC11_ST081
        //  Test Case 139766: UC0098Cv34_AC11_ST036;    108809: UC0098Cv34_AC11_ST099
        //  Test Case 134717: UC0098Cv34_AC11_ST100;    148234: UC0098Cv34_AC11_ST103
        //  Test Case UC0098Cv34_AC11_ST188
        request: {
            membershipId: 922010
        },
        response: {
            data: {
                membershipId: 922010,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922010,
                    datePaidTo: '2017-06-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2018-02-01T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 16464.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jimmea John - 9740********6012 - 09/2023",
                    catchupDays: 74,
                    catchUpAmount: 20045.0101010,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-05-14T00:00:00.000Z",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922010,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Years",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    paymentStatus: "Pending",
                    paymentCardId: 0,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922010,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    adjustedBalance: 1543.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 0,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "Masona John - 9737********6014 - 09/2023",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case UC0098Cv34_AC11_ST015 - Confirm Step 1 Error 400
        request: {
            membershipId: 922011
        },
        response: {
            data: {
                membershipId: 922011,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 922011,
                    datePaidTo: '2017-07-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Quarterly",
                    nextDebitDate: '2017-12-28T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 8004.54,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    catchupDays: 26,
                    catchUpAmount: 2904.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    deactivatedDate: "2017-06-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 922011,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 922011,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Cash",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 4,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case UC0098Cv34_AC11_ST014 - Confirm Step 1 Error 500
        request: {
            membershipId: 82616798
        },
        response: {
            data: {
                membershipId: 82616798,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 82616798,
                    datePaidTo: '2017-07-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Fortnightly",
                    nextDebitDate: '2018-01-20T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 742346.54,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    catchupDays: 46,
                    catchUpAmount: 254.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 9181,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2017-06-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 82616798,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 82616798,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 4,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case UC0098Cv34_AC11_ST016 - Confirm Step 1 Error 404 no header
        request: {
            membershipId: 45635433
        },
        response: {
            data: {
                membershipId: 45635433,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 45635433,
                    datePaidTo: '2017-07-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Fortnightly",
                    nextDebitDate: '2018-02-10T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 8752.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Itai Mishee - 123459 - 900184500",
                    catchupDays: 80,
                    catchUpAmount: 874.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 9181,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2017-06-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 45635433,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 45635433,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 60
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 4,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case UC0098Cv34_AC11_ST017 - Confirm Step 1 Error 422 UserIdNotSetUpInBOSS
        request: {
            membershipId: 3455431
        },
        response: {
            data: {
                membershipId: 3455431,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 3455431,
                    datePaidTo: '2017-07-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Six Monthly",
                    nextDebitDate: '2018-02-10T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 8752.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexo Mishee - 123450 - 900184500",
                    catchupDays: 80,
                    catchUpAmount: 874.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 918.1,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2017-06-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3455431,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 3455431,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 120
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 4,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case UC0098Cv34_AC11_ST018 - Confirm Step 1 Error 422 Other
        request: {
            membershipId: 3455437
        },
        response: {
            data: {
                membershipId: 3455437,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 3455437,
                    datePaidTo: '2017-07-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Six Monthly",
                    nextDebitDate: '2018-02-10T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 8752.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexo Mishee - 123450 - 900184500",
                    catchupDays: 80,
                    catchUpAmount: 874.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 918.1,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2017-06-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3455437,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 3455437,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 120
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 4,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case UC0098Cv34_AC11_ST019 - Confirm Step 1 Error 422 UserIdNotAssociatedWithBranch
        request: {
            membershipId: 3455434
        },
        response: {
            data: {
                membershipId: 3455434,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 3455434,
                    datePaidTo: '2017-07-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Six Monthly",
                    nextDebitDate: '2018-02-10T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 108646.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexr Mishee - 123450 - 900184500",
                    catchupDays: 24,
                    catchUpAmount: 420.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 9158.1,
                        "rebatePercent": 74.2225,
                        "lhcAmount": 8212.4,
                        "lhcPercent": 63.06,
                        "discountAmount": 605.8,
                        "discountPercent": 24.6666,
                        "baseAmount": -831.11,
                        "gst": 6032.496,
                        "netAmount": -622.23
                    },
                    deactivatedDate: "2017-06-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3455434,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 3455434,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 120
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 4,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case UC0098Cv34_AC11_ST020 - Confirm Step 1 Error 422 UserBranchNotReconciled
        request: {
            membershipId: 3455436
        },
        response: {
            data: {
                membershipId: 3455436,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 3455436,
                    datePaidTo: '2017-07-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2018-02-10T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 108646.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexr Mishee - 123450 - 900184500",
                    catchupDays: 24,
                    catchUpAmount: 420.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 44164,
                        "netAmount": 974567
                    },
                    deactivatedDate: "2017-06-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3455436,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 3455436,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 120
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 4,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case UC0098Cv34_AC11_ST178 - Confirm Step 1 Error 404 MembershipIdNotFound
        request: {
            membershipId: 45635434
        },
        response: {
            data: {
                membershipId: 45635434,
                contributor: "Honsun Batge",
                customerType: "General",
                directDebitDetail: {
                    membershipId: 45635434,
                    datePaidTo: '2017-07-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal",
                    frequency: "Monthly",
                    nextDebitDate: '2018-02-10T00:00:00.000Z',
                    nextDirectDebitAmount: 43.43,
                    ongoingDirectdebit: 108646.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexr Mishee - 123450 - 900184500",
                    catchupDays: 24,
                    catchUpAmount: 420.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 44164,
                        "netAmount": 974567
                    },
                    deactivatedDate: "2017-06-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 45635434,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 2,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    paymentStatus: "Pending",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 45635434,
                    datePaidTo: "2017-05-01T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 1020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    adjustedBalance: 1543.696,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 76231,
                    days: 120
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Urmila Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "06",
                        expiryYear: "21",
                        paymentCardId: 4,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "Not OSHC",
                    paymentDetails: "John Mishee - 123459 - 900184500",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134574: UC0100Cv3v4_AC15_ST004;   134782: UC0098Cv34_AC11_ST001
        //  Test Case 134752: UC0098Cv34_AC03_ST001;    Verify bug 153215 - reactivationDate null
        request: {
            membershipId: 20265534
        },
        response: {
            data: {
                membershipId: 20265534,
                contributor: "Jeric N Weedall",
                customerType: "Couple",
                directDebitDetail: {
                    membershipId: 20265534,
                    datePaidTo: '2016-10-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal Service Now",
                    frequency: "Fortnightly",
                    nextDebitDate: '2018-12-03T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 138.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Itai Erfurth - 712377 - 704354864",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 9181,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2017-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 20265534,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Months",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Itai Erfurth - 712377 - 704354864",
                    paymentStatus: "Pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 20265534,
                    datePaidTo: "2017-08-22T00:00:00.000Z",
                    newDatePaidTo: "2017-09-17T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 8020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Itai Erfurth - 712377 - 704354864",
                    adjustedBalance: 1743.696,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 1209.46,
                    days: 61
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "846346810",
                        bsbNumber: "712377"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Itai Erfurth",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "4450********6152",
                        expiryMonth: "01",
                        expiryYear: "22",
                        paymentCardId: 2,
                        modifiedDate: "2017-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Itai Erfurth - 712377 - 704354864",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 145700: UC0098Cv34_AC08_ST008
        request: {
            membershipId: 2344326
        },
        response: {
            data: {
                membershipId: 2344326,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 2344326,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 2344326,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 2344326,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case
        request: {
            membershipId: 3455431
        },
        response: {
            data: {
                membershipId: 3455431,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 3455431,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3455431,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 3455431,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 145702: UC0098Cv34_AC08_ST010;
        //  Test Case 145701: UC0098Cv34_AC08_ST009
        request: {
            membershipId: 2344327
        },
        response: {
            data: {
                membershipId: 2344327,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 2344327,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 2344327,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 2344327,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 145707: UC0098Cv34_AC08_ST015
        request: {
            membershipId: 3455432
        },
        response: {
            data: {
                membershipId: 3455432,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 3455432,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Six Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3455432,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 3455432,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 145708: UC0098Cv34_AC08_ST016;    145709: UC0098Cv34_AC08_ST017
        //  Test Case 145710: UC0098Cv34_AC08_ST018
        request: {
            membershipId: 3455433
        },
        response: {
            data: {
                membershipId: 3455433,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 3455433,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Yearly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3455433,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 3455433,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case
        request: {
            membershipId: 3455434
        },
        response: {
            data: {
                membershipId: 3455434,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 3455434,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Yearly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3455434,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 3455434,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case
        request: {
            membershipId: 82959636
        },
        response: {
            data: {
                membershipId: 82959636,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 82959636,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 82959636,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 82959636,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134634: UC0100Cv3v4_AC09_ST010l;  Verify bug 153215 - reactivationDate not null
        request: {
            membershipId: 82404708
        },
        response: {
            data: {
                membershipId: 82404708,
                contributor: "Amitava Paul Sergo",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 82404708,
                    datePaidTo: '2016-10-05T00:00:00.000Z',
                    corporateGroup: "DXC Internal Service Now",
                    frequency: "Fortnightly",
                    nextDebitDate: '2018-12-03T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 138.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Itai Erfurth - 712377 - 704354864",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2018-05-26T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-09-14T00:00:00.000Z",
                    paymentCardId: 24,
                    rateSummary: {
                        "rebateAmount": 9181,
                        "rebatePercent": 44.2225,
                        "lhcAmount": 2112.4,
                        "lhcPercent": 53.06,
                        "discountAmount": 4458,
                        "discountPercent": 24.6666,
                        "baseAmount": 8731.11,
                        "gst": -444.496,
                        "netAmount": -635422.23
                    },
                    deactivatedDate: "2017-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 82404708,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Bupa R2.x Global",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Itai Erfurth - 712377 - 704354864",
                    paymentStatus: "Pending",
                    paymentCardId: 24,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 82404708,
                    datePaidTo: "2017-08-22T00:00:00.000Z",
                    newDatePaidTo: "2017-09-17T00:00:00.000Z",
                    corporateGroup: "BUPA - International IT Technology",
                    refundAmount: 8020.1646,
                    paymentType: "Payment Card",
                    paymentDetails: "Amitava Paul Sergo - 123456 - 456123987",
                    adjustedBalance: 1743.696,
                    paymentCardId: 24,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 62
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 74.8546,
                        "rebatePercent": 34,
                        "lhcAmount": 687.546,
                        "lhcPercent": 34.07964,
                        "discountAmount": 254.45,
                        "discountPercent": 72.142,
                        "baseAmount": -87421.5864,
                        "gst": 4284524164,
                        "netAmount": 974567
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Amitava Paul Sergo",
                        accountNumber: "456123987",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Amitava Paul Sergo",
                        personPaymentCardId: 21111,
                        maskedCardNumber: "1111********5978",
                        expiryMonth: "07",
                        expiryYear: "2024",
                        paymentCardId: 24,
                        modifiedDate: "2017-09-30T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Amitava Paul Sergo - 123456 - 456123987",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },

    // UC0100Cv3v4_AC01_ST001
    // UC0100Cv3v4_AC02_ST002
    // UC0100Cv3v4_AC02_ST001
    {
        request: {
            membershipId: 61634119
        },
        response: {
            data: {
                membershipId: 61634119,
                contributor: "Cristino J Marrion",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 61634119,
                    datePaidTo: '2017-09-16T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ABC",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 100,
                    ongoingDirectdebit: 120,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X Marrion - 123456 - 999888777",
                    catchupDays: 185,
                    catchUpAmount: 0,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 61634119,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X Marrion - 123456 - 999888777",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 61634119,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-09-16T00:00:00.000Z",
                    corporateGroup: "BUPA78 - Nguyen This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Cristino J Marrion - 123456 - 5647366522",
                    adjustedBalance: 101010101,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: null,
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 0,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Alexis X Marrion - 123456 - 999888777",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    { // UC0280C: Current Payment Method = Direct Debit, Confirm button disabled
        request: {
            membershipId: 82236431
        },
        response: {
            data: {
                membershipId: 82236431,
                contributor: "Elenita Kira Sergo",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 82236431,
                    datePaidTo: '2017-09-17T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-06-15T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 45.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Elenita Kira Sergo - 123456 - 337943528",
                    catchupDays: 180,
                    catchUpAmount: 2454.968,
                    paymentCardExpiry: "2024-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 27,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 82236431,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 27,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 82236431,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-09-16T00:00:00.000Z",
                    corporateGroup: "BUPA78 - Nguyen This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Elenita Kira Sergo - 123456 - 337943528",
                    adjustedBalance: 101010101,
                    paymentCardId: 27,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Tauhore S Patania",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Tauhore S Patania",
                        personPaymentCardId: 21125,
                        maskedCardNumber: "5555********5555",
                        expiryMonth: "02",
                        expiryYear: "2027",
                        paymentCardId: 215,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Tauhore S Patania - 123456 - 337943528",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0100Cv3v4_AC01_ST002
    {
        request: {
            membershipId: 44512786
        },
        response: {
            data: {
                membershipId: 44512786,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 44512786,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 44512786,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 44512786,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thao - 123456 - 0000000000",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has no pending
    // Person: Thuy T Pham
    //UC0101Cv34_AC11_ST030
    {
        request: {
            membershipId: 80114531
        },
        response: {
            data: {
                membershipId: 80114531,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 80114531,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 80114531,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 80114531,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Thuy T Pham - 123456 - 6565656565",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thuy T Pham - 123456 - 6565656565",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    // Test case 134560: UC0100Cv3v4_AC13_ST002 - error 422 UserBranchNotReconciled - confirming
    {
        request: {
            membershipId: 82601204
        },
        response: {
            data: {
                membershipId: 82601204,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 82601204,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 82601204,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 82601204,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Thuy T Pham - 123456 - 6565656565",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Hetal Almasidemaleki - 123456 - 112021458",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 OSHC has no pending
    // Person: Thuy T Pham
    {
        request: {
            membershipId: 311068
        },
        response: {
            data: {
                membershipId: 311068,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 311068,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 311068,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 311068,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Thuy T Pham - 123456 - 6565656565",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "OSHC Payment",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thao - 123456 - 0000000000",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has pending
    // Person: Chang Dehar Lahm
    {
        request: {
            membershipId: 4917035
        },
        response: {
            data: {
                membershipId: 4917035,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 4917035,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Chang Dehar Lahm - 123456 - 6565656565",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 4917035,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Chang Dehar Lahm - 123456 - 6565656565",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 4917035,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Chang Dehar Lahm - 123456 - 6565656565",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Chang Dehar Lahm",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thao - 123456 - 0000000000",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 payment card has no pending
    // Person: Mylan S Mackaness
    {
        request: {
            membershipId: 21309604
        },
        response: {
            data: {
                membershipId: 21309604,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21309604,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 21309604,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 21309604,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Mylan S Mackaness - 123456 - 6565656565",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Mylan S Mackaness",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thao - 123456 - 0000000000",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Cheque has no pending
    {
        request: {
            membershipId: 3743028
        },
        response: {
            data: {
                membershipId: 3743028,
                contributor: "Shukla Dehar Charmsaz", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 3743028,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 3743028,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 3743028,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Cheque",
                    paymentDetails: "Thuy T Pham - 123456 - 6565656565",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Cheque",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Shukla John Rapuzel - 123456 - 0101010101",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {
        request: {
            membershipId: 99122137
        },
        response: {
            data: {
                membershipId: 99122137,
                contributor: "Shukla Dehar Charmsaz", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 99122137,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 99122137,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 99122137,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Cheque",
                    paymentDetails: "Sharday - 123456 - 300087400",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Cheque",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Shukla John Rapuzel - 123456 - 0101010101",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {
        request: {
            membershipId: 55330138
        },
        response: {
            data: {
                membershipId: 55330138,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 55330138,
                    datePaidTo: '2017-08-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2017-10-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Bank Account",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2019-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 15000,
                        "gst": 1570,
                        "netAmount": 24500
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 55330138,
                    datePaidTo: "2017-08-05T00:00:00.000Z",
                    newDatePaidTo: "2017-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC Service Corporation",
                    premiumAmount: 12500,
                    period: 5,
                    periodType: "Days",
                    paymentDate: "2017-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 150,
                        "rebatePercent": 30.2225,
                        "lhcAmount": 1200,
                        "lhcPercent": 33.76,
                        "discountAmount": 500,
                        "discountPercent": 21.6666,
                        "baseAmount": 17000,
                        "gst": 1800,
                        "netAmount": 34000
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 55330138,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-09-20T00:00:00.000Z",
                    corporateGroup: "DXC Vietnam",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1100,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thao - 123456 - 0000000000",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 cash has no pending
    {
        request: {
            membershipId: 4004073
        },
        response: {
            data: {
                membershipId: 4004073,
                contributor: "Maika Dehar Astarci", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 4004073,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 4004073,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 4004073,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Cash",
                    paymentDetails: "Thuy T Pham - 123456 - 6565656565",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Cash",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Thao - 123456 - 0000000000",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0100Cv3v4_AC02_ST005
        // UC0100Cv3v4_AC02_ST006
        // UC0100Cv3v4_AC03_ST005
        // UC0100Cv3v4_AC03_ST006
        // UC0100Cv3v4_AC03_ST007
        request: {
            membershipId: 99999999
        },
        response: {
            data: {
                membershipId: 99999999,
                contributor: "Park Je Wook",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 99999999,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 154.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 99999999,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 99999999,
                    datePaidTo: "2017-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Cheque",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-08-24T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Cheque",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //134541_UC0100Cv3v4_AC11_ST001 ,
        request: {
            membershipId: 74212962
        },
        response: {
            data: {
                membershipId: 74212962,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 74212962,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 74212962,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 74212962,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "AUTUMN BIRCH",
                        cardHolderName: "John A 2",
                        personPaymentCardId: 612346,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jacob A Manuele - 123456 - 663399 ",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {  //UC0100Cv3v4, no pending payment, payment card
        request: {
            membershipId: 74512962
        },
        response: {
            data: {
                membershipId: 74512962,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 74512962,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 74512962,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 74512962,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "AUTUMN BIRCH",
                        cardHolderName: "John A 2",
                        personPaymentCardId: 612346,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jacob C Manuele - 123456 - 663399 ",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //UC0100Cv3v4, no pending payment, payment card, UC0101Cv34_AC11_ST030
        request: {
            membershipId: 28811111
        },
        response: {
            data: {
                membershipId: 28811111,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 28811111,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 28811111,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 28811111,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "COLIN JEFF",
                        cardHolderName: "Jonh",
                        personPaymentCardId: 811111,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 0,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "John A 2 - 554888******4576 - 06/2029",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //UC0100Cv3v4, has pending payment, payment card
        request: {
            membershipId: 83168617
        },
        response: {
            data: {
                membershipId: 83168617,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 83168617,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 83168617,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },
                refundPaymentInfo: {
                    membershipId: 83168617,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "COLIN JEFF",
                        cardHolderName: "Jonh",
                        personPaymentCardId: 811111,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 0,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "John A 2 - 554888******4576 - 06/2029",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //UC0100Cv3v4, no pending payment, payment card
        // TC 134653, no pending Single Payment and Refund
        request: {
            membershipId: 74412962
        },
        response: {
            data: {
                membershipId: 74412962,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 83168617,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 10000,
                        "gst": 400,
                        "netAmount": 10000
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 83168617,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 15000
                    },
                    _links: {},
                },
                refundPaymentInfo: {
                    membershipId: 74412962,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "COLIN JEFF",
                        cardHolderName: "Jonh",
                        personPaymentCardId: 811111,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 0,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "John A 2 - 554888******4576 - 06/2029",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has no pending
    // Person: Apel
    {
        request: {
            membershipId: 24899015
        },
        response: {
            data: {
                membershipId: 24899015,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 24899015,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 24899015,
                    datePaidTo: "2017-10-31T00:00:00.000Z",
                    newDatePaidTo: "2017-10-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2017-10-28T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    paymentStatus: "Pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 24899015,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {// Quang UC100  Bank Account has no pending
        request: {
            membershipId: 320011
        },
        response: {
            data: {
                membershipId: 320011,
                contributor: "Quang3 K Nguyen", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320011,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320011,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 320011,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Quang2 K Nguyen - 123456 - 302522871",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {// Quang UC100  Bank Account has no pending UC0101Cv34_AC12_ST005
        request: {
            membershipId: 320017
        },
        response: {
            data: {
                membershipId: 320017,
                contributor: "Quang3 K Nguyen", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320017,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Bang2 K Nguyen - 123456 - 122133412",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320017,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Kaka Nguyen - 123456 - 122133412",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 320017,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Kaka Nguyen - 123456 - 122133412",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {  //UC0100Cv3v4, has pending payment, payment card
        request: {
            membershipId: 320013
        },
        response: {
            data: {
                membershipId: 320013,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320013,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320013,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320013,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "AUTUMN BIRCH",
                        cardHolderName: "John A 2",
                        personPaymentCardId: 612346,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jacob C Manuele - 123456 - 663399 ",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //UC0100Cv3v4, no pending payment, payment card
        request: {
            membershipId: 320014
        },
        response: {
            data: {
                membershipId: 320014,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320014,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320014,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320014,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "AUTUMN BIRCH",
                        cardHolderName: "John A 2",
                        personPaymentCardId: 612346,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jacob C Manuele - 123456 - 663399 ",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //UC0100Cv3v4, no pending payment, payment card AC14_ST008, AC14_ST010 isWithinDishonourPeriod true/false
        request: {
            membershipId: 320015
        },
        response: {
            data: {
                membershipId: 320015,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320015,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320015,
                    datePaidTo: "2018-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Payment Card",
                    paymentDetails: "Payment Card",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320015,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "AUTUMN BIRCH",
                        cardHolderName: "John A 2",
                        personPaymentCardId: 612346,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jacob C Manuele - 123456 - 663399 ",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //UC0100Cv3v4, no pending payment, payment card, AC14_ST06,ST07 only change isWithinDishonourPeriod true or false
        request: {
            membershipId: 320016
        },
        response: {
            data: {
                membershipId: 320016,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320016,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 4,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320016,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320016,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 4,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "AUTUMN BIRCH",
                        cardHolderName: "John A 2",
                        personPaymentCardId: 612346,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jacob C Manuele - 123456 - 663399 ",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //UC0100Cv3v4, no pending payment, payment card
        request: {
            membershipId: 320019
        },
        response: {
            data: {
                membershipId: 320019,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320019,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320019,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Payment Card",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 5,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320019,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "AUTUMN BIRCH",
                        cardHolderName: "John A 2",
                        personPaymentCardId: 612346,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 5,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jacob C Manuele - 123456 - 663399 ",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {//UC0100Cv3v4, no pending payment, bank account
        request: {
            membershipId: 320020
        },
        response: {
            data: {
                membershipId: 320020,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320020,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 320020,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung4 K Nguyen - 123456 - 4848484848",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 320020,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung4 K Nguyen - 123456 - 4848484848",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Laang2 K Nguyen - 123456 - 12400044",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //134542: UC0100Cv3v4_AC11_ST002
        request: {
            membershipId: 74312962
        },
        response: {
            data: {
                membershipId: 74312962,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 74312962,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 74312962,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 74312962,
                    datePaidTo: "2018-09-15T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1500,
                    paymentType: "Cash",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1777.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "AUTUMN BIRCH",
                        cardHolderName: "John A 2",
                        personPaymentCardId: 612346,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jacob A Manuele - 123456 - 663399 ",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {  //UC0100Cv3v4, no pending payment, bank account
        request: {
            membershipId: 28811112
        },
        response: {
            data: {
                membershipId: 28811112,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 28811112,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 28811112,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 28811112,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 0,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Monday2 Friday2",
                        accountNumber: "8111111122",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "COLIN JEFF",
                        cardHolderName: "Jonh",
                        personPaymentCardId: 81111,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 12,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Monday2 Friday2 - 123456 - 8111111122",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has no pending
    // Person: Nhung5 K Nguyen
    {
        request: {
            membershipId: 646464
        },
        response: {
            data: {
                membershipId: 646464,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21026018,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 21026018,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 646464,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung5 K Nguyen - 123456 -6464646464",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Nhung5 K Nguyen",
                        accountNumber: "6464646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Nhung5 K Nguyen - 123456 -6464646464",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has no pending
    // Person: Nhung3 K Nguyen
    {
        request: {
            membershipId: 393939
        },
        response: {
            data: {
                membershipId: 393939,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21026018,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 393939,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 393939,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung3 K Nguyen - 123456 - 3939393939",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Nhung3 K Nguyen - 123456 - 3939393939",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has no pending
    // Person: Nhung2 K nguyen
    {
        request: {
            membershipId: 595959
        },
        response: {
            data: {
                membershipId: 595959,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21026018,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 595959,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 595959,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung2 K Nguyen - 123456 - 5959595959",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Nhung2 K Nguyen - 123456 - 5959595959",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has no pending
    // Person: Nhung K Nguyen
    {
        request: {
            membershipId: 585858
        },
        response: {
            data: {
                membershipId: 585858,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21026018,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 585858,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 585858,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung K Nguyen - 123456 - 5858585858",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Nhung K Nguyen - 123456 - 5858585858",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has no pending
    // Person: Nhung4 K Nguyen
    {
        request: {
            membershipId: 484848
        },
        response: {
            data: {
                membershipId: 484848,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21026018,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 484848,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung4 K Nguyen - 123456 - 4848484848",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 484848,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung4 K Nguyen - 123456 - 4848484848",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Nhung4 K Nguyen - 123456 - 4848484848",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0100Cv3v4, no pending payment, bank account, payment details = null
        // UC0280C_AC04_ST004_
        // AP Verify bug 130299 nextDebitDate > datePaidTo = future, currentPaymentMethod: 'Direct Debit'
        request: {
            membershipId: 91975193
        },
        response: {
            data: {
                membershipId: 91975193,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 91975193,
                    datePaidTo: '2017-12-28T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 91975193,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 91975193,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 0,
                    paymentType: "Payment Card",
                    paymentDetails: "John A - 554888******4576 - 06/2029  ",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Monday2 Friday2",
                        accountNumber: "8111111122",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "COLIN JEFF",
                        cardHolderName: "Jonh",
                        personPaymentCardId: 81111,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 12,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    //{  //UC0100Cv3v4, AC09-ST001
    //    request: {
    //        membershipId: 35792468
    //    },
    //    response: {
    //        data: {
    //            membershipId: 35792468,
    //            contributor: "World Bank",
    //            customerType: "Gold",
    //            directDebitDetail: {
    //                membershipId: 35792468,
    //                datePaidTo: '2014-10-05T00:00:00.000Z',
    //                corporateGroup: "",
    //                frequency: "Monthly",
    //                nextDebitDate: '2018-05-13T00:00:00.000Z',
    //                nextDirectDebitAmount: 1493.43,
    //                ongoingDirectdebit: 38.54,
    //                paymentType: "Payment Card",
    //                paymentDetails: "Jaric Waston - 123456 - 84656468",
    //                catchupDays: 185,
    //                catchUpAmount: 1454.9,
    //                paymentCardExpiry: "2016-09-15T00:00:00.000Z",
    //                deactivatedReason: "Too late",
    //                reactivationDate: "2017-10-14T00:00:00.000Z",
    //                paymentCardId: 1,
    //                rateSummary: {
    //                    "rebateAmount": 111,
    //                    "rebatePercent": 24.2225,
    //                    "lhcAmount": 1124,
    //                    "lhcPercent": 33.76,
    //                    "discountAmount": 445,
    //                    "discountPercent": 24.6666,
    //                    "baseAmount": 11111111,
    //                    "gst": 44444,
    //                    "netAmount": 22222223
    //                },
    //                deactivatedDate: "2016-09-15T00:00:00.000Z",
    //                _links: {},
    //            },
    //            pendingSinglePayment: {
    //                membershipId: 35792468,
    //                datePaidTo: "2016-09-15T00:00:00.000Z",
    //                newDatePaidTo: "2016-09-15T00:00:00.000Z",
    //                rateDate: "2016-09-15T00:00:00.000Z",
    //                corporateGroup: "csc",
    //                premiumAmount: 12154.6,
    //                period: 17,
    //                periodType: "Cash",
    //                paymentDate: "2016-09-15T00:00:00.000Z",
    //                paymentType: "Cheque",
    //                paymentDetails: "Bank Account",
    //                paymentStatus: "Pending",
    //                paymentCardId: 1,
    //                rateSummary: {
    //                    "rebateAmount": 111,
    //                    "rebatePercent": 24.2225,
    //                    "lhcAmount": 1124,
    //                    "lhcPercent": 33.76,
    //                    "discountAmount": 445,
    //                    "discountPercent": 24.6666,
    //                    "baseAmount": 11111111,
    //                    "gst": 44444,
    //                    "netAmount": 22222223
    //                },
    //                _links: {},
    //            },
    //            refundPaymentInfo: {
    //                membershipId: 35792468,
    //                datePaidTo: "2018-09-20T00:00:00.000Z",
    //                newDatePaidTo: "2018-10-20T00:00:00.000Z",
    //                corporateGroup: "BUPA78787875 - International IT Technology",
    //                refundAmount: 0,
    //                paymentType: "Bank Account",
    //                paymentDetails: "Arya Ar Stark - 947715 - 4578998756",
    //                adjustedBalance: 1543.646496,
    //                paymentCardId: 0,
    //                _links: {}
    //            },
    //            arrearsInfo: {
    //                amount: 10,
    //                days: 11
    //            },
    //            recentPaymentOnDishonourPeriod: true,
    //            latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
    //            currentPaymentMethod: 'Direct Debit',
    //            paymentRenewalInfo: {
    //                amount: 0,
    //                frequency: "Monthly",
    //                datePaidTo: "2016-09-15T00:00:00.000Z",
    //                rateSummary: {
    //                    "rebateAmount": 111,
    //                    "rebatePercent": 24.2225,
    //                    "lhcAmount": 1124,
    //                    "lhcPercent": 33.76,
    //                    "discountAmount": 445,
    //                    "discountPercent": 24.6666,
    //                    "baseAmount": 11111111,
    //                    "gst": 44444,
    //                    "netAmount": 22222223
    //                }
    //            },
    //            lastProcessedPaymentDetail: {
    //                paymentType: "Bank Account",
    //                bankAccount: {
    //                    accountName: "Jaric Waston",
    //                    accountNumber: "9348646464",
    //                    bsbNumber: "123456"
    //                },
    //                paymentCard: {
    //                    cardBrandName: "COLIN JEFF",
    //                    cardHolderName: "Jonh",
    //                    personPaymentCardId: 81111,
    //                    maskedCardNumber: "554888******4576",
    //                    expiryMonth: "06",
    //                    expiryYear: "29",
    //                    paymentCardId: 12,
    //                    modifiedDate: "2016-09-15T00:00:00.000Z"
    //                },
    //                paymentMethod: "OSHC Payment",
    //                paymentDetails: "John A 2 - 554888******4576 - 06/2029",
    //                isWithinDishonourPeriod: true
    //            }
    //        }
    //    }
    //},
    {  //UC0100Cv3v4, AC09-ST002
        request: {
            membershipId: 35792468
        },
        response: {
            data: {
                membershipId: 35792468,
                contributor: "Essos Bank",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 35792468,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 35792468,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 35792468,
                    datePaidTo: "2018-09-20T00:00:00.000Z",
                    newDatePaidTo: "2018-10-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 120,
                    paymentType: "Bank Account",
                    paymentDetails: "Nothing - 123456 - 6789012340",// AC09 ST004
                    adjustedBalance: 1543.646496,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {// UC100 AC09-ST002
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "COLIN JEFF",
                        cardHolderName: "Jonh",
                        personPaymentCardId: 81111,
                        maskedCardNumber: "554888******4576",
                        expiryMonth: "06",
                        expiryYear: "29",
                        paymentCardId: 12,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "ABCD - 123456 - 6789012340",//UC100 AC09-ST003
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    /*{   //  Test Case 134545: UC0100Cv3v4_AC011_ST005
        request: {
            membershipId: 35790009
        },
        response: {
            data: {
                membershipId: 35790009,
                contributor: "Jeric N Weedall",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 16686701,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 35790009,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },
                refundPaymentInfo: {
                    membershipId: 35790009,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Cash",
                    paymentDetails: "NewBank - 123456 - 111111",
                    adjustedBalance: 1663.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },*/
    {   //Tien Huynh
        //Test Case 134590: UC0098Cv3v4_AC13_ST001;
        request: {
            membershipId: 16689000
        },
        response: {
            data: {
                membershipId: 16689000,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 16689000,
                    datePaidTo: '2017-12-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2017-10-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 16689000,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 16689000,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //Tien Huynh
        //Test Case 134592: UC0098Cv3v4_AC14_ST001;
        request: {
            membershipId: 16689008
        },
        response: {
            data: {
                membershipId: 16689008,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 16689008,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-09-23T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "null",
                    paymentDetails: "null",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 16689008,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 16689008,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //Tien Huynh
        //Test Case 134759: UC0098Cv3v4_AC05_ST002;
        request: {
            membershipId: 16689007
        },
        response: {
            data: {
                membershipId: 16689007,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 16689007,
                    datePaidTo: '2017-10-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Fortnightly",
                    nextDebitDate: '2017-10-22T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 0,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 16689007,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 16689007,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },

    {   // Nguyen
        request: {
            membershipId: 111000
        },
        response: {
            data: {
                membershipId: 111000,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 111000,
                    datePaidTo: '2017-09-20T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2017-09-27T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Amar L Tata - 123456 - 86668879",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 111000,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 111000,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Satour J Ignas - 123456 - 85648879",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Satour J Ignas - 123456 - 85648879", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //  Test Case 134768: UC0098Cv34_AC07_ST001
        // TC 134699 UC0101Cv34_AC16_ST003
        request: {
            membershipId: 65939258
        },
        response: {
            data: {
                membershipId: 65939258,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 65939258,
                    datePaidTo: '2017-09-20T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 112,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 65939258,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 114,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 65939258,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: null,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },

    {   // UC0280C_AC04
        request: {
            membershipId: 98837214
        },
        response: {
            data: {
                membershipId: 98837214,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 98837214,
                    datePaidTo: '',
                    corporateGroup: "",
                    frequency: "",
                    nextDebitDate: '',
                    nextDirectDebitAmount: null,
                    ongoingDirectdebit: null,
                    paymentType: "",
                    paymentDetails: "",
                    catchupDays: null,
                    catchUpAmount: null,
                    paymentCardExpiry: "",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": null,
                        "rebatePercent": null,
                        "lhcAmount": null,
                        "lhcPercent": null,
                        "discountAmount": null,
                        "discountPercent": null,
                        "baseAmount": null,
                        "gst": null,
                        "netAmount": null
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 98837214,
                    datePaidTo: "",
                    newDatePaidTo: '',
                    rateDate: "",
                    corporateGroup: "",
                    premiumAmount: 0,
                    period: 0,
                    periodType: "",
                    paymentDate: "",
                    paymentType: "",
                    paymentDetails: "",
                    paymentStatus: "",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 0,
                        "rebatePercent": 0,
                        "lhcAmount": 0,
                        "lhcPercent": 0,
                        "discountAmount": 0,
                        "discountPercent": 0,
                        "baseAmount": 0,
                        "gst": 0,
                        "netAmount": 0
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 98837214,
                    datePaidTo: "",
                    newDatePaidTo: "",
                    corporateGroup: "",
                    refundAmount: 0,
                    paymentType: "",
                    paymentDetails: "",
                    adjustedBalance: 0,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0280C: Current Payment Method = Direct Debit, Confirm button enabled
        request: {
            membershipId: 76774256
        },
        response: {
            data: {
                membershipId: 76774256,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 76774256,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Yinfeng Malkek Saudabay - 123456 - 9898989898",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "",
                    reactivationDate: "2017-09-19T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2017-09-20T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 76774256,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 76774256,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Yinfeng Malkek Saudabay - 123456 - 9898989898",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                //paymentRenewalInfo: {
                //    "amount": 0,
                //    "frequency": "Monthly",
                //    datePaidTo: "2016-09-15T00:00:00.000Z",
                //    "rateSummary": {
                //        "rebateAmount": 111,
                //        "rebatePercent": 24.2225,
                //        "lhcAmount": 1124,
                //        "lhcPercent": 33.76,
                //        "discountAmount": 445,
                //        "discountPercent": 24.6666,
                //        "baseAmount": 11111111,
                //        "gst": 44444,
                //        "netAmount": 22222223
                //    }
                //},
                paymentRenewalInfo: null,
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  UC0280C: Current Payment Method = Renewal, Confirm button enabled
        //  UC0098Cv3v4_AC05
        request: {
            membershipId: 82315417
        },
        response: {
            data: {
                membershipId: 82315417,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 82315417,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Weekly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Lavac John Atania - 123456 - 8989898989",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Change of PM",
                    reactivationDate: "",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2017-09-20T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 82315417,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 82315417,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Lavac John Atania - 123456 - 8989898989",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: "Agent Branch",
                //paymentRenewalInfo: {
                //    "amount": 12456,
                //    "frequency": "Yearly",
                //    datePaidTo: "2016-09-15T00:00:00.000Z",
                //    "rateSummary": {
                //        "rebateAmount": 112,
                //        "rebatePercent": 25.2225,
                //        "lhcAmount": 1125,
                //        "lhcPercent": 34.76,
                //        "discountAmount": 445,
                //        "discountPercent": 25.6666,
                //        "baseAmount": 11111112,
                //        "gst": 44445,
                //        "netAmount": 22222222
                //    }
                //},
                paymentRenewalInfo: null,
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  UC0280C: Current Payment Method = Renewal, Confirm button disabled
        request: {
            membershipId: 72827017
        },
        response: {
            data: {
                membershipId: 72827017,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 72827017,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 72827017,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 72827017,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: "Agent Branch",
                paymentRenewalInfo: {
                    "amount": 12456,
                    "frequency": "Yearly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 112,
                        "rebatePercent": 25.2225,
                        "lhcAmount": 1125,
                        "lhcPercent": 34.76,
                        "discountAmount": 445,
                        "discountPercent": 25.6666,
                        "baseAmount": 11111112,
                        "gst": 44445,
                        "netAmount": 22222222
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0280C_AC03: Error when Confirm
        request: {
            membershipId: 28011111
        },
        response: {
            data: {
                membershipId: 28011111,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 28011111,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 28011111,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 28011111,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0280C_AC03: Error when Confirm
        request: {
            membershipId: 28011112
        },
        response: {
            data: {
                membershipId: 28011112,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 28011112,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 28011112,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 28011112,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0280C_AC03: Error when Confirm
        request: {
            membershipId: 28011113
        },
        response: {
            data: {
                membershipId: 28011113,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 28011113,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 28011113,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 28011113,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0280C_AC03: Error when Confirm
        request: {
            membershipId: 28011114
        },
        response: {
            data: {
                membershipId: 28011114,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 28011114,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 28011114,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 28011114,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 134770: UC0098Cv34_AC09_ST002, UC0098Cv34_AC14_ST002
        request: {
            membershipId: 66375395
        },
        response: {
            data: {
                membershipId: 66375395,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 66375395,
                    datePaidTo: '2018-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Guerino H Jacob - 123456 - 88996699",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 66375395,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 66375395,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0098Cv3v4_AC15: Deactivate Date < Current Date, Reactivate Date = null, Deactivation Reason has valid value
        request: {
            membershipId: 98111111
        },
        response: {
            data: {
                membershipId: 98111111,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 98111111,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Request from customer",
                    reactivationDate: "",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2017-09-26T00:00:00.000Z", // 2017-09-15T00:00:00.000Z
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 98111111,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 98111111,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0098Cv3v4_AC15: Reactivate Date < Deactivate Date < Current Date, Reactivate Date not Null, Deactivation Reason has valid value
        request: {
            membershipId: 98111112
        },
        response: {
            data: {
                membershipId: 98111112,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 98111112,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2017-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-09-10T00:00:00.000Z", // "2017-09-10T00:00:00.000Z"
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2017-08-15T00:00:00.000Z", // "2017-09-15T00:00:00.000Z"
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 98111112,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 98111112,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0098Cv3v4_AC15: Deactivate Date < Current Date < Reactivate Date, Reactivate Date not Null, Deactivation Reason has valid value
        request: {
            membershipId: 98111113
        },
        response: {
            data: {
                membershipId: 98111113,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 98111113,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2017-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-09-26T00:00:00.000Z", // "2017-10-10T00:00:00.000Z"
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2017-09-26T00:00:00.000Z", // "2017-09-15T00:00:00.000Z"
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 98111113,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 98111113,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 139667: UC0098Cv34_AC14_st002
        request: {
            membershipId: 72212962
        },
        response: {
            data: {
                membershipId: 72212962,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 72212962,
                    datePaidTo: '2018-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "",
                    paymentDetails: "Guerino H Jacob - 123456 - 88996699",
                    catchupDays: 85,
                    catchUpAmount: -1454.859,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 72212962,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 72212962,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0098Cv2_AC05
        request: {
            membershipId: 82397449
        },
        response: {
            data: {
                membershipId: 82397449,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 82397449,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Six Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 82397449,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 82397449,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // UC0098Cv2_AC05
        request: {
            membershipId: 20609665
        },
        response: {
            data: {
                membershipId: 20609665,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 20609665,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Yearly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 20609665,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 20609665,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    "amount": 0,
                    "frequency": "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    "rateSummary": {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {
        request: {
            membershipId: 68110001
        },
        response: {
            data: {
                membershipId: 68110001,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 68110001,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 68110001,
                    datePaidTo: "2018-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 68110001,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    // Nhung Nguyen UC100 AC07 Bank Account has no pending
    // Person: Nhung5 K Nguyen
    {
        request: {
            membershipId: 21237193
        },
        response: {
            data: {
                membershipId: 646464,
                contributor: "Jeric N Weedall", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 21026018,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ACB",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "4545456677 - 123456 - 123456789",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {},
                },
                pendingSinglePayment: {
                    membershipId: 21026018,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Cash",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {},
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 646464,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Nhung5 K Nguyen - 123456 -6464646464",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Nhung5 K Nguyen",
                        accountNumber: "6464646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Maya Kanthachai - 123456 - 3456789098",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   // Error 400 - Get
        request: {
            membershipId: 11122201
        },
        response: {
            status: 400,
            headers: {
                "Error-Text": ""
            }
        }
    },
    {   // Error 401 - Get
        request: {
            membershipId: 11122202
        },
        response: {
            status: 401,
            headers: {
                "Error-Text": ""
            }
        }
    },
    {   // Error 403 - Get
        request: {
            membershipId: 11122203
        },
        response: {
            status: 403,
            headers: {
                "Error-Text": ""
            }
        }
    },
    {   // Error 404 - Get
        request: {
            membershipId: 11122204
        },
        response: {
            status: 404,
            headers: {
                "Error-Text": ""
            }
        }
    },
    {   // Error 406 - Get
        request: {
            membershipId: 11122205
        },
        response: {
            status: 406,
            headers: {
                "Error-Text": ""
            }
        }
    },
    {   // Error 500 - Get
        request: {
            membershipId: 11122206
        },
        response: {
            status: 500,
            headers: {
                "Error-Text": ""
            }
        }
    },
    {   //UserIdNotSetUpInBOSS
        request: {
            membershipId: 11122207
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    {   //UserIdNotAssociatedWithBranch
        request: {
            membershipId: 11122208
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotAssociatedWithBranch"
            }
        }
    },
    {   //UserBranchNotReconciled
        request: {
            membershipId: 11122209
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserBranchNotReconciled"
            }
        }
    },
    {   //MembershipIdNotFound
        request: {
            membershipId: 320018
        },
        response: {
            status: 404,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "MembershipIdNotFound"
            }
        }
    },
    {   //Other
        request: {
            membershipId: 11122210
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "Other"
            }
        }
    },
    {   //Error message 500 - Edit
        request: {
            membershipId: 11122211
        },
        response: {
            data: {
                membershipId: 11122211,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122211,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122211,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122211,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 422 - Edit
        request: {
            membershipId: 11122212
        },
        response: {
            data: {
                membershipId: 11122212,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122212,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122212,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122212,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 422 - Edit
        // AP Verify bug 130299 nextDebitDate = datePaidTo, currentPaymentMethod: 'Direct Debit'
        request: {
            membershipId: 11122213
        },
        response: {
            data: {
                membershipId: 11122213,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122213,
                    datePaidTo: '2017-11-01T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2017-11-01T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122213,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122213,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 422 - Edit
        request: {
            membershipId: 11122214
        },
        response: {
            data: {
                membershipId: 11122214,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122214,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122214,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122214,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 422 - Edit
        request: {
            membershipId: 11122215
        },
        response: {
            data: {
                membershipId: 11122215,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122215,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122215,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122215,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 500 - Confirm
        request: {
            membershipId: 11122216
        },
        response: {
            data: {
                membershipId: 11122216,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122216,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122216,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122216,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 422 - Confirm
        request: {
            membershipId: 11122217
        },
        response: {
            data: {
                membershipId: 11122217,
                contributor: "John Dascal",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122217,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122217,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122217,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 422 - Confirm
        request: {
            membershipId: 11122218
        },
        response: {
            data: {
                membershipId: 11122218,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122218,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122218,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Quan Ly - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122218,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 422 - Confirm
        request: {
            membershipId: 11122219
        },
        response: {
            data: {
                membershipId: 11122219,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122219,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122219,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Quan Ly - 123456 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122219,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 422 - Confirm
        request: {
            membershipId: 11122220
        },
        response: {
            data: {
                membershipId: 11122220,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122220,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122220,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122220,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 400 - edit
        request: {
            membershipId: 11122221
        },
        response: {
            data: {
                membershipId: 11122221,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122221,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122221,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122221,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 404 - edit
        request: {
            membershipId: 11122222
        },
        response: {
            data: {
                membershipId: 11122222,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122222,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122222,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122222,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 400 - confirm
        request: {
            membershipId: 11122223
        },
        response: {
            data: {
                membershipId: 11122223,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122223,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122223,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122223,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //Error message 404 - confirm
        request: {
            membershipId: 11122224
        },
        response: {
            data: {
                membershipId: 11122224,
                contributor: "John Dascal", // UC100
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 11122224,
                    datePaidTo: '2014-10-05T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.49,
                    ongoingDirectdebit: 38.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Kurt Dascal - 123456 - 0000123540",
                    catchupDays: 185,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11122224,
                    datePaidTo: "2017-09-15T00:00:00.000Z",
                    newDatePaidTo: "2017-01-15T00:00:00.000Z",
                    rateDate: "2017-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12400,
                    period: 8,
                    periodType: "Days",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Maya - 947715 - 4124235346",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1100,
                        "lhcPercent": 33.76,
                        "discountAmount": 540,
                        "discountPercent": 24.6666,
                        "baseAmount": 1240,
                        "gst": 4450,
                        "netAmount": 22000
                    },
                    _links: {}
                },

                // UC100
                refundPaymentInfo: {
                    membershipId: 11122224,
                    datePaidTo: "2017-07-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA7878787785545875 - HUYNH VAN THAO This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },

                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z", // UC100
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },

                // UC100
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Thuy T Pham",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Abel J Michael - 123456 - 7777777777",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST047
    {
        request: {
            membershipId: 170390
        },
        response: {
            data: {
                membershipId: 170390,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170390,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170390,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "",
                    paymentDetails: "",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170390,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST048
    {
        request: {
            membershipId: 170391
        },
        response: {
            data: {
                membershipId: 170391,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170391,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170391,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170391,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST049
    {
        request: {
            membershipId: 170392
        },
        response: {
            data: {
                membershipId: 170392,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170392,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170392,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170392,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST050
    {
        request: {
            membershipId: 170393
        },
        response: {
            data: {
                membershipId: 170393,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170393,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170393,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170393,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST051
    {
        request: {
            membershipId: 170394
        },
        response: {
            data: {
                membershipId: 170394,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170394,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170394,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170394,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST052
    {
        request: {
            membershipId: 170395
        },
        response: {
            data: {
                membershipId: 170395,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170395,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170395,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170395,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST065
    {
        request: {
            membershipId: 170396
        },
        response: {
            data: {
                membershipId: 170396,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170396,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170396,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170396,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST078
    {
        request: {
            membershipId: 170397
        },
        response: {
            data: {
                membershipId: 170397,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170397,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170397,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170397,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST081
    {
        request: {
            membershipId: 170398
        },
        response: {
            data: {
                membershipId: 170398,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170398,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170398,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170398,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST082
    {
        request: {
            membershipId: 170399
        },
        response: {
            data: {
                membershipId: 170399,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170399,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170399,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Nguyen9 N Le - 123456 - 87789001",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170399,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0098Cv34_AC11_ST085
    {
        request: {
            membershipId: 170400
        },
        response: {
            data: {
                membershipId: 170400,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 170400,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 170400,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 170400,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 140469: UC0098Cv34_AC17_ST001
        // mbs# 1

        request: {
            membershipId: 35790009
        },
        response: {
            data: {
                membershipId: 35790009,
                contributor: "Brandon",
                customerType: "OSHC",
                directDebitDetail: { // this data is used for Direct Debit
                    membershipId: 35790009,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2016-12-30T00:00:00.000Z", // Reactivation Date is less than current date (for not display popup alert)
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 1.014,
                        "rebatePercent": 1.0014,
                        "lhcAmount": 1.014,
                        "lhcPercent": 1.4,
                        "discountAmount": 1.014,
                        "discountPercent": 1.014,
                        "baseAmount": 1999.014,
                        "gst": 1999.014,
                        "netAmount": 1999.014
                    },
                    deactivatedDate: "2018-10-30T00:00:00.000Z", // Deactivated Date is greater than current day (for not display popup alert)
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 35790009,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 1.014,
                        "rebatePercent": 1.0014,
                        "lhcAmount": 1.014,
                        "lhcPercent": 1.4,
                        "discountAmount": 1.014,
                        "discountPercent": 1.014,
                        "baseAmount": 1999.014,
                        "gst": 1999.014,
                        "netAmount": 1999.014
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 35790009,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 1.014,
                        "rebatePercent": 1.0014,
                        "lhcAmount": 1.014,
                        "lhcPercent": 1.4,
                        "discountAmount": 1.014,
                        "discountPercent": 1.014,
                        "baseAmount": 1999.014,
                        "gst": 1999.014,
                        "netAmount": 1999.014
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 140469: UC0098Cv34_AC17_ST001
        // mbs# 2

        request: {
            membershipId: 14782589
        },
        response: {
            data: {
                membershipId: 14782589,
                contributor: "Cersei",
                customerType: "OSHC",
                directDebitDetail: { // this data is used for Direct Debit
                    membershipId: 14782589,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2016-12-30T00:00:00.000Z", // Reactivation Date is less than current date (for not display popup alert)
                    paymentCardId: 1,
                    rateSummary: {

                        "rebateAmount": 1.2,
                        "rebatePercent": 1.22,
                        "lhcAmount": 1.2,
                        "lhcPercent": 1,
                        "discountAmount": 1.2,
                        "discountPercent": 1.20,
                        "baseAmount": 2999.8,
                        "gst": 2999.8,
                        "netAmount": 2999.8
                    },
                    deactivatedDate: "2018-10-30T00:00:00.000Z", // Deactivated Date is greater than current day (for not display popup alert)
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 14782589,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 1.2,
                        "rebatePercent": 1.22,
                        "lhcAmount": 1.2,
                        "lhcPercent": 1,
                        "discountAmount": 1.2,
                        "discountPercent": 1.20,
                        "baseAmount": 2999.8,
                        "gst": 2999.8,
                        "netAmount": 2999.8
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 14782589,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 1.2,
                        "rebatePercent": 1.22,
                        "lhcAmount": 1.2,
                        "lhcPercent": 1,
                        "discountAmount": 1.2,
                        "discountPercent": 1.20,
                        "baseAmount": 2999.8,
                        "gst": 2999.8,
                        "netAmount": 2999.8
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },

    {   //  Test Case 140469: UC0098Cv34_AC17_ST001
        // mbs# 3

        request: {
            membershipId: 36984709
        },
        response: {
            data: {
                membershipId: 36984709,
                contributor: "Cersei",
                customerType: "OSHC",
                directDebitDetail: { // this data is used for Direct Debit
                    membershipId: 14782589,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2016-12-30T00:00:00.000Z", // Reactivation Date is less than current date (for not display popup alert)
                    paymentCardId: 1,
                    rateSummary: {

                        "rebateAmount": 3333,
                        "rebatePercent": 3,
                        "lhcAmount": 33333,
                        "lhcPercent": 3.4,
                        "discountAmount": 333333,
                        "discountPercent": 3.014,
                        "baseAmount": 3999999.014,
                        "gst": 3999999.014,
                        "netAmount": 3999999.014
                    },
                    deactivatedDate: "2018-10-30T00:00:00.000Z", // Deactivated Date is greater than current day (for not display popup alert)
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 36984709,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 3333,
                        "rebatePercent": 3,
                        "lhcAmount": 33333,
                        "lhcPercent": 3.4,
                        "discountAmount": 333333,
                        "discountPercent": 3.014,
                        "baseAmount": 3999999.014,
                        "gst": 3999999.014,
                        "netAmount": 3999999.014
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 36984709,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 3333,
                        "rebatePercent": 3,
                        "lhcAmount": 33333,
                        "lhcPercent": 3.4,
                        "discountAmount": 333333,
                        "discountPercent": 3.014,
                        "baseAmount": 3999999.014,
                        "gst": 3999999.014,
                        "netAmount": 3999999.014
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 140469: UC0098Cv34_AC17_ST001
        // mbs# 4

        request: {
            membershipId: 7722456
        },
        response: {
            data: {
                membershipId: 7722456,
                contributor: "Lannister",
                customerType: "OSHC",
                directDebitDetail: { // this data is used for Direct Debit
                    membershipId: 14782589,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2016-12-30T00:00:00.000Z", // Reactivation Date is less than current date (for not display popup alert)
                    paymentCardId: 1,
                    rateSummary: {

                        "rebateAmount": 444,
                        "rebatePercent": 40.0015,
                        "lhcAmount": 4444,
                        "lhcPercent": 40.5,
                        "discountAmount": 4444,
                        "discountPercent": 40,
                        "baseAmount": 4999999.015,
                        "gst": 4999999.015,
                        "netAmount": 4999999.015
                    },
                    deactivatedDate: "2018-10-30T00:00:00.000Z", // Deactivated Date is greater than current day (for not display popup alert)
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 7722456,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 444,
                        "rebatePercent": 40.0015,
                        "lhcAmount": 4444,
                        "lhcPercent": 40.5,
                        "discountAmount": 4444,
                        "discountPercent": 40,
                        "baseAmount": 4999999.015,
                        "gst": 4999999.015,
                        "netAmount": 4999999.015
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 7722456,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 444,
                        "rebatePercent": 40.0015,
                        "lhcAmount": 4444,
                        "lhcPercent": 40.5,
                        "discountAmount": 4444,
                        "discountPercent": 40,
                        "baseAmount": 4999999.015,
                        "gst": 4999999.015,
                        "netAmount": 4999999.015
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },

    {   //  Test Case 140484: UC0098Cv34_AC17_ST002
        // mbs# 5

        request: {
            membershipId: 6652123
        },
        response: {
            data: {
                membershipId: 6652123,
                contributor: "Brandon",
                customerType: "OSHC",
                directDebitDetail: { // this data is used for Direct Debit
                    membershipId: 6652123,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2016-12-30T00:00:00.000Z", // Reactivation Date is less than current date (for not display popup alert)
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": -5.014,
                        "rebatePercent": -5.0014,
                        "lhcAmount": -5.014,
                        "lhcPercent": -5.4,
                        "discountAmount": -5.014,
                        "discountPercent": -5.014,
                        "baseAmount": -5555.014,
                        "gst": -5555.014,
                        "netAmount": -5555.014
                    },
                    deactivatedDate: "2018-10-30T00:00:00.000Z", // Deactivated Date is greater than current day (for not display popup alert)
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 6652123,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": -5.014,
                        "rebatePercent": -5.0014,
                        "lhcAmount": -5.014,
                        "lhcPercent": -5.4,
                        "discountAmount": -5.014,
                        "discountPercent": -5.014,
                        "baseAmount": -5555.014,
                        "gst": -5555.014,
                        "netAmount": -5555.014
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 6652123,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": -5.014,
                        "rebatePercent": -5.0014,
                        "lhcAmount": -5.014,
                        "lhcPercent": -5.4,
                        "discountAmount": -5.014,
                        "discountPercent": -5.014,
                        "baseAmount": -5555.014,
                        "gst": -5555.014,
                        "netAmount": -5555.014
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 140484: UC0098Cv34_AC17_ST002
        // mbs# 6

        request: {
            membershipId: 6785200
        },
        response: {
            data: {
                membershipId: 6785200,
                contributor: "Cersei",
                customerType: "OSHC",
                directDebitDetail: { // this data is used for Direct Debit
                    membershipId: 6785200,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2016-12-30T00:00:00.000Z", // Reactivation Date is less than current date (for not display popup alert)
                    paymentCardId: 1,
                    rateSummary: {

                        "rebateAmount": -6.2,
                        "rebatePercent": -6.22,
                        "lhcAmount": -6.2,
                        "lhcPercent": -6,
                        "discountAmount": -6.2,
                        "discountPercent": -6.20,
                        "baseAmount": -6666.8,
                        "gst": -6666.8,
                        "netAmount": -6666.8
                    },
                    deactivatedDate: "2018-10-30T00:00:00.000Z", // Deactivated Date is greater than current day (for not display popup alert)
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 6785200,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": -6.2,
                        "rebatePercent": -6.22,
                        "lhcAmount": -6.2,
                        "lhcPercent": -6,
                        "discountAmount": -6.2,
                        "discountPercent": -6.20,
                        "baseAmount": -6666.8,
                        "gst": -6666.8,
                        "netAmount": -6666.8
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 6785200,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": -6.2,
                        "rebatePercent": -6.22,
                        "lhcAmount": -6.2,
                        "lhcPercent": -6,
                        "discountAmount": -6.2,
                        "discountPercent": -6.20,
                        "baseAmount": -6666.8,
                        "gst": -6666.8,
                        "netAmount": -6666.8
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },

    {   //  Test Case 140484: UC0098Cv34_AC17_ST002
        // mbs# 7

        request: {
            membershipId: 5287469
        },
        response: {
            data: {
                membershipId: 5287469,
                contributor: "Cersei",
                customerType: "OSHC",
                directDebitDetail: { // this data is used for Direct Debit
                    membershipId: 5287469,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2016-12-30T00:00:00.000Z", // Reactivation Date is less than current date (for not display popup alert)
                    paymentCardId: 1,
                    rateSummary: {

                        "rebateAmount": -7777,
                        "rebatePercent": -7,
                        "lhcAmount": -7777,
                        "lhcPercent": -7.4,
                        "discountAmount": -777777,
                        "discountPercent": -7.014,
                        "baseAmount": -7777777.014,
                        "gst": -777777.014,
                        "netAmount": -777777.014
                    },
                    deactivatedDate: "2018-10-30T00:00:00.000Z", // Deactivated Date is greater than current day (for not display popup alert)
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 5287469,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": -7777,
                        "rebatePercent": -7,
                        "lhcAmount": -7777,
                        "lhcPercent": -7.4,
                        "discountAmount": -777777,
                        "discountPercent": -7.014,
                        "baseAmount": -7777777.014,
                        "gst": -777777.014,
                        "netAmount": -777777.014
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 5287469,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": -7777,
                        "rebatePercent": -7,
                        "lhcAmount": -7777,
                        "lhcPercent": -7.4,
                        "discountAmount": -777777,
                        "discountPercent": -7.014,
                        "baseAmount": -7777777.014,
                        "gst": -777777.014,
                        "netAmount": -777777.014
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  Test Case 140484: UC0098Cv34_AC17_ST002
        // mbs# 8

        request: {
            membershipId: 55868699
        },
        response: {
            data: {
                membershipId: 55868699,
                contributor: "Lannister",
                customerType: "OSHC",
                directDebitDetail: { // this data is used for Direct Debit
                    membershipId: 55868699,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2016-12-30T00:00:00.000Z", // Reactivation Date is less than current date (for not display popup alert)
                    paymentCardId: 1,
                    rateSummary: {

                        "rebateAmount": -888,
                        "rebatePercent": -80.0018,
                        "lhcAmount": -8888,
                        "lhcPercent": -80.5,
                        "discountAmount": -8888,
                        "discountPercent": -80,
                        "baseAmount": -8888888.018,
                        "gst": -8888888.018,
                        "netAmount": -8888888.018
                    },
                    deactivatedDate: "2018-10-30T00:00:00.000Z", // Deactivated Date is greater than current day (for not display popup alert)
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 55868699,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": -888,
                        "rebatePercent": -80.0015,
                        "lhcAmount": -8888,
                        "lhcPercent": -80.5,
                        "discountAmount": -8888,
                        "discountPercent": -80,
                        "baseAmount": -8888888.015,
                        "gst": -8888888.015,
                        "netAmount": -8888888.015
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 55868699,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": -888,
                        "rebatePercent": -80.0015,
                        "lhcAmount": -8888,
                        "lhcPercent": -80.5,
                        "discountAmount": -8888,
                        "discountPercent": -80,
                        "baseAmount": -8888888.015,
                        "gst": -8888888.015,
                        "netAmount": -8888888.015
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    //Nguyen
    {
        request: {
            membershipId: 270390
        },
        response: {
            data: {
                membershipId: 270390,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 270390,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jame1 N Le - 123456 - 44556699",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 270390,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 270390,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jame1 N Le - 123456 - 44556699", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    //Nguyen
    {
        request: {
            membershipId: 270391
        },
        response: {
            data: {
                membershipId: 270391,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 270391,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Bank Account",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 270391,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 270391,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // Data for UC0101Cv34_AC28: 140025 UC0101Cv34_AC28_ST003
    {
        request: {
            membershipId: 311111
        },
        response: {
            data: {
                membershipId: 311111,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 311111,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Cash",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 311111,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2017-04-01T00:00:00.000Z",
                    corporateGroup: "DXC",
                    premiumAmount: 10,
                    period: 10,
                    periodType: "Years",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Payment Card",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 10,
                        "rebatePercent": 10,
                        "lhcAmount": 10,
                        "lhcPercent": 10,
                        "discountAmount": 10,
                        "discountPercent": 10,
                        "baseAmount": 10,
                        "gst": 10,
                        "netAmount": 10
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 311111,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {// Chon data; UC0101
        request: {
            membershipId: 511111
        },
        response: {
            data: {
                membershipId: 511111,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 511111,
                    datePaidTo: '2017-09-23T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam",
                    frequency: "Monthly",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3855.55,
                    paymentType: "Cash",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 90,
                    catchUpAmount: 1234.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 511111,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 10,
                    period: 10,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Payment Card",
                    paymentDetails: "Jonh - 554888******4576",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 20,
                        "rebatePercent": 20,
                        "lhcAmount": 20,
                        "lhcPercent": 20,
                        "discountAmount": 20,
                        "discountPercent": 20,
                        "baseAmount": 20,
                        "gst": 20,
                        "netAmount": 20
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 511111,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC",
                    paymentDetails: "Jaric Waston - 123456 - 84656468", // For BAcc and Person is Alexey C Munji 203918467
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {// UC0100Cv3v4_AC02_ST001 updated due to WDD updated
        request: {
            membershipId: 320021
        },
        response: {
            data: {
                membershipId: 320021,
                contributor: "Cristino J Marrion",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320021,
                    datePaidTo: '2017-09-16T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ABC",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 100,
                    ongoingDirectdebit: 120,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X1 Marrion - 123456 - 999888777",
                    catchupDays: 185,
                    catchUpAmount: 14.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320021,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X Marrion - 123456 - 999888777",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320021,
                    datePaidTo: "2017-11-20T00:00:00.000Z",
                    newDatePaidTo: "2017-09-16T00:00:00.000Z",
                    corporateGroup: "BUPA78 - Nguyen This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Paang2 K Nguyen - 123456 - 5000211001",
                    adjustedBalance: 101010101,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Bank Account",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 0,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSH",
                    paymentDetails: "Paang2 K Nguyen - 123456 - 5000211001",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST203, ST202, ST201, ST200, ST199, ST198, ST197, ST196, ST189, ST190
        request: {
            membershipId: 98111114
        },
        response: {
            data: {
                membershipId: 98111114,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 98111114,
                    datePaidTo: '2017-09-26T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "abc",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 1493.43,
                    ongoingDirectdebit: 3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 1454.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 98111114,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 98111114,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST194, ST195
        request: {
            membershipId: 11211113
        },
        response: {
            data: {
                membershipId: 11211113,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 11211113,
                    datePaidTo: '2017-09-26T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "abc",
                    nextDebitDate: '2018-05-15T00:00:00.000Z',
                    nextDirectDebitAmount: 149.43,
                    ongoingDirectdebit: 384.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 10,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 11211113,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 11211113,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST192
        request: {
            membershipId: 98111115
        },
        response: {
            data: {
                membershipId: 98111115,
                contributor: "Jeric N Weedall",
                customerType: "OSHC",
                directDebitDetail: {
                    membershipId: 98111115,
                    datePaidTo: '2017-09-26T00:00:00.000Z',
                    corporateGroup: "DXC IT Technology Viet Nam 211 Nation Global HCM",
                    frequency: "abc",
                    nextDebitDate: '2018-05-14T00:00:00.000Z',
                    nextDirectDebitAmount: -1493.43,
                    ongoingDirectdebit: -3842.54,
                    paymentType: "Payment Card",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    catchupDays: 85,
                    catchUpAmount: 0,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 98111115,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Cheque",
                    paymentDetails: "Bank Account",
                    paymentStatus: "Pending",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 98111115,
                    datePaidTo: "2016-09-20T00:00:00.000Z",
                    newDatePaidTo: "2017-07-20T00:00:00.000Z",
                    corporateGroup: "BUPA78787875 - International IT Technology",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Bank 5 - 123456 - 111111",
                    adjustedBalance: 1543.646496,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Cash",
                    bankAccount: {
                        accountName: "Jaric Waston",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Jaric Waston",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 1,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSHC Payment",
                    paymentDetails: "Jaric Waston - 123456 - 84656468",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },

    // UC0100Cv3v4_AC14_ST015 updated due to WDD updated
    {
        request: {
            membershipId: 320022
        },
        response: {
            data: {
                membershipId: 320022,
                contributor: "Cristino J Marrion",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320022,
                    datePaidTo: '2017-09-16T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ABC",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 100,
                    ongoingDirectdebit: 120,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X1 Marrion - 123456 - 999888777",
                    catchupDays: 185,
                    catchUpAmount: 14.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320022,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X Marrion - 123456 - 999888777",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320022,
                    datePaidTo: "2017-11-20T00:00:00.000Z",
                    newDatePaidTo: "2017-09-16T00:00:00.000Z",
                    corporateGroup: "BUPA78 - Nguyen This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Paang2 K Nguyen - 123456 - 5000211001",
                    adjustedBalance: 101010101,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 0,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSH",
                    paymentDetails: "Paang2 K Nguyen - 123456 - 5000211001",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    // UC0100Cv3v4_AC14_ST016 updated due to WDD updated
    {
        request: {
            membershipId: 320023
        },
        response: {
            data: {
                membershipId: 320023,
                contributor: "Cristino J Marrion",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320023,
                    datePaidTo: '2017-09-16T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ABC",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 100,
                    ongoingDirectdebit: 120,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X1 Marrion - 123456 - 999888777",
                    catchupDays: 185,
                    catchUpAmount: 14.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320023,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X Marrion - 123456 - 999888777",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320023,
                    datePaidTo: "2017-11-20T00:00:00.000Z",
                    newDatePaidTo: "2017-09-16T00:00:00.000Z",
                    corporateGroup: "BUPA78 - Nguyen This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Bank Account",
                    paymentDetails: "Tera K Nguyen - 123456 - 87772111",
                    adjustedBalance: 101010101,
                    paymentCardId: 1,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 3,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSH",
                    paymentDetails: "Tera K Nguyen - 123456 - 87772111",
                    isWithinDishonourPeriod: false
                }
            }
        }
    },
    // UC0100Cv3v4_AC14_ST017 updated due to WDD updated
    {
        request: {
            membershipId: 320024
        },
        response: {
            data: {
                membershipId: 320024,
                contributor: "Cristino J Marrion",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320024,
                    datePaidTo: '2017-09-16T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ABC",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 100,
                    ongoingDirectdebit: 120,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X1 Marrion - 123456 - 999888777",
                    catchupDays: 185,
                    catchUpAmount: 14.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320024,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X Marrion - 123456 - 999888777",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320024,
                    datePaidTo: "2017-11-20T00:00:00.000Z",
                    newDatePaidTo: "2017-09-16T00:00:00.000Z",
                    corporateGroup: "BUPA78 - Nguyen This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Tera K Nguyen - 123456 - 87772111",
                    adjustedBalance: 101010101,
                    paymentCardId: 0,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 0,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSH",
                    paymentDetails: "Tera K Nguyen - 123456 - 87772111",
                    isWithinDishonourPeriod: true
                }
            }
        }
    },
    // UC0100Cv3v4_AC14_ST018 updated due to WDD updated
    {
        request: {
            membershipId: 320025
        },
        response: {
            data: {
                membershipId: 320025,
                contributor: "Cristino J Marrion",
                customerType: "Gold",
                directDebitDetail: {
                    membershipId: 320025,
                    datePaidTo: '2017-09-16T00:00:00.000Z',
                    corporateGroup: "",
                    frequency: "ABC",
                    nextDebitDate: '2018-05-13T00:00:00.000Z',
                    nextDirectDebitAmount: 100,
                    ongoingDirectdebit: 120,
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X1 Marrion - 123456 - 999888777",
                    catchupDays: 185,
                    catchUpAmount: 14.9,
                    paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                    deactivatedReason: "Too late",
                    reactivationDate: "2017-10-14T00:00:00.000Z",
                    paymentCardId: 1,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    deactivatedDate: "2016-09-15T00:00:00.000Z",
                    _links: {}
                },
                pendingSinglePayment: {
                    membershipId: 320025,
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    newDatePaidTo: "2016-09-15T00:00:00.000Z",
                    rateDate: "2016-09-15T00:00:00.000Z",
                    corporateGroup: "csc",
                    premiumAmount: 12154.6,
                    period: 17,
                    periodType: "Weeks",
                    paymentDate: "2016-09-15T00:00:00.000Z",
                    paymentType: "Bank Account",
                    paymentDetails: "Alexis X Marrion - 123456 - 999888777",
                    paymentStatus: "pending",
                    paymentCardId: 2,
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    },
                    _links: {}
                },
                refundPaymentInfo: {
                    membershipId: 320025,
                    datePaidTo: "2017-11-20T00:00:00.000Z",
                    newDatePaidTo: "2017-09-16T00:00:00.000Z",
                    corporateGroup: "BUPA78 - Nguyen This field will be truncated if the length is longer than field width",
                    refundAmount: 1000,
                    paymentType: "Payment Card",
                    paymentDetails: "Tera K Nguyen - 123456 - 87772111",
                    adjustedBalance: 101010101,
                    paymentCardId: 3,
                    _links: {}
                },
                arrearsInfo: {
                    amount: 10,
                    days: 11
                },
                recentPaymentOnDishonourPeriod: true,
                latestClaimServiceDate: "2017-07-20T00:00:00.000Z",
                currentPaymentMethod: 'Direct Debit',
                paymentRenewalInfo: {
                    amount: 0,
                    frequency: "Monthly",
                    datePaidTo: "2016-09-15T00:00:00.000Z",
                    rateSummary: {
                        "rebateAmount": 111,
                        "rebatePercent": 24.2225,
                        "lhcAmount": 1124,
                        "lhcPercent": 33.76,
                        "discountAmount": 445,
                        "discountPercent": 24.6666,
                        "baseAmount": 11111111,
                        "gst": 44444,
                        "netAmount": 22222223
                    }
                },
                lastProcessedPaymentDetail: {
                    paymentType: "Payment Card",
                    bankAccount: {
                        accountName: "Rafid J Satour",
                        accountNumber: "9348646464",
                        bsbNumber: "123456"
                    },
                    paymentCard: {
                        cardBrandName: "VISA",
                        cardHolderName: "Thao Huynh",
                        personPaymentCardId: 1123,
                        maskedCardNumber: "55555*****6666",
                        expiryMonth: "06",
                        expiryYear: "17",
                        paymentCardId: 0,
                        modifiedDate: "2016-09-15T00:00:00.000Z"
                    },
                    paymentMethod: "OSH",
                    paymentDetails: "Tera K Nguyen - 123456 - 87772111",
                    isWithinDishonourPeriod: false
                }
            }
        }
    }
];
