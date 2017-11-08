export default [
    {
        request: { membershipId: 21026018 },
        response: {
            data: {
                membershipId: 21026018,
                datePaidTo: '2014-10-05T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 77.43,
                ongoingDirectdebit: 676756.54,
                paymentType: "Payment Card",
                paymentDetails: "4545456677 - 123456 - 123456789",
                catchupDays: 454,
                catchUpAmount: 56776.9,
                paymentCardExpiry: "2016-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: 11,
                paymentCardId: 0,
                rateSummary: {
                "rebateAmount": 34,
                "rebatePercent": 2334.2225,
                "lhcAmount": 1124.34,
                "lhcPercent": 3344.76,
                "discountAmount": 44.45,
                "discountPercent": 234.6666,
                "baseAmount": 67.4,
                "gst": 346,
                "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 922008,
            body: {frequency: "Monthly", startDate: "2017-09-29T00:00:00.000Z"}
        },
        response: {
            status: 200,
            data: {
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
                premiumAmount: 303,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2016-09-15T00:00:00.000Z",
                paymentType: "Cheque",
                paymentDetails: "Bank Account",
                rateSummary: {
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
            }
        }
    },

// Data for QC

    {   //  Test Case 145700: UC0098Cv34_AC08_ST008
        request: {
            membershipId: 2344326,
            body: {
                frequency: "Six Monthly"
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
    {   //  Test Case 145701: UC0098Cv34_AC08_ST009
        request: {
            membershipId: 2344327,
            body: {
                frequency: "Quarterly"
            }
        },
        response: {
            status: 404,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {   //  Test Case 145702: UC0098Cv34_AC08_ST010
        request: {
            membershipId: 2344327,
            body: {
                startDate: '2017-12-23T00:00:00.000Z'
            }
        },
        response: {
            status: 500,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {   //  Test Case 145707: UC0098Cv34_AC08_ST015
        request: {
            membershipId: 3455432,
            body: {
                frequency: "Monthly"
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
    {   //  Test Case 145708: UC0098Cv34_AC08_ST016
        request: {
            membershipId: 3455433,
            body: {
                frequency: "Fortnightly"
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
    {   //  Test Case 145708: UC0098Cv34_AC08_ST016
        request: {
            membershipId: 3455433,
            body: {
                startDate: '2017-11-20T00:00:00.000Z'
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
    {   //  Test Case 145710: UC0098Cv34_AC08_ST018
        request: {
            membershipId: 3455433,
            body: {
                frequency: "Six Monthly"
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
    {   // UC0098Cv34 update Frequency + Startdate in Request Body _ Bug UAT 151840 _ no alert
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -451.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },

    {   // UC0098Cv34 change Next DD Date
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Monthly",
                startDate: '2017-11-04T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 1085.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -521.46,
                    "gst": 8421,
                    "netAmount": 5456
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },

    {   // Get Ongoing Premium on Manage Payment stage 264
        request: {
            membershipId: 24899015,
            body: {
                frequency: "Yearly",
                startDate: '2017-11-06T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 24899015,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Yearly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": 1251.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Get Ongoing Premium on Manage Payment stage 264
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Yearly",
                startDate: '2017-11-06T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -451.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Get Ongoing Premium on Manage Payment stage 264
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Yearly",
                startDate: '2017-11-04T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Yearly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -766.92789491
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // UC0098Cv34 update Frequency + Startdate in Request Body _ Bug UAT 151840 _ has alert
        request: {
            membershipId: 5262274,
            body: {
                frequency: "Fortnightly",
                startDate: '2018-01-03T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 5262274,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -451.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134740: UC0098Cv34_AC01_ST002 Step 6
        request: {
            membershipId: 16686701,
            body: {
                startDate: '2017-09-26T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Quarterly",
                nextDebitDate: '2017-09-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 38.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 44.45,
                    "discountPercent": 234.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // UC0098Cv34_AC02
        request: {
            membershipId: 16686701,
            body: {
                startDate: '2017-09-24T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Quarterly",
                nextDebitDate: '2017-09-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 381.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 341,
                    "rebatePercent": 23341.2225,
                    "lhcAmount": 11241.34,
                    "lhcPercent": 33441.76,
                    "discountAmount": 441.45,
                    "discountPercent": 2341.6666,
                    "baseAmount": 671.4,
                    "gst": 3461,
                    "netAmount": 34561.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // UC0098Cv34_AC02
        request: {
            membershipId: 16686701,
            body: {
                startDate: '2017-10-24T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Quarterly",
                nextDebitDate: '2017-09-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 381.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 41,
                    "rebatePercent": 3341.2225,
                    "lhcAmount": 1241.34,
                    "lhcPercent": 3441.76,
                    "discountAmount": 41.45,
                    "discountPercent": 341.6666,
                    "baseAmount": 71.4,
                    "gst": 461,
                    "netAmount": 4561.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134753: UC0098Cv34_AC03_ST002 Step 4
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Weekly"
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 453.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 551,
                    "rebatePercent": 24.2225,
                    "lhcAmount": 5524.34,
                    "lhcPercent": 34.76,
                    "discountAmount": 5544.45,
                    "discountPercent": 24.6666,
                    "baseAmount": -3567.4,
                    "gst": 3460,
                    "netAmount": -456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case none
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Monthly"
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2017-10-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // UC0098Cv34_AC02
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Six Monthly"
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 45.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 552,
                    "rebatePercent": 22.2225,
                    "lhcAmount": 5522.34,
                    "lhcPercent": 32.76,
                    "discountAmount": 5542.45,
                    "discountPercent": 22.6666,
                    "baseAmount": -3562.4,
                    "gst": 3462,
                    "netAmount": -452.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // UC0098Cv34_AC02
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Fortnightly"
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // UC0098Cv34_AC02
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Quarterly"
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -451.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    /*
    {   // UC0098Cv34_AC02
        request: {
            membershipId: 16686701,
            body: {
                frequency: "Yearly"
            }
        },
        response: {
            data: {
                membershipId: 16686701,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Yearly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 51,
                    "rebatePercent": 1.2225,
                    "lhcAmount": 521.34,
                    "lhcPercent": 1.76,
                    "discountAmount": 51.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -351.4,
                    "gst": 321,
                    "netAmount": -51.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },*/
    {   // Test Case 134743: UC0098Cv34_AC01_ST005 Load Rate Summary for Fre=null
        //  Verify bug SIT 158229
        request: {
            membershipId: 45635431,
            body: {
                frequency: "Monthly",
                startDate: '2017-10-30T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 45635431,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Monthly",
                nextDebitDate: '2017-09-22T00:00:00.000Z',
                nextDirectDebitAmount: null,
                ongoingDirectdebit: null,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: null,
                catchUpAmount: null,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134747: UC0098Cv34_AC01_ST007
        request: {
            membershipId: 16689009,
            body: {
                frequency: "Monthly",
                startDate: '2017-09-23T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16689009,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Monthly",
                nextDebitDate: '2017-09-22T00:00:00.000Z',
                nextDirectDebitAmount: 193.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134772: UC0098Cv34_AC10_ST002
        request: {
            membershipId: 16689007,
            body: {
                startDate: '2017-10-10T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 16689007,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Monthly",
                nextDebitDate: '2017-09-22T00:00:00.000Z',
                nextDirectDebitAmount: 193.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: -3842.54,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },

    {   // Test Case 134743: UC0098Cv34_AC01_ST001 Load Rate Summary for Fre=null
         //  Verify bug SIT 158229
        request: {
            membershipId: 45635432,
            body: {
                frequency: "Monthly",
                startDate: '2017-10-30T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 45635432,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Monthly",
                nextDebitDate: '2017-09-22T00:00:00.000Z',
                nextDirectDebitAmount: 193.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134741: UC0098Cv34_AC01_ST003 Step 4
        request: {
            membershipId: 5262274,
            body: {
                frequency: "Yearly"
            }
        },
        response: {
            data: {
                membershipId: 5262274,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134792: UC0098Cv34_AC11_ST011 Step 4
        request: {
            membershipId: 922002,
            body: {
                frequency: "Fortnightly"
            }
        },
        response: {
            data: {
                membershipId: 922002,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // 134783: UC0098Cv34_AC11_ST002 Step 5;        134796: UC0098Cv34_AC11_ST029 Step 4
        request: {
            membershipId: 922004,
            body: {
                frequency: "Six Monthly"
            }
        },
        response: {
            data: {
                membershipId: 922004,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 9041.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 51,
                    "rebatePercent": 1.2225,
                    "lhcAmount": 521.34,
                    "lhcPercent": 1.76,
                    "discountAmount": 51.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -351.4,
                    "gst": 321,
                    "netAmount": -51.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134796: UC0098Cv34_AC11_ST029 Step 5
        request: {
            membershipId: 922004,
            body: {
                startDate: '2018-01-01T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922004,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 9041.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 79712.46,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 51,
                    "rebatePercent": 1.2225,
                    "lhcAmount": 521.34,
                    "lhcPercent": 1.76,
                    "discountAmount": 51.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -351.4,
                    "gst": 321,
                    "netAmount": -51.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134790: UC0098Cv34_AC11_ST009 Step 4
        request: {
            membershipId: 922006,
            body: {
                frequency: "Quarterly"
            }
        },
        response: {
            data: {
                membershipId: 922006,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 9041.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 51,
                    "rebatePercent": 1.2225,
                    "lhcAmount": 521.34,
                    "lhcPercent": 1.76,
                    "discountAmount": 51.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -351.4,
                    "gst": 321,
                    "netAmount": -51.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134790: UC0098Cv34_AC11_ST009 Step 5
        request: {
            membershipId: 922006,
            body: {
                startDate: '2017-09-25T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922006,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 9041.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 51,
                    "rebatePercent": 1.2225,
                    "lhcAmount": 521.34,
                    "lhcPercent": 1.76,
                    "discountAmount": 51.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -351.4,
                    "gst": 321,
                    "netAmount": -51.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // 134786: UC0098Cv34_AC11_ST005 Step 4
        request: {
            membershipId: 922007,
            body: {
                frequency: "Six Monthly"
            }
        },
        response: {
            data: {
                membershipId: 922007,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 4357.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 51,
                    "rebatePercent": 1.2225,
                    "lhcAmount": 521.34,
                    "lhcPercent": 1.76,
                    "discountAmount": 51.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -351.4,
                    "gst": 321,
                    "netAmount": -51.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // 134787: UC0098Cv34_AC11_ST006 Step 4
        request: {
            membershipId: 922007,
            body: {
                frequency: "Fortnightly"
            }
        },
        response: {
            data: {
                membershipId: 922007,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Anh Phan
        request: {
            membershipId: 922007,
            body: {
                startDate: '2017-10-29T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922007,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134748: UC0098Cv34_AC02_ST001 Step 4
        request: {
            membershipId: 20265534,
            body: {
                frequency: "Weekly"
            }
        },
        response: {
            data: {
                membershipId: 20265534,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Weekly",
                nextDebitDate: '2018-12-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: -0.09,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // UC0098Cv34_AC02_ST001
        request: {
            membershipId: 20265534,
            body: {
                frequency: "Fortnightly"
            }
        },
        response: {
            data: {
                membershipId: 20265534,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2018-12-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: -0.09,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 663.15648,
                    "rebatePercent": 46.25,
                    "lhcAmount": -525.34,
                    "lhcPercent": 35.01,
                    "discountAmount": 855.45,
                    "discountPercent": 73.660,
                    "baseAmount": 568.4,
                    "gst": -461.153,
                    "netAmount": -753545.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // UC0098Cv34_AC02_ST001
        request: {
            membershipId: 20265534,
            body: {
                frequency: "Monthly"
            }
        },
        response: {
            data: {
                membershipId: 20265534,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Monthly",
                nextDebitDate: '2018-12-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: -0.09,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 63.15648,
                    "rebatePercent": 6.25,
                    "lhcAmount": -55.34,
                    "lhcPercent": 5.01,
                    "discountAmount": 85.45,
                    "discountPercent": 7.660,
                    "baseAmount": 58.4,
                    "gst": -41.153,
                    "netAmount": -75355.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // UC0098Cv34_AC02_ST001
        request: {
            membershipId: 20265534,
            body: {
                frequency: "Quarterly"
            }
        },
        response: {
            data: {
                membershipId: 20265534,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-12-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: -0.09,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 630.15648,
                    "rebatePercent": 60.25,
                    "lhcAmount": -550.34,
                    "lhcPercent": 50.01,
                    "discountAmount": 850.45,
                    "discountPercent": 70.660,
                    "baseAmount": 508.4,
                    "gst": -410.153,
                    "netAmount": -753550.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // UC0098Cv34_AC02_ST001
        request: {
            membershipId: 20265534,
            body: {
                frequency: "Yearly"
            }
        },
        response: {
            data: {
                membershipId: 20265534,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Yearly",
                nextDebitDate: '2018-12-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: -0.09,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 1630.15648,
                    "rebatePercent": 160.25,
                    "lhcAmount": -1550.34,
                    "lhcPercent": 150.01,
                    "discountAmount": 1850.45,
                    "discountPercent": 170.660,
                    "baseAmount": 1508.4,
                    "gst": -1410.153,
                    "netAmount": -1753550.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134782: UC0098Cv34_AC11_ST001 Step 4
        request: {
            membershipId: 20265534,
            body: {
                frequency: "Six Monthly"
            }
        },
        response: {
            data: {
                membershipId: 20265534,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-12-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: -0.09,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134782: UC0098Cv34_AC11_ST001 Step 4
        request: {
            membershipId: 20265534,
            body: {
                startDate: '2017-11-23T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 20265534,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-12-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: -0.09,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134862: UC0098Cv34_AC11_ST139 Step 5
        request: {
            membershipId: 922009,
            body: {
                frequency: "Fortnightly"
            }
        },
        response: {
            data: {
                membershipId: 922009,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 89765.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 44.45,
                    "discountPercent": 234.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134862: UC0098Cv34_AC11_ST139 Step 6
        request: {
            membershipId: 922009,
            body: {
                startDate: '2018-01-10T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922009,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2018-01-10T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 29139.40,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134863: UC0098Cv34_AC11_ST140 Step 5
        request: {
            membershipId: 922009,
            body: {
                frequency: "Six Monthly"
            }
        },
        response: {
            data: {
                membershipId: 922009,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 89765.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134863: UC0098Cv34_AC11_ST140 Step 6
        request: {
            membershipId: 922009,
            body: {
                startDate: '2018-01-08T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922009,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2018-01-10T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 28140.0610,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134865: UC0098Cv34_AC11_ST142 Step 5
        request: {
            membershipId: 922009,
            body: {
                frequency: "Yearly"
            }
        },
        response: {
            data: {
                membershipId: 922009,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 89765.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134865: UC0098Cv34_AC11_ST142 Step 6
        request: {
            membershipId: 922009,
            body: {
                startDate: '2018-09-22T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922009,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2018-01-10T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 26142.680,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 139766: UC0098Cv34_AC11_ST036 Step 5
        request: {
            membershipId: 922010,
            body: {
                startDate: '2018-02-12T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2018-02-12T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 46,
                catchUpAmount: 2139766.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134766: UC0098Cv34_AC11_ST042 Step 5
        request: {
            membershipId: 922010,
            body: {
                startDate: '2018-01-26T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 20342.990124,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134767: UC0098Cv34_AC11_ST044 Step 5
        request: {
            membershipId: 922010,
            body: {
                frequency: "Quarterly"
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 44.45,
                    "discountPercent": 234.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134767: UC0098Cv34_AC11_ST044 Step 6
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-11-02T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2017-11-02T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 72,
                catchUpAmount: 21044.95,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134745: UC0098Cv34_AC11_ST045 Step 5
        request: {
            membershipId: 922010,
            body: {
                frequency: "Fortnightly"
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134746: UC0098Cv34_AC11_ST046 Step 5
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-11-23T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 20246.01010110,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 108809: UC0098Cv34_AC11_ST099 Step 5
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-11-04T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2017-11-04T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 80,
                catchUpAmount: 2108809.15,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134717: UC0098Cv34_AC11_ST100 Step 5
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-11-24T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2017-11-24T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 42,
                catchUpAmount: 2134717,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 148234: UC0098Cv34_AC11_ST103 Step 5
        request: {
            membershipId: 922010,
            body: {
                frequency: "Six Monthly"
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 148234: UC0098Cv34_AC11_ST103 Step 6
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-11-12T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2017-11-24T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 42,
                catchUpAmount: 21482.34,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 134861: UC0098Cv34_AC11_ST138 Step 5
        request: {
            membershipId: 922010,
            body: {
                frequency: "Yearly"
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 23.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 33.76,
                    "discountAmount": 44.45,
                    "discountPercent": 23.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134861: UC0098Cv34_AC11_ST138 Step 6
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-11-28T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2017-11-02T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 72,
                catchUpAmount: 20138.095,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case UC0098Cv34_AC11_ST015 Step 4
        request: {
            membershipId: 922011,
            body: {
                frequency: "Yearly"
            }
        },
        response: {
            data: {
                membershipId: 922011,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 6079.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 23.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 33.76,
                    "discountAmount": 44.45,
                    "discountPercent": 23.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case UC0098Cv34_AC11_ST016 Step 4
        request: {
            membershipId: 45635433,
            body: {
                frequency: "Monthly"
            }
        },
        response: {
            data: {
                membershipId: 45635433,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 10640.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 23.5,
                    "lhcAmount": 112.34,
                    "lhcPercent": 33.76,
                    "discountAmount": 4846.45,
                    "discountPercent": 23.6666,
                    "baseAmount": 9867.4,
                    "gst": -346,
                    "netAmount": 8556.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case UC0098Cv34_AC11_ST018 Step 4
        request: {
            membershipId: 3455437,
            body: {
                frequency: "Fortnightly"
            }
        },
        response: {
            data: {
                membershipId: 3455437,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 10640.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 344,
                    "rebatePercent": 44.2225,
                    "lhcAmount": 11244.34,
                    "lhcPercent": 34.76,
                    "discountAmount": 424.45,
                    "discountPercent": 24.6666,
                    "baseAmount": 627.4,
                    "gst": 3246,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case UC0098Cv34_AC11_ST020 Step 4
        request: {
            membershipId: 3455436,
            body: {
                frequency: "Quarterly"
            }
        },
        response: {
            data: {
                membershipId: 3455436,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 18140.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 36041,
                    "rebatePercent": 49.05,
                    "lhcAmount": 2024.34,
                    "lhcPercent": 64.76,
                    "discountAmount": 4024.45,
                    "discountPercent": 64.6666,
                    "baseAmount": 627.4,
                    "gst": -1246,
                    "netAmount": -3700.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case UC0098Cv34_AC11_ST178 Step 4
        request: {
            membershipId: 45635434,
            body: {
                frequency: "Quarterly"
            }
        },
        response: {
            data: {
                membershipId: 3455436,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 18140.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 124,
                catchUpAmount: 10244.01,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 36041,
                    "rebatePercent": 49.05,
                    "lhcAmount": 2024.34,
                    "lhcPercent": 64.76,
                    "discountAmount": 4024.45,
                    "discountPercent": 64.6666,
                    "baseAmount": 627.4,
                    "gst": -1246,
                    "netAmount": -3700.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134751: UC0098Cv34_AC02_ST004 Step 5
        request: {
            membershipId: 65939258,
            body: {
                startDate: '2017-09-23T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 65939258,
                datePaidTo: '2017-09-24T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Monthly",
                nextDebitDate: '2017-09-25T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 38.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 44.45,
                    "discountPercent": 234.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134751: UC0098Cv34_AC02_ST004 Step 6
        request: {
            membershipId: 65939258,
            body: {
                startDate: '2017-09-24T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 65939258,
                datePaidTo: '2017-09-24T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Monthly",
                nextDebitDate: '2017-09-23T00:00:00.000Z',
                nextDirectDebitAmount: 14493.43,
                ongoingDirectdebit: 381.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 95,
                catchUpAmount: 75523.16546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 344,
                    "rebatePercent": 44.2225,
                    "lhcAmount": 11244.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 424.45,
                    "discountPercent": 2324.6666,
                    "baseAmount": 627.4,
                    "gst": 3246,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134751: UC0098Cv34_AC02_ST004 Step 7
        request: {
            membershipId: 65939258,
            body: {
                startDate: '2017-09-25T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 65939258,
                datePaidTo: '2017-09-25T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Monthly",
                nextDebitDate: '2017-09-23T00:00:00.000Z',
                nextDirectDebitAmount: 13293.43,
                ongoingDirectdebit: 3811.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 97,
                catchUpAmount: 896.16546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 344,
                    "rebatePercent": 44.2225,
                    "lhcAmount": 114.34,
                    "lhcPercent": 3144.76,
                    "discountAmount": 4124.45,
                    "discountPercent": 2324.8966,
                    "baseAmount": 6127.4,
                    "gst": 246,
                    "netAmount": 3496.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 134751: UC0098Cv34_AC02_ST004 Step 7
        request: {
            membershipId: 68110001,
            body: {
                frequency: "Monthly",
                startDate: '2017-09-23T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 68110001,
                datePaidTo: '2017-09-25T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Monthly",
                nextDebitDate: '2017-09-23T00:00:00.000Z',
                nextDirectDebitAmount: 13293.43,
                ongoingDirectdebit: 3811.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 97,
                catchUpAmount: 896.16546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 20,
                    "rebatePercent": 14.2225,
                    "lhcAmount": 114.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 4124.45,
                    "discountPercent": 2324.8966,
                    "baseAmount": 6127.4,
                    "gst": 246,
                    "netAmount": 3496.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    // UC0098Cv34_AC11_ST013
    {
        request: {
            membershipId: 111000,
            body: {
                frequency: "Yearly",
            }
        },
        response: {
            data: {
                membershipId: 111000,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Yearly",
                nextDebitDate: '2017-09-28T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 38.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 44.45,
                    "discountPercent": 234.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 11122217,
            body: {
                frequency: "Monthly",
                startDate: "2017-09-26T00:00:00.000Z"
            }
        },
        response: {
            data: {
                membershipId: 111000,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Yearly",
                nextDebitDate: '2017-09-28T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 38.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 30.76,
                    "discountAmount": 450.45,
                    "discountPercent": 34.6666,
                    "baseAmount": 67.4,
                    "gst": 340,
                    "netAmount": 3000
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    // UC0098Cv34_AC11_ST047
    {
        request: {
            membershipId: 170390,
            body: {
                frequency: "Yearly",
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Yearly",
                nextDebitDate: '2017-09-28T00:00:00.000Z',
                nextDirectDebitAmount: 222.43,
                ongoingDirectdebit: 3333.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 44.45,
                    "discountPercent": 234.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //UC0098Cv34_AC11_ST048
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-01T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90000,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //UC0098Cv34_AC11_ST049
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-02T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90001,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //UC0098Cv34_AC11_ST050
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-03T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90002,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //UC0098Cv34_AC11_ST060
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-04T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90003,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //UC0098Cv34_AC11_ST082
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-05T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90004,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //UC0098Cv34_AC11_ST085
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-06T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90005,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //UC0098Cv34_AC11_ST065
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-07T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90006,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //UC0098Cv34_AC11_ST143
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-08T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90007,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //UC0098Cv34_AC11_ST144
        request: {
            membershipId: 170390,
            body: {
                startDate: '2017-10-09T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 170390,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 90008,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // UC0098Cv34_AC11_ST051
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-12-24T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Fortnightly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 83,
                catchUpAmount: 80345.990123,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // 140485: UC0098Cv34_AC11_ST081 Step 5
        request: {
            membershipId: 922010,
            body: {
                frequency: "Quarterly"
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 835,
                catchUpAmount: 80035.19,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // 140485: UC0098Cv34_AC11_ST081
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-12-01T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 835,
                catchUpAmount: 80035.19,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // UC0098Cv34_AC11_ST141
        request: {
            membershipId: 922010,
            body: {
                startDate: '2017-12-02T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 1479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 845,
                catchUpAmount: 80045.45,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // UC0098Cv34_AC11_ST141
        request: {
            membershipId: 922010,
            body: {
                frequency: "Six Monthly"
            }
        },
        response: {
            data: {
                membershipId: 922010,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 81493.43,
                ongoingDirectdebit: 81479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 845,
                catchUpAmount: 80045.45,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   // Test Case 145582: UC0101Cv34_AC11_ST024 
        request: {
            membershipId: 922001,
            body: {
                startDate: '2017-10-04T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922001,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Quarterly",
                nextDebitDate: '2017-09-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 38.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 44.45,
                    "discountPercent": 234.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   // Test Case 145582: UC0101Cv34_AC12_ST010 
        request: {
            membershipId: 922008,
            body: {
                startDate: '2017-10-02T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 922008,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "International IT Technology",
                frequency: "Quarterly",
                nextDebitDate: '2017-09-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 38.54,
                paymentType: "Payment Card",
                paymentDetails: "Jaric Waston - 123456 - 84656468",
                catchupDays: 90,
                catchUpAmount: 753.1246546,
                paymentCardExpiry: "2023-09-15T00:00:00.000Z",
                deactivatedReason: "Too late",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 34,
                    "rebatePercent": 2334.2225,
                    "lhcAmount": 1124.34,
                    "lhcPercent": 3344.76,
                    "discountAmount": 44.45,
                    "discountPercent": 234.6666,
                    "baseAmount": 67.4,
                    "gst": 346,
                    "netAmount": 3456.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    //UC0098Cv34_AC11_ST191
    {  
        request: {
            membershipId: 4917035,
            body: {
                frequency: "Monthly",
                startDate: '2018-05-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 4917035,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Monthly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 81493.43,
                ongoingDirectdebit: 81479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 845,
                catchUpAmount: 80045.45,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   
        request: {
            membershipId: 4917035,
            body: {
                frequency: "Monthly",
                startDate: '2017-10-28T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 4917035,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: -8000,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST203 Step5
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -451.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST203 Step6
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-10-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 18,
                catchUpAmount: 5434,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },

    {   //  UC0098Cv34_AC11_ST202 Step6
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-09-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 20,
                catchUpAmount: 5444,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST201 Step6
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-08-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 21,
                catchUpAmount: 5455,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST200 Step6
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-07-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 22,
                catchUpAmount: 5466,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST199 Step6
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-06-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 23,
                catchUpAmount: 5477,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST198 Step6
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-15T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 24,
                catchUpAmount: 5488,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST197 Step6
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-18T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 18,
                catchUpAmount: 5499,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST196 Step5
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-20T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 20,
                catchUpAmount: 5500,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST189 Step5
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-21T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 21,
                catchUpAmount: 5501,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST190 Step5
        request: {
            membershipId: 98111114,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-22T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111114,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-13T00:00:00.000Z',
                nextDirectDebitAmount: 149.43,
                ongoingDirectdebit: 4.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 22,
                catchUpAmount: 5502,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 52,
                    "rebatePercent": 2.2225,
                    "lhcAmount": 552.34,
                    "lhcPercent": 3.76,
                    "discountAmount": 542.45,
                    "discountPercent": 2.6666,
                    "baseAmount": -352.4,
                    "gst": 342,
                    "netAmount": -45.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST192 Step4
        request: {
            membershipId: 98111115,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-14T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 98111115,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-15T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -451.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST194 Step4, ST195
        request: {
            membershipId: 11211113,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-15T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 11211113,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-15T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 54345,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -451.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },
    {   //  UC0098Cv34_AC11_ST195 
        request: {
            membershipId: 11211113,
            body: {
                frequency: "Quarterly",
                startDate: '2018-05-16T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 11211113,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Quarterly",
                nextDebitDate: '2018-05-16T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 41.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 18,
                catchUpAmount: 5430,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
                paymentCardId: 0,
                rateSummary: {
                    "rebateAmount": 521,
                    "rebatePercent": 21.2225,
                    "lhcAmount": 5521.34,
                    "lhcPercent": 31.76,
                    "discountAmount": 5421.45,
                    "discountPercent": 21.6666,
                    "baseAmount": -3521.4,
                    "gst": 3421,
                    "netAmount": -451.66
                },
                deactivatedDate: "2016-09-15T00:00:00.000Z",
                _links: {}
            }
        }
    },

    //UC0098Cv34_AC11_ST193
    {
        request: {
            membershipId: 61634119,
            body: {
                frequency: "Monthly",
                startDate: '2018-05-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 61634119,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Monthly",
                nextDebitDate: '2019-01-03T00:00:00.000Z',
                nextDirectDebitAmount: 81493.43,
                ongoingDirectdebit: 81479.745,
                paymentType: "Bank Account",
                paymentDetails: "",
                catchupDays: 845,
                catchUpAmount: 80045.45,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {
        request: {
            membershipId: 61634119,
            body: {
                frequency: "Monthly",
                startDate: '2017-10-27T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 61634119,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2017-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 80000,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    },
    {
        request: {
            membershipId: 20609665,
            body: {
                frequency: "Six Monthly",
                startDate: '2018-05-13T00:00:00.000Z'
            }
        },
        response: {
            data: {
                membershipId: 20609665,
                datePaidTo: '2017-09-23T00:00:00.000Z',
                corporateGroup: "",
                frequency: "Six Monthly",
                nextDebitDate: '2018-12-23T00:00:00.000Z',
                nextDirectDebitAmount: 1493.43,
                ongoingDirectdebit: 7524.745,
                paymentType: "Payment Card",
                paymentDetails: "",
                catchupDays: 180,
                catchUpAmount: 80000,
                paymentCardExpiry: "",
                deactivatedReason: "",
                reactivationDate: "2017-09-15T00:00:00.000Z",
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
            }
        }
    }
	/*
	{
        // This matches requests based on "membershipId" and "period".
        // The signature object may contain any input parameters defined in the specs.
        // Any parameters not specified here won't affect the matching result
        // Parameters passed in the path/querystring/headers can be accessed directly as properties of the request object
        // "body" is a special property that holds the request body

        request: { //Test case 73116 UC0098C_AC02_ST002 Step 6
            membershipId: 83168617,
            body: {
                frequency: "Weekly"
            }
        },
        // If the request matches this entry, the response defined here will be returned.
        // The response can contain an Http status and a data object.
        response: {
            status: 200,  // Can leave this out - 200 is the default
            data: {
                datePaidTo: '2017-04-20T00:00:00.000Z',
				corporateGroup: "CSC-BUPA",
				netCost: 100,
				baseCost: 11,
				medicareRebate: 22,
				lhcLoading: 65,
				discount: 5,
				gst: 8,
				frequency: 'Weekly',
				nextDebitDate: '2017-05-06T00:00:00.000Z',
				nextDirectDebitAmount: 75,
				ongoingDirectdebit: 120,
				paymentType: "Bank Account",
				paymentDetails: "Hetal Almasidemaleki - 1234567 - 123456789",
				catchupDays: 8,
				catchUpAmount: 65,
				_links: {}
            }
        }
    },	*/
	/*
	{
		request: { // Bug ID 90584
            membershipId: 82397449,
            body: {
                frequency:"Yearly",
				startDate:'2017-06-05T00:00:00.000Z'
            }
        },
        response: {
            status: 200,
            data: {
            datePaidTo: '2017-05-16T00:00:00.000Z',
			corporateGroup: "CSC-BUPA",
			netCost: 100,
			baseCost: 100,
			medicareRebate: 100,
			lhcLoading: 100,
			discount: 100,
			gst: 100,
			frequency: 'Fortnightly',
			nextDebitDate: '2017-05-17T00:00:00.000Z',
			nextDirectDebitAmount: 975,
			ongoingDirectdebit: 3700,
			paymentType: "Payment Card",
			paymentDetails: "Hetal Almasidemaleki - 1234567 - 123456789",
			catchupDays: 96,
			catchUpAmount: 995.76,
			paymentCardExpiry: true,
			_links: {}
            }
        }
    }
	*/

];
