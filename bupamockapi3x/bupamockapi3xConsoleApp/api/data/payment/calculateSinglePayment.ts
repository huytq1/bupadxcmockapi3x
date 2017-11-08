export default [
    {
        request: req => [req.body.newDatePaidTo, req.body.amount, req.body.numberOfDays, req.body.numberOfMonths].filter(x => x != null).length !== 1,
        response: {
            status: 400,
            data: "Request must contain exactly one of the following values: numberOfDays, numberOfMonths, amount, startDate"
        }
    },
    //{   //TC: 140090_UC0101Cv34_AC28_ST065
    //    request: {
    //        membershipId: 45635432,
    //        body: {frequency: "Monthly", startDate: "2017-10-05T00:00:00.000Z"}
    //    },
    //    response: {
    //        status: 200,
    //        data: {
    //            datePaidTo: "2017-09-15T00:00:00.000Z",
    //            newDatePaidTo: "2017-09-15T00:00:00.000Z",
    //            rateDate: "2017-09-15T00:00:00.000Z",
    //            corporateGroup: "csc",
    //            premiumAmount: 303,
    //            period: 17,
    //            periodType: "Weeks",
    //            paymentDate: "2017-09-15T00:00:00.000Z",
    //            paymentType: "Cheque",
    //            paymentDetails: "Bank Account",
    //            rateSummary: {
    //                "rebateAmount": 111,
    //                "rebatePercent": 24.2225,
    //                "lhcAmount": 1124,
    //                "lhcPercent": 33.76,
    //                "discountAmount": 445,
    //                "discountPercent": 24.6666,
    //                "baseAmount": 11111111,
    //                "gst": 44444,
    //                "netAmount": 22222223
    //            },
    //            _links: {}
    //        }
    //    }
    //},
    {
        request: {
            membershipId: 21026018,
            body: {
                newDatePaidTo: "2018-09-25T00:00:00.000Z",
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-26T00:00:00.000Z"
            }
        },
        response: {
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 365466,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "days",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 333,
                    "rebatePercent": 24.333,
                    "lhcAmount": 333,
                    "lhcPercent": 33.33,
                    "discountAmount": 333,
                    "discountPercent": 24.333,
                    "baseAmount": 333,
                    "gst": 333,
                    "netAmount": 333
                },
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 21026018, body: {
                numberOfMonths: 3,
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-26T00:00:00.000Z"
            }
        },
        response: {
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 365466,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "days",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 222,
                    "rebatePercent": 22.333,
                    "lhcAmount": 22,
                    "lhcPercent": 22.33,
                    "discountAmount": 22,
                    "discountPercent": 24.333,
                    "baseAmount": 22,
                    "gst": 22,
                    "netAmount": 2222
                },
                _links: {}
            }
        }
    },
    {
        request: { membershipId: 21026018, body: { rateDate: "2017-04-01T00:00:00.000Z", amount: 5000, paymentDate: "2017-10-26T00:00:00.000Z" } },
        response: {
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 365466,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "days",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 0,
                    "rebatePercent": 0,
                    "lhcAmount": 0,
                    "lhcPercent": 0,
                    "discountAmount": 333,
                    "discountPercent": 24.333,
                    "baseAmount": 333,
                    "gst": 333,
                    "netAmount": 333
                },
                _links: {}
            }
        }
    },


    {
        request: { membershipId: 320015, body: { startDate: "2018-09-25T00:00:00.000Z", rateDate: "2017-04-01T00:00:00.000Z" } },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 111,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                paymentDetails: "Payment Card",
                rateSummary: {
                    "rebateAmount": 1111,
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
    {
        request: {
            membershipId: 922008,
            body: {
                amount: 309
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 309,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        request: {
            membershipId: 922008,
            body: {
                amount: 310
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 310,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        request: {
            membershipId: 922008,
            body: {
                amount: 311
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 311,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        request: {
            membershipId: 922008,
            body: {
                amount: 312
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                baseCost: 1316589,
                premiumAmount: 312,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        request: {
            membershipId: 922008,
            body: {
                amount: 313
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 313,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        request: {
            membershipId: 922008,
            body: {
                amount: 314
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 314,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        request: {
            membershipId: 922008,
            body: {
                amount: 315
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                baseCost: 1316589,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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



    {
        // This matches requests based on "membershipId" and "period".
        // The signature object may contain any input parameters defined in the specs.
        // Any parameters not specified here won't affect the matching result
        // Parameters passed in the path/querystring/headers can be accessed directly as properties of the request object
        // "body" is a special property that holds the request body
        request: {
            membershipId: 11223344,
            body: {
                period: "Months"
            }
        },
        // If the request matches this entry, the response defined here will be returned.
        // The response can contain an Http status and a data object.
        response: {
            status: 200,  // Can leave this out - 200 is the default
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-04-01T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 12154.6,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                _links: {}
            }
        }
    },
    {   //134654 UC0101Cv34_AC02_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-07T00:00:00.000Z",
                newDatePaidTo: "2017-11-08T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 15000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 150,
                    "rebatePercent": 28.25,
                    "lhcAmount": 2500,
                    "lhcPercent": 35.76,
                    "discountAmount": 650,
                    "discountPercent": 30.6666,
                    "baseAmount": 2100,
                    "gst": 3500,
                    "netAmount": 25600
                },
                _links: {}
            }
        }
    },
    {   //134654 UC0101Cv34_AC02_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-07T00:00:00.000Z",
                newDatePaidTo: "2017-12-08T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 1700,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //134654 UC0101Cv34_AC04_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-07T00:00:00.000Z",
                amount: 14500
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2019-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 10000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 400.21,
                    "rebatePercent": 40.25,
                    "lhcAmount": 4400,
                    "lhcPercent": 41,
                    "discountAmount": 4100,
                    "discountPercent": 45.6666,
                    "baseAmount": 4700,
                    "gst": 3500,
                    "netAmount": 4530
                },
                _links: {}
            }
        }
    },
    {   //134654 UC0101Cv34_AC02_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-07T00:00:00.000Z",
                newDatePaidTo: "2019-02-15T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 150000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 1500,
                    "rebatePercent": 280.25,
                    "lhcAmount": 25000,
                    "lhcPercent": 350.76,
                    "discountAmount": 6500,
                    "discountPercent": 30.6666,
                    "baseAmount": 2100,
                    "gst": 35000,
                    "netAmount": 25600
                },
                _links: {}
            }
        }
    },
    {   //134654 UC0101Cv34_AC03_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-07T00:00:00.000Z",
                numberOfDays: 84
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-11-15T00:00:00.000Z",
                newDatePaidTo: "2019-02-20T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 19000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 400.21,
                    "rebatePercent": 40.25,
                    "lhcAmount": 4400,
                    "lhcPercent": 41,
                    "discountAmount": 4100,
                    "discountPercent": 45.6666,
                    "baseAmount": 4700,
                    "gst": 3500,
                    "netAmount": 4530
                },
                _links: {}
            }
        }
    },
    {   //134654 UC0101Cv34_AC03_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-07T00:00:00.000Z",
                numberOfDays: 29
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-11-15T00:00:00.000Z",
                newDatePaidTo: "2017-11-20T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 20000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 405.21,
                    "rebatePercent": 40.25,
                    "lhcAmount": 4405,
                    "lhcPercent": 41,
                    "discountAmount": 4100,
                    "discountPercent": 45.6666,
                    "baseAmount": 4700,
                    "gst": 3500,
                    "netAmount": 4530
                },
                _links: {}
            }
        }
    },
    {   //134654 UC0101Cv34_AC03_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                numberOfMonths: 12
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-11-15T00:00:00.000Z",
                newDatePaidTo: "2035-11-20T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 23000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 500.21,
                    "rebatePercent": 50.25,
                    "lhcAmount": 5000,
                    "lhcPercent": 51,
                    "discountAmount": 5100,
                    "discountPercent": 45.6666,
                    "baseAmount": 5700,
                    "gst": 3500,
                    "netAmount": 4530
                },
                _links: {}
            }
        }
    },
    {   //134654 UC0101Cv34_AC03_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-07T00:00:00.000Z",
                numberOfMonths: 48
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-11-15T00:00:00.000Z",
                newDatePaidTo: "2019-03-20T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 23000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 500.21,
                    "rebatePercent": 50.25,
                    "lhcAmount": 5000,
                    "lhcPercent": 51,
                    "discountAmount": 5100,
                    "discountPercent": 45.6666,
                    "baseAmount": 5700,
                    "gst": 3500,
                    "netAmount": 4530
                },
                _links: {}
            }
        }
    },
    {   // AP UC0101Cv34_AC28
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 10,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST068
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 430
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 301,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST065
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 260
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 302,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //TC: 140090_UC0101Cv34_AC28_ST038
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 303
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 303,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //TC: 140090_UC0101Cv34_AC28_ST026
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 305
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 305,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //TC: 140090_UC0101Cv34_AC28_ST027
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 306
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 306,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //TC: 140090_UC0101Cv34_AC28_ST012
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 307
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 307,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST011
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 308
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 308,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST060
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 316
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 316,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST058
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 317
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 317,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST064
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 318
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 318,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST063
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 319
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 319,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST062
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 320
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 320,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST061
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 321
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 321,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST059
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 322
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 322,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST074
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 323
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 323,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // AP TC 140026: UC0101Cv34_AC28_ST004
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 309
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-05-21T00:00:00.000Z",
                newDatePaidTo: "2017-08-05T00:00:00.000Z",
                rateDate: "2017-04-01T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 450,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST010
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 310
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 310,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST09
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 311
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 311,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST08
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 312
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 312,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST07
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 313
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 313,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST06
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 314
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 314,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST05
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 315
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 315,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST05
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 325
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 325,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST037
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 304
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 304,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //UC0101Cv34_AC28_ST065
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 312
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 312,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //TC: 140090_UC0101Cv34_AC28_ST065
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 320
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 320,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   //TC: 140090_UC0101Cv34_AC28_ST065
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 314
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 314,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        request: {
            membershipId: 320015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 111
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 111,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-27T00:00:00.000Z",
                paymentType: "Payment Card",
                paymentDetails: "Payment Card",
                rateSummary: {
                    "rebateAmount": 1111,
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
    //{   // UC0101Cv34_AC28_ST065
    //    request: {
    //        membershipId: 311111,
    //        body: {
    //            amount: 302
    //        }
    //    },
    //    response: {
    //        status: 200,
    //        data: {
    //            datePaidTo: "2017-09-15T00:00:00.000Z",
    //            newDatePaidTo: "2017-09-15T00:00:00.000Z",
    //            rateDate: "2017-09-15T00:00:00.000Z",
    //            corporateGroup: "csc",
    //            baseCost: 1316589,
    //            medicareRebate: 1316589.2874,
    //            lhcLoading: 46.54,
    //            discount: 11.1,
    //            gst: 22.4,
    //            netCost: 45.5,
    //            premiumAmount: 302,
    //            period: 17,
    //            periodType: "Weeks",
    //            paymentDate: "2017-09-15T00:00:00.000Z",
    //            paymentType: "Cheque",
    //            paymentDetails: "Bank Account",
    //            rateSummary: {
    //                "rebateAmount": 111,
    //                "rebatePercent": 24.2225,
    //                "lhcAmount": 1124,
    //                "lhcPercent": 33.76,
    //                "discountAmount": 445,
    //                "discountPercent": 24.6666,
    //                "baseAmount": 11111111,
    //                "gst": 44444,
    //                "netAmount": 22222223
    //            },
    //            _links: {}
    //        }
    //    }
    //},
    {   //134655 UC0101Cv34_AC03_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                numberOfDays: 21
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 2000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //134655 UC0101Cv34_AC03_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                numberOfDays: 22
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 2100,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //134655 UC0101Cv34_AC03_ST001
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                numberofMonths: 12
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 3100,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //TC140025 UC0101Cv34_AC28_ST003
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 325
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                baseCost: 1316589,
                medicareRebate: 1316589.2874,
                lhcLoading: 46.54,
                discount: 11.1,
                gst: 22.4,
                netCost: 45.5,
                premiumAmount: 325,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //140025
        request: {
            membershipId: 24899015,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 2001
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 10001,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //  Test Case 145582: UC0101Cv34_AC11_ST024
        request: {
            membershipId: 922001,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 145582
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 128420,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //  Test Case 145583: UC0101Cv34_AC11_ST025
        request: {
            membershipId: 922002,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 145583.01
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 9513,
                period: 0,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //  Test Case 145584: UC0101Cv34_AC11_ST026
        request: {
            membershipId: 922003,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 145584.02
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 87405.646,
                period: 0,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //  Test Case 145585: UC0101Cv34_AC11_ST027
        request: {
            membershipId: 922007,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 145585.190004
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 458104.646,
                period: 0,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //  Test Case 145586: UC0101Cv34_AC11_ST028
        request: {
            membershipId: 922008,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 145586.14
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 70012.646,
                period: 0,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Band Account",
                paymentDetails: "Cash",
                rateSummary: {
                    "rebateAmount": 180,
                    "rebatePercent": 29.25,
                    "lhcAmount": 2700,
                    "lhcPercent": 35.76,
                    "discountAmount": 850,
                    "discountPercent": 30.6666,
                    "baseAmount": 2510,
                    "gst": 3570,
                    "netAmount": 26000
                },
                _links: {}
            }
        }
    },
    {   //TC: Anh Phan  1 - 2 - 5 - 3 - 200
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 21253
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 21253,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        // This entry will never be used because all requests already match one of the previous entry
        request: { membershipId: 100000000 },
        response: {}
    },
    {
        request: {
            membershipId: 11122221,
            body: {
                numberofDays: 14
            }
        },
        response: {
            status: 400,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 11122221,
            body: {
                numberofMonths: 12
            }
        },
        response: {
            status: 400,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 11122221,
            body: {
                amount: 5000
            }
        },
        response: {
            status: 400,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 11122221,
            body: {
                startDate: "2017-12-01T00:00:00.000Z"
            }
        },
        response: {
            status: 400,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 11122222,
            body: {
                numberofDays: 14
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
            membershipId: 11122222,
            body: {
                numberofMonths: 12
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
            membershipId: 11122222,
            body: {
                amount: 5000
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
            membershipId: 11122222,
            body: {
                startDate: "2017-12-01T00:00:00.000Z"
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
            membershipId: 11122211,
            body: {
                numberofDays: 14
            }
        },
        response: {
            status: 500,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 11122211,
            body: {
                numberofMonths: 12
            }
        },
        response: {
            status: 500,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 11122211,
            body: {
                amount: 5000
            }
        },
        response: {
            status: 500,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 11122211,
            body: {
                startDate: "2017-12-01T00:00:00.000Z"
            }
        },
        response: {
            status: 500,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 59325001,
            body: {
                amount: 1000
            }
        },
        response: {
            status: 500,
            headers: {
                "ErrorCode": ""
            }
        }
    },
    {
        request: {
            membershipId: 11122212,
            body: {
                numberofDays: 14
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
            membershipId: 11122212,
            body: {
                numberofMonths: 12
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
            membershipId: 11122212,
            body: {
                amount: 5000
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
            membershipId: 11122212,
            body: {
                startDate: "2017-12-01T00:00:00.000Z"
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
            membershipId: 11122213,
            body: {
                numberofDays: 14
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
            membershipId: 11122213,
            body: {
                numberofMonths: 12
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
            membershipId: 11122213,
            body: {
                amount: 5000
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
            membershipId: 11122213,
            body: {
                startDate: "2017-12-01T00:00:00.000Z"
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
            membershipId: 11122214,
            body: {
                numberofDays: 14
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
            membershipId: 11122214,
            body: {
                numberofMonths: 12
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
            membershipId: 11122214,
            body: {
                amount: 5000
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
            membershipId: 11122214,
            body: {
                startDate: "2017-12-01T00:00:00.000Z"
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
            membershipId: 11122215,
            body: {
                numberofDays: 14
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
            membershipId: 11122215,
            body: {
                numberofMonths: 12
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
            membershipId: 11122215,
            body: {
                amount: 5000
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
            membershipId: 11122215,
            body: {
                startDate: "2017-12-01T00:00:00.000Z"
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
    {   // UC0101Cv34_AC28_ST078
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 328
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 328,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST077
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 329
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 329,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST076
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 330
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 330,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST075
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-10-28T00:00:00.000Z",
                amount: 331
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 331,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        request: {
            membershipId: 16686701,
            body: {
                amount: 500,
                rateDate: "2017-04-01T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 500,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Cheque",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 111,
                    "rebatePercent": 30.2225,
                    "lhcAmount": 111,
                    "lhcPercent": 33.76,
                    "discountAmount": 445,
                    "discountPercent": 24.6666,
                    "baseAmount": 120,
                    "gst": 444,
                    "netAmount": 214
                },
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            body: {
                numberOfDays: 28,
                rateDate: "2017-04-01T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 2800,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Cheque",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 111,
                    "rebatePercent": 30.2225,
                    "lhcAmount": 111,
                    "lhcPercent": 33.76,
                    "discountAmount": 445,
                    "discountPercent": 24.6666,
                    "baseAmount": 120,
                    "gst": 444,
                    "netAmount": 214
                },
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            body: {
                numberOfMonths: 12,
                rateDate: "2017-04-01T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 12000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Cheque",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 111,
                    "rebatePercent": 30.2225,
                    "lhcAmount": 111,
                    "lhcPercent": 33.76,
                    "discountAmount": 445,
                    "discountPercent": 24.6666,
                    "baseAmount": 120,
                    "gst": 444,
                    "netAmount": 214
                },
                _links: {}
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            body: {
                startDate: "2017-11-15T00:00:00.000Z",
                rateDate: "2017-04-01T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 12000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Cheque",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 111,
                    "rebatePercent": 30.2225,
                    "lhcAmount": 111,
                    "lhcPercent": 33.76,
                    "discountAmount": 445,
                    "discountPercent": 24.6666,
                    "baseAmount": 120,
                    "gst": 444,
                    "netAmount": 214
                },
                _links: {}
            }
        }
    },

    {   //  Test Case 145589: UC0101Cv34_AC28_ST073
        request: {
            membershipId: 16686701,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-24T00:00:00.000Z",
                newDatePaidTo: "2018-03-16T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 12000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Cheque",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 111,
                    "rebatePercent": 30.2225,
                    "lhcAmount": 111,
                    "lhcPercent": 33.76,
                    "discountAmount": 445,
                    "discountPercent": 24.6666,
                    "baseAmount": 120,
                    "gst": 444,
                    "netAmount": 214
                },
                _links: {}
            }
        }
    },
    {   //  Test Case 145589: UC0101Cv34_AC28_ST073 - If Premium Amount not populated when change Payment Date
        request: {
            membershipId: 16686701,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                paymentDate: "2017-11-24T00:00:00.000Z",
                amount: 200
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 12000,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Cheque",
                paymentDetails: "Bank Account",
                rateSummary: {
                    "rebateAmount": 111,
                    "rebatePercent": 30.2225,
                    "lhcAmount": 111,
                    "lhcPercent": 33.76,
                    "discountAmount": 445,
                    "discountPercent": 24.6666,
                    "baseAmount": 120,
                    "gst": 444,
                    "netAmount": 214
                },
                _links: {}
            }
        }
    },
    //{
    //    request: {
    //        membershipId: 311111,
    //        body: {
    //            amount: 323
    //        }
    //    },
    //    response: {
    //        status: 500
    //    }
    //},
    {
        // Use functions instead of objects to create custom request matchers and dynamic responses
        request: req => (req.body.amount > 1000), // matches all requests where amount > 1000
        response: req => { // create response using request params as input
            let membershipId = req.membershipId;
            let amount = req.body.amount;
            let cost = membershipId / 1000 + amount;
            let netCost = cost * 0.9;
            netCost = Math.round(netCost * 100) / 100 // round to 2 decimals
            return {
                data: {
                    datePaidTo: '2017-03-31',
                    newDatePaidTo: req.body.newDatePaidTo || new Date("12-1-2025"),
                    rateDate: '2017-01-01',
                    corporateGroup: "cg",
                    baseCost: cost,
                    medicareRebate: cost / 2,
                    lhcLoading: 32.10,
                    discount: 5.6,
                    gst: netCost * 0.1,
                    netCost: netCost,
                    premiumAmount: 25600,
                    period: 17,
                    periodType: "Days",
                    paymentDate: new Date(),
                    paymentType: "Cash",
                    paymentDetails: "payment",
                    rateSummary: {
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
        }
    },
    {   // UC0101Cv34_AC01_ST004
        request: {
            membershipId: 59325001,
            body: {
                startDate: "2017-10-05T00:00:00.000Z",
                rateDate: "2017-04-01T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 331,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
                paymentType: "Cheque",
                paymentDetails: "Bank Account",
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
            }
        }
    },
    {   // UC0101Cv34_AC28_ST073
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                newDatePaidTo: "2016-09-15T00:00:00.000Z",
                paymentDate: "2017-11-01T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 331,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {   // UC0101Cv34_AC28_ST073
        request: {
            membershipId: 311111,
            body: {
                rateDate: "2017-04-01T00:00:00.000Z",
                amount: 250,
                paymentDate: "2017-11-01T00:00:00.000Z"
            }
        },
        response: {
            status: 200,
            data: {
                datePaidTo: "2017-09-15T00:00:00.000Z",
                newDatePaidTo: "2017-09-15T00:00:00.000Z",
                rateDate: "2017-09-15T00:00:00.000Z",
                corporateGroup: "csc",
                premiumAmount: 331,
                period: 17,
                periodType: "Weeks",
                paymentDate: "2017-09-15T00:00:00.000Z",
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
    {
        // Here the request signature is empty, so the entry matches all requests that haven't been matched. Use this to define a default response.
        // All entries defined after this one will not be used.
        request: {},
        response: {
            data: {
                datePaidTo: "2017-01-01",
            }
        }
    }
];
