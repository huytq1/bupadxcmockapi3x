export default [
    {
        request: {
            membershipId: 28121992,
            body:{
              frequency: 'Monthly'
            }
        },
        response: {
            data: {
              "amount": 12345,
              "frequency": "Monthly",
              datePaidTo: "2016-09-15T00:00:00.000Z",
              "rateSummary": {
                "rebateAmount": 1111,
                "rebatePercent": 0,
                "lhcAmount": 0,
                "lhcPercent": 0,
                "discountAmount": 0,
                "discountPercent": 0,
                "baseAmount": 0,
                "gst": 0,
                "netAmount": 0
              }
            }
        }
    },
    {
        request: {
            membershipId: 28121992,
            body:{
              frequency: 'Quarterly'
            }
        },
        response: {
            data: {
              "amount": 54135,
              "frequency": "Quarterly",
              datePaidTo: "2016-01-15T00:00:00.000Z",
              "rateSummary": {
                "rebateAmount": 222222,
                "rebatePercent": 0,
                "lhcAmount": 0,
                "lhcPercent": 0,
                "discountAmount": 0,
                "discountPercent": 0,
                "baseAmount": 0,
                "gst": 0,
                "netAmount": 0
              }
            }
        }
    },
    {
        request: {
            membershipId: 28121992,
            body:{
              frequency: 'Six Monthly'
            }
        },
        response: {
          data: {
            "amount": 666666,
            "frequency": "Yearly",
            datePaidTo: "2016-09-15T00:00:00.000Z",
            "rateSummary": {
              "rebateAmount": 333333,
              "rebatePercent": 54.2225,
              "lhcAmount": 54555555,
              "lhcPercent": 99.76,
              "discountAmount": 777,
              "discountPercent": 24.6666,
              "baseAmount": 11111111,
              "gst": 44444,
              "netAmount": 22222222
            }
          }
        }
    },
    {
        request: {
            membershipId: 28121992,
            body:{
              frequency: 'Yearly'
            }
        },
        response: {
            data: {
              "amount": 12345,
              "frequency": "Yearly",
              datePaidTo: "2016-09-15T00:00:00.000Z",
              "rateSummary": {
                "rebateAmount": 444444,
                "rebatePercent": 54.2225,
                "lhcAmount": 54555555,
                "lhcPercent": 99.76,
                "discountAmount": 777,
                "discountPercent": 24.6666,
                "baseAmount": 11111111,
                "gst": 44444,
                "netAmount": 22222222
              }
            }
        }
    },
    /////////////////////////////
    {
        request: {
            membershipId: 99122137,
            body:{
              frequency: 'Monthly'
            }
        },
        response: {
            data: {
              "amount": 12345,
              "frequency": "Monthly",
              datePaidTo: "2016-09-15T00:00:00.000Z",
              "rateSummary": {
                "rebateAmount": 1111,
                "rebatePercent": 0,
                "lhcAmount": 0,
                "lhcPercent": 0,
                "discountAmount": 0,
                "discountPercent": 0,
                "baseAmount": 0,
                "gst": 0,
                "netAmount": 0
              }
            }
        }
    },
    {
        request: {
            membershipId: 99122137,
            body:{
              frequency: 'Quarterly'
            }
        },
        response: {
            data: {
              "amount": 54135,
              "frequency": "Quarterly",
              datePaidTo: "2016-01-15T00:00:00.000Z",
              "rateSummary": {
                "rebateAmount": 222222,
                "rebatePercent": 0,
                "lhcAmount": 0,
                "lhcPercent": 0,
                "discountAmount": 0,
                "discountPercent": 0,
                "baseAmount": 0,
                "gst": 0,
                "netAmount": 0
              }
            }
        }
    },
    {
        request: {
            membershipId: 99122137,
            body:{
              frequency: 'Six Monthly'
            }
        },
        response: {
          data: {
            "amount": 666666,
            "frequency": "Yearly",
            datePaidTo: "2016-09-15T00:00:00.000Z",
            "rateSummary": {
              "rebateAmount": 333333,
              "rebatePercent": 54.2225,
              "lhcAmount": 54555555,
              "lhcPercent": 99.76,
              "discountAmount": 777,
              "discountPercent": 24.6666,
              "baseAmount": 11111111,
              "gst": 44444,
              "netAmount": 22222222
            }
          }
        }
    },
    {
        request: {
            membershipId: 99122137,
            body:{
              frequency: 'Yearly'
            }
        },
        response: {
            data: {
              "amount": 12345,
              "frequency": "Yearly",
              datePaidTo: "2016-09-15T00:00:00.000Z",
              "rateSummary": {
                "rebateAmount": 444444,
                "rebatePercent": 54.2225,
                "lhcAmount": 54555555,
                "lhcPercent": 99.76,
                "discountAmount": 777,
                "discountPercent": 24.6666,
                "baseAmount": 11111111,
                "gst": 44444,
                "netAmount": 22222222
              }
            }
        }
    },
    /////////////////////////////////////////////////////// errors
    {
        request: {
            membershipId: 125486,
            body:{
              frequency: 'Yearly'
            }
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 125486,
            body:{
              frequency: 'Monthly'
            }
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 125486,
            body:{
              frequency: 'Quarterly'
            }
        },
        response: {
            status: 404
        }
    },
    {
        request: {
            membershipId: 123456789,
            body:{
              frequency: 'Yearly'
            }
        },
        response: {
            status: 422,
            headers: {
                "UserIdNotSetUpInBOSS": "Payments cannot be processed as user is not setup correctly in BOSS."
            }
        }
    },
    {
        request: {
            membershipId: 123456789,
            body:{
              frequency: 'Monthly'
            }
        },
        response: {
            status: 422,
            headers: {
                "UserIdNotAssociatedWithBranch": "Payments cannot be processed as teller has not been started up."
            }
        }
    },
    {
        request: {
            membershipId: 123456789,
            body:{
              frequency: 'Quarterly'
            }
        },
        response: {
            status: 422,
            headers: {
                "UserBranchNotReconciled": "Payments cannot be processed as teller has not been reconciled."
            }
        }
    },
    //////// QC data
    { // UC0280C_AC04
        request: {
            membershipId: 91975193,
            body:{
              frequency: 'Yearly'
            }
        },
        response: {
            status: 400
        }
    },
	{ // UC0280C_AC04
        request: {
            membershipId: 82959636,
            body:{
              frequency: 'Yearly'
            }
        },
        response: {
            status: 404
        }
    },
    { // UC0280C_AC04
        request: {
            membershipId: 98837214,
            body: {
                frequency: 'Quarterly'
            }
        },
        response: {
            status: 500
        }
    },
    { // UC0280C: Current Payment Method = Direct Debit
        request: {
            membershipId: 82236431,
            body: {
                frequency: 'Monthly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Monthly",
                datePaidTo: "2016-09-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 0,
                    "rebatePercent": 1,
                    "lhcAmount": 2,
                    "lhcPercent": 3,
                    "discountAmount": 4,
                    "discountPercent": 5,
                    "baseAmount": 6,
                    "gst": 7,
                    "netAmount": 8
                }
            }
        }
    },
    {
        request: {
            membershipId: 82236431,
            body: {
                frequency: 'Quarterly'
            }
        },
        response: {
            data: {
                "amount": 54135,
                "frequency": "Quarterly",
                datePaidTo: "2016-01-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 222222,
                    "rebatePercent": 0,
                    "lhcAmount": 0,
                    "lhcPercent": 0,
                    "discountAmount": 0,
                    "discountPercent": 0,
                    "baseAmount": 0,
                    "gst": 0,
                    "netAmount": 0
                }
            }
        }
    },
    {
        request: {
            membershipId: 82236431,
            body: {
                frequency: 'Six Monthly'
            }
        },
        response: {
            data: {
                "amount": 666666,
                "frequency": "Six Monthly",
                datePaidTo: "2016-09-10T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 333333,
                    "rebatePercent": 54.2225,
                    "lhcAmount": 54555555,
                    "lhcPercent": 99.76,
                    "discountAmount": 777,
                    "discountPercent": 24.6666,
                    "baseAmount": 11111111,
                    "gst": 44444,
                    "netAmount": 22222222
                }
            }
        }
    },
    {
        request: {
            membershipId: 82236431,
            body: {
                frequency: 'Yearly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Yearly",
                datePaidTo: "2016-09-11T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 444444,
                    "rebatePercent": 64.2225,
                    "lhcAmount": 64555555,
                    "lhcPercent": 100.76,
                    "discountAmount": 877,
                    "discountPercent": 34.6666,
                    "baseAmount": 21111111,
                    "gst": 54444,
                    "netAmount": 32222222
                }
            }
        }
    },
    /////////////////////////////
    { // UC0280C: Current Payment Method = Renewal
        request: {
            membershipId: 72827017,
            body: {
                frequency: 'Monthly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Monthly",
                datePaidTo: "2016-09-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 1111,
                    "rebatePercent": 0,
                    "lhcAmount": 0,
                    "lhcPercent": 0,
                    "discountAmount": 0,
                    "discountPercent": 0,
                    "baseAmount": 0,
                    "gst": 0,
                    "netAmount": 0
                }
            }
        }
    },
    {
        request: {
            membershipId: 72827017,
            body: {
                frequency: 'Quarterly'
            }
        },
        response: {
            data: {
                "amount": 54135,
                "frequency": "Quarterly",
                datePaidTo: "2016-01-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 222222,
                    "rebatePercent": 3,
                    "lhcAmount": 4,
                    "lhcPercent": 5,
                    "discountAmount": 6,
                    "discountPercent": 7,
                    "baseAmount": 8,
                    "gst": 9,
                    "netAmount": 0
                }
            }
        }
    },
    {
        request: {
            membershipId: 72827017,
            body: {
                frequency: 'Six Monthly'
            }
        },
        response: {
            data: {
                "amount": 666666,
                "frequency": "Six Monthly",
                datePaidTo: "2016-09-12T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 333333,
                    "rebatePercent": 54.2225,
                    "lhcAmount": 54555555,
                    "lhcPercent": 99.76,
                    "discountAmount": 777,
                    "discountPercent": 24.6666,
                    "baseAmount": 11111111,
                    "gst": 44444,
                    "netAmount": 22222222
                }
            }
        }
    },
    {
        request: {
            membershipId: 72827017,
            body: {
                frequency: 'Yearly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Yearly",
                datePaidTo: "2016-09-13T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 444444,
                    "rebatePercent": 56.2225,
                    "lhcAmount": 56555555,
                    "lhcPercent": 101.76,
                    "discountAmount": 797,
                    "discountPercent": 26.6666,
                    "baseAmount": 13111111,
                    "gst": 46444,
                    "netAmount": 24222222
                }
            }
        }
    },
    {
        request: {
            membershipId: 72827017,
            body: {
                frequency: 'Nil'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Yearly",
                datePaidTo: "2016-09-13T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 1111,
                    "rebatePercent": 11.11111,
                    "lhcAmount": 22222,
                    "lhcPercent": 2222.2222,
                    "discountAmount": 33333,
                    "discountPercent": 333.3333,
                    "baseAmount": 4444444,
                    "gst": 55555,
                    "netAmount": 666666
                }
            }
        }
    },
    /////////////////////////////
    { // UC0280C: Current Payment Method = Direct Debit, Confirm button enabled
        request: {
            membershipId: 76774256,
            body: {
                frequency: 'Monthly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Monthly",
                datePaidTo: "2016-09-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 0,
                    "rebatePercent": 1,
                    "lhcAmount": 2,
                    "lhcPercent": 3,
                    "discountAmount": 4,
                    "discountPercent": 5,
                    "baseAmount": 6,
                    "gst": 7,
                    "netAmount": 8
                }
            }
        }
    },
    {
        request: {
            membershipId: 76774256,
            body: {
                frequency: 'Quarterly'
            }
        },
        response: {
            data: {
                "amount": 54135,
                "frequency": "Quarterly",
                datePaidTo: "2016-01-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 222222,
                    "rebatePercent": 0,
                    "lhcAmount": 0,
                    "lhcPercent": 0,
                    "discountAmount": 0,
                    "discountPercent": 0,
                    "baseAmount": 0,
                    "gst": 0,
                    "netAmount": 0
                }
            }
        }
    },
    {
        request: {
            membershipId: 76774256,
            body: {
                frequency: 'Six Monthly'
            }
        },
        response: {
            data: {
                "amount": 666666,
                "frequency": "Six Monthly",
                datePaidTo: "2016-09-10T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 333333,
                    "rebatePercent": 54.2225,
                    "lhcAmount": 54555555,
                    "lhcPercent": 99.76,
                    "discountAmount": 777,
                    "discountPercent": 24.6666,
                    "baseAmount": 11111111,
                    "gst": 44444,
                    "netAmount": 22222222
                }
            }
        }
    },
    {
        request: {
            membershipId: 76774256,
            body: {
                frequency: 'Yearly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Yearly",
                datePaidTo: "2016-09-11T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 444444,
                    "rebatePercent": 64.2225,
                    "lhcAmount": 64555555,
                    "lhcPercent": 100.76,
                    "discountAmount": 877,
                    "discountPercent": 34.6666,
                    "baseAmount": 21111111,
                    "gst": 54444,
                    "netAmount": 32222222
                }
            }
        }
    },
    /////////////////////////////
    { // UC0280C: Current Payment Method = Renewal, Confirm button enabled
        request: {
            membershipId: 82315417,
            body: {
                frequency: 'Monthly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Monthly",
                datePaidTo: "2016-09-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 0,
                    "rebatePercent": 1,
                    "lhcAmount": 2,
                    "lhcPercent": 3,
                    "discountAmount": 4,
                    "discountPercent": 5,
                    "baseAmount": 6,
                    "gst": 7,
                    "netAmount": 8
                }
            }
        }
    },
    {
        request: {
            membershipId: 82315417,
            body: {
                frequency: 'Quarterly'
            }
        },
        response: {
            data: {
                "amount": 54135,
                "frequency": "Quarterly",
                datePaidTo: "2016-01-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 222222,
                    "rebatePercent": 0,
                    "lhcAmount": 0,
                    "lhcPercent": 0,
                    "discountAmount": 0,
                    "discountPercent": 0,
                    "baseAmount": 0,
                    "gst": 0,
                    "netAmount": 0
                }
            }
        }
    },
    {
        request: {
            membershipId: 82315417,
            body: {
                frequency: 'Six Monthly'
            }
        },
        response: {
            data: {
                "amount": 666666,
                "frequency": "Six Monthly",
                datePaidTo: "2016-09-10T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 333333,
                    "rebatePercent": 54.2225,
                    "lhcAmount": 54555555,
                    "lhcPercent": 99.76,
                    "discountAmount": 777,
                    "discountPercent": 24.6666,
                    "baseAmount": 11111111,
                    "gst": 44444,
                    "netAmount": 22222222
                }
            }
        }
    },
    {
        request: {
            membershipId: 82315417,
            body: {
                frequency: 'Yearly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Yearly",
                datePaidTo: "2016-09-11T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 444444,
                    "rebatePercent": 64.2225,
                    "lhcAmount": 64555555,
                    "lhcPercent": 100.76,
                    "discountAmount": 877,
                    "discountPercent": 34.6666,
                    "baseAmount": 21111111,
                    "gst": 54444,
                    "netAmount": 32222222
                }
            }
        }
    },
    ////////////////////////
    { // UC0280C: Error when Confirm
        request: {
            membershipId: 28011111,
            body: {
                frequency: 'Yearly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Yearly",
                datePaidTo: "2016-09-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 0,
                    "rebatePercent": 1,
                    "lhcAmount": 2,
                    "lhcPercent": 3,
                    "discountAmount": 4,
                    "discountPercent": 5,
                    "baseAmount": 6,
                    "gst": 7,
                    "netAmount": 8
                }
            }
        }
    },
    { // UC0280C: Error when Confirm
        request: {
            membershipId: 28011112,
            body: {
                frequency: 'Monthly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Monthly",
                datePaidTo: "2016-09-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 0,
                    "rebatePercent": 1,
                    "lhcAmount": 2,
                    "lhcPercent": 3,
                    "discountAmount": 4,
                    "discountPercent": 5,
                    "baseAmount": 6,
                    "gst": 7,
                    "netAmount": 8
                }
            }
        }
    },
    { // UC0280C: Error when Confirm
        request: {
            membershipId: 28011113,
            body: {
                frequency: 'Quarterly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Quarterly",
                datePaidTo: "2016-09-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 0,
                    "rebatePercent": 1,
                    "lhcAmount": 2,
                    "lhcPercent": 3,
                    "discountAmount": 4,
                    "discountPercent": 5,
                    "baseAmount": 6,
                    "gst": 7,
                    "netAmount": 8
                }
            }
        }
    },
    { // UC0280C: Error when Confirm
        request: {
            membershipId: 28011114,
            body: {
                frequency: 'Yearly'
            }
        },
        response: {
            data: {
                "amount": 12345,
                "frequency": "Yearly",
                datePaidTo: "2016-09-15T00:00:00.000Z",
                "rateSummary": {
                    "rebateAmount": 0,
                    "rebatePercent": 1,
                    "lhcAmount": 2,
                    "lhcPercent": 3,
                    "discountAmount": 4,
                    "discountPercent": 5,
                    "baseAmount": 6,
                    "gst": 7,
                    "netAmount": 8
                }
            }
        }
    }
];
