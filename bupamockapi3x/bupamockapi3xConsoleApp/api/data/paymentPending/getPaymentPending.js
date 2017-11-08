"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    /*{//Quynh test Test Case 119384: UC0222C_AC08_ST001
        request: req => req.membershipId == '56446479',
        response: {
            status: 400,
            data: "Data cannot be returned as it received a bad request. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 400 - bad request)"
        }
    },*/
    {
        request: function (req) { return req.membershipId == '888888'; },
        response: {
            status: 401,
            data: "Authentication to use this service is required and has failed or has not yet been provided. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 401 - unauthorised)"
        }
    },
    {
        request: function (req) { return req.membershipId == '202234'; },
        response: {
            status: 401,
            data: "Authentication to use this service is required and has failed or has not yet been provided. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 401 - unauthorised)"
        }
    },
    /*{ //Quynh test Test Case 119386: UC0222C_AC08_ST003
        request: req => req.membershipId == '59325001',
        response: {
            status: 403,
            data: "It looks like you do not have the correct permissions required to use this resource. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 403 - forbidden)"
        }
    },*/
    {
        request: function (req) { return req.membershipId == '666666'; },
        response: {
            status: 404,
            data: "The requested resource could not be found. (error 404 - not found)"
        }
    },
    {
        request: function (req) { return req.membershipId == '400400'; },
        response: {
            status: 400,
            data: "The requested resource could not be found. (error 404 - not found)"
        }
    },
    {
        request: function (req) { return req.membershipId == '666666'; },
        response: {
            status: 406,
            data: "We are sorry - something went wrong with the request sent to the service. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 406 - not acceptable)"
        }
    },
    {
        request: function (req) { return req.membershipId == '555555'; },
        response: {
            status: 500,
            data: "We are sorry - an internal server error has occured. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 500 - internal server error)"
        }
    },
    {
        request: function (req) { return req.membershipId == '444444'; },
        response: {
            status: 500,
            data: "We are sorry - an internal server error has occured. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 500 - internal server error)"
        }
    },
    {
        request: {
            membershipId: 21026018
        },
        response: {
            data: [
                {
                    membershipId: 21026018,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 21026018,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Direct Debit",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 92206127
        },
        response: {
            data: [
                {
                    membershipId: 92206127,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 92206127,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 92206127,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11513200
        },
        response: {
            data: [
                {
                    membershipId: 11513200,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513200,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513200,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 11513201
        },
        response: {
            data: [
                {
                    membershipId: 11513201,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513201,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513201,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11513202
        },
        response: {
            data: [
                {
                    membershipId: 11513202,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513202,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513202,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11513203
        },
        response: {
            data: [
                {
                    membershipId: 11513203,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513203,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513203,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11513204
        },
        response: {
            data: [
                {
                    membershipId: 11513204,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513204,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513204,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11513205
        },
        response: {
            data: [
                {
                    membershipId: 11513205,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513205,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513205,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11513206
        },
        response: {
            data: [
                {
                    membershipId: 11513206,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513206,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11513206,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11513207
        },
        response: {
            data: [
                {
                    membershipId: 11513207,
                    transactionId: null,
                    requestedDate: "",
                    paymentDate: "",
                    amount: null,
                    paymentMethod: "",
                    paymentType: ""
                }
            ]
        }
    },
    {
        request: {
            membershipId: 83085910
        },
        response: {
            data: []
        }
    },
    // Data of QC team
    /*{	// Sample data
        request: {
            membershipId: 82236431
        },
        response: {
            data: {
                paymentPendingList: [
                    {
                        membershipId: 82236431,
                        transactionId: 1,
                        requestedDate: "2016-09-15T00:00:00",
                        paymentDate: "",		//For method = Refund, paymentDate is blank
                        amount: 387.66,
                        paymentMethod: "Refund",
                        paymentType: "Bank Account",
                    },
                    {
                        membershipId: 82236431,
                        transactionId: 2,
                        requestedDate: "2016-12-27T00:00:00",
                        paymentDate: "2016-09-15T00:00:00",
                        amount: 387.65,
                        paymentMethod: "Single Payment",
                        paymentType: "Bank Account",
                    },
                    {
                        membershipId: 82236431,
                        transactionId: 3,
                        requestedDate: "",		//For method = DirectDebit, requestedDate is blank
                        paymentDate: "2016-01-15T00:00:00",
                        amount: 387.63,
                        paymentMethod: "Direct Debit",
                        paymentType: "Payment Card",
                    }
                ]
            }
        }
    }
    */
    {
        request: {
            membershipId: 82236431
        },
        response: {
            data: [
                {
                    membershipId: 82236431,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 82236431,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 82236431,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: function (req) { return req.membershipId == '20641231'; },
        response: {
            status: 406,
            data: "We are sorry - something went wrong with the request sent to the service. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 406 - not acceptable)"
        }
    },
    {
        request: function (req) { return req.membershipId == '20261768'; },
        response: {
            status: 500,
            data: "We are sorry - an internal server error has occured. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 500 - internal server error)"
        }
    },
    {
        request: function (req) { return req.membershipId == '159210'; },
        response: {
            status: 404,
            data: "The requested resource could not be found. (error 404 - not found)"
        }
    },
    {
        request: {
            membershipId: 16686701
        },
        response: {
            data: [
                {
                    membershipId: 16686701,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 16686701,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 16686701,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 5754.774,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    // Data for membership 59325001
    {
        request: {
            membershipId: 59325001
        },
        response: {
            data: [
                {
                    membershipId: 59325001,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 59325001,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 59325001,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 5754.774,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 44512786
        },
        response: {
            data: [
                {
                    membershipId: 44512786,
                    transactionId: 2,
                    requestedDate: "2017-08-24T00:00:00",
                    paymentDate: "",
                    amount: 76876.51746,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 44512786,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2017-08-23T00:00:00",
                    amount: 43854.546,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 44512786,
                    transactionId: 3,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 55589.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 24899015
        },
        response: {
            data: [
                {
                    membershipId: 24899015,
                    transactionId: 1,
                    requestedDate: "2017-08-07T00:00:00",
                    paymentDate: "",
                    amount: 195.239,
                    paymentMethod: "Refund",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 24899015,
                    transactionId: 2,
                    requestedDate: "2017-04-27T00:00:00",
                    paymentDate: "2017-08-10T00:00:00",
                    amount: 251.457,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 24899015,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-08-04T00:00:00",
                    amount: 650.879,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 82959636
        },
        response: {
            data: [
                {
                    membershipId: 82959636,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 82959636,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 82959636,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 3743028
        },
        response: {
            data: [
                {
                    membershipId: 3743028,
                    transactionId: 1,
                    requestedDate: "2017-07-15T00:00:00",
                    paymentDate: "",
                    amount: 1203.75,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 3743028,
                    transactionId: 2,
                    requestedDate: "2017-08-07T00:00:00",
                    paymentDate: "2017-06-16T00:00:00",
                    amount: 999,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 3743028,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-06-25T00:00:00",
                    amount: 1000250.9,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 45635432
        },
        response: {
            data: [
                {
                    membershipId: 45635432,
                    transactionId: 0,
                    requestedDate: "",
                    paymentDate: "2017-08-23T00:00:00",
                    amount: 43854.546,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 45635432,
                    transactionId: 1,
                    requestedDate: "2017-08-07T00:00:00",
                    paymentDate: "2017-06-16T00:00:00",
                    amount: 999,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 5262274
        },
        response: {
            data: [
                {
                    membershipId: 5262274,
                    transactionId: 0,
                    requestedDate: "",
                    paymentDate: "2017-08-23T00:00:00",
                    amount: 43854.546,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        // 119377: UC0222C_AC06_ST008,Single Payment has value of Misalignment is True
        request: {
            membershipId: 65939258
        },
        response: {
            data: [
                {
                    membershipId: 65939258,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 65939258,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-16T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 65939258,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-10-15T00:00:00",
                    amount: 5754.774,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 66375395
        },
        response: {
            data: [
                {
                    membershipId: 66375395,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 66375395,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2018-10-15T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 66375395,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2018-09-15T00:00:00",
                    amount: 72454.5469,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 4004073
        },
        response: {
            data: [
                {
                    membershipId: 4004073,
                    transactionId: 1,
                    requestedDate: "2017-04-15T00:00:00",
                    paymentDate: "",
                    amount: 1102,
                    paymentMethod: "Refund",
                    paymentType: "Cash",
                },
                {
                    membershipId: 4004073,
                    transactionId: 1,
                    requestedDate: "2017-04-27T00:00:00",
                    paymentDate: "2017-09-16T00:00:00",
                    amount: 1099.23,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 4917035
        },
        response: {
            data: [
                {
                    membershipId: 4917035,
                    transactionId: 1,
                    requestedDate: "2016-12-15T00:00:00",
                    paymentDate: "",
                    amount: 2095,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 4917035,
                    transactionId: 2,
                    requestedDate: "2017-01-15T00:00:00",
                    paymentDate: "2017-09-01T00:00:00",
                    amount: 1999.55,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 4917035,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 21184999
        },
        response: {
            data: [
                {
                    membershipId: 21184999,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 21184999,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 21184999,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 133140
        },
        response: {
            data: [
                {
                    membershipId: 133140,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 133140,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 133140,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 92275965
        },
        response: {
            data: [
                {
                    membershipId: 92275965,
                    transactionId: 1,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 1000,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 98837214
        },
        response: {
            data: [
                {
                    membershipId: 98837214,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 98837214,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98837214,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 99122137
        },
        response: {
            data: [
                {
                    membershipId: 99122137,
                    transactionId: 1,
                    requestedDate: "2017-07-15T00:00:00",
                    paymentDate: "",
                    amount: 1203.75,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 99122137,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 99122137,
                    transactionId: 2,
                    requestedDate: "2017-08-07T00:00:00",
                    paymentDate: "2017-06-16T00:00:00",
                    amount: 999,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 82404708
        },
        response: {
            data: [
                {
                    membershipId: 82404708,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82404708,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 82404708,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 9684564
        },
        response: {
            data: [
                //{
                //    membershipId: 9684564,
                //    transactionId: 1,
                //    requestedDate: "",
                //    paymentDate: "2016-09-15T00:00:00",
                //    amount: 200.64,
                //    paymentMethod: "Direct Debit",
                //    paymentType: "Payment Card",
                //},
                {
                    membershipId: 9684564,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 9684564,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 200.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 922004
        },
        response: {
            data: [
                {
                    membershipId: 922004,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 922005
        },
        response: {
            data: [
                {
                    membershipId: 922005,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 922006
        },
        response: {
            data: [
                {
                    membershipId: 922006,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 922010
        },
        response: {
            data: [
                {
                    membershipId: 922010,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 45635433
        },
        response: {
            data: [
                {
                    membershipId: 45635433,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2017-09-15T00:00:00",
                    amount: 806.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 45635434
        },
        response: {
            data: [
                {
                    membershipId: 45635434,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2017-09-15T00:00:00",
                    amount: 806.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 20265534
        },
        response: {
            data: [
                {
                    membershipId: 20265534,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 20265534,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 20265534,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 200.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 2344326
        },
        response: {
            data: [
                {
                    membershipId: 2344326,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 3455432
        },
        response: {
            data: [
                {
                    membershipId: 3455432,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 3455434
        },
        response: {
            data: [
                {
                    membershipId: 3455434,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 3455437
        },
        response: {
            data: [
                {
                    membershipId: 3455437,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 82396771
        },
        response: {
            data: [
                {
                    membershipId: 82396771,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82396771,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 82396771,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 202234
        },
        response: {
            data: [
                {
                    membershipId: 202234,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 270.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 202234,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 280.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 76774256
        },
        response: {
            data: [
                {
                    membershipId: 76774256,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 76774256,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 76774256,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 59325001
        },
        response: {
            data: [
                {
                    membershipId: 59325001,
                    transactionId: 0,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 59325001,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 59325001,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 61634119
        },
        response: {
            data: [
                {
                    membershipId: 61634119,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 61634119,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 61634119,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Payment Card",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 55330138
        },
        response: {
            data: [
                {
                    membershipId: 55330138,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 55330138,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 55330138,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 82397449
        },
        response: {
            data: [
                {
                    membershipId: 82397449,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82397449,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82397449,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 82315417
        },
        response: {
            data: [
                {
                    membershipId: 82315417,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82315417,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82315417,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 20609665
        },
        response: {
            data: [
                {
                    membershipId: 20609665,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 20609665,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 20609665,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 51686368
        },
        response: {
            data: [
                {
                    membershipId: 51686368,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 51686368,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 51686368,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 56446479
        },
        response: {
            data: [
                {
                    membershipId: 56446479,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 56446479,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 56446479,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 66118027
        },
        response: {
            data: [
                {
                    membershipId: 66118027,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 66118027,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 66118027,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 98434236
        },
        response: {
            data: [
                {
                    membershipId: 98434236,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 98434236,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 98434236,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 247858
        },
        response: {
            data: [
                {
                    membershipId: 247858,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 247858,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 247858,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 82570128
        },
        response: {
            data: [
                {
                    membershipId: 82570128,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.94,
                    paymentMethod: "Direct Debit",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 82570128,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.95,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82570128,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.96,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 82601204
        },
        response: {
            data: [
                {
                    membershipId: 82601204,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82601204,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82601204,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 82616798
        },
        response: {
            data: [
                {
                    membershipId: 82616798,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82616798,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82616798,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 82686833
        },
        response: {
            data: [
                {
                    membershipId: 82686833,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82686833,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 82686833,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 408195
        },
        response: {
            data: [
                {
                    membershipId: 408195,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 408195,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 408195,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 72827017
        },
        response: {
            data: [
                {
                    membershipId: 72827017,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 72827017,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 72827017,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 19712168
        },
        response: {
            data: [
                {
                    membershipId: 19712168,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 19712168,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 19712168,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 320010
        },
        response: {
            data: [
                {
                    membershipId: 320010,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320010,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320010,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 320017
        },
        response: {
            data: [
                {
                    membershipId: 320017,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320017,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320017,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    /*{ //UC101v34_AC12_ST009
        request: {
            membershipId: 320019
        },
        response: {
            data: [
                {
                    membershipId: 320019,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320019,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320019,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },*/
    /*{ //UC101v34_AC12_ST007 ,ST014, ST022, ST021
        request: {
            membershipId: 320015
        },
        response: {
            data: [
                {
                    membershipId: 320015,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320015,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320015,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },*/
    {
        request: {
            membershipId: 270390
        },
        response: {
            data: [
                {
                    membershipId: 270390,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 270390,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 270390,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 21309604
        },
        response: {
            data: [
                {
                    membershipId: 21309604,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 21309604,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 21309604,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //Test Case 134590: UC0098Cv3v4_AC13_ST001;
        request: {
            membershipId: 16689000
        },
        response: {
            data: [
                {
                    membershipId: 16689000,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 16689000,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 16689000,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 5754.774,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //Test Case 134592: UC0098Cv3v4_AC14_ST001;
        request: {
            membershipId: 16689008
        },
        response: {
            data: [
                {
                    membershipId: 16689008,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 16689008,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 16689008,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 5754.774,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 35792468
        },
        response: {
            data: [
                {
                    membershipId: 35792468,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 35792468,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 35792468,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 311068
        },
        response: {
            data: [
                {
                    membershipId: 311068,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 311068,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 83168617
        },
        response: {
            data: [
                {
                    membershipId: 83168617,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 83168617,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 83168617,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 111000
        },
        response: {
            data: [
                {
                    membershipId: 111000,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 111000,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 111000,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 320013
        },
        response: {
            data: [
                {
                    membershipId: 320013,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320013,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320013,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 320014
        },
        response: {
            data: [
                {
                    membershipId: 320014,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320014,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320014,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 320016
        },
        response: {
            data: [
                {
                    membershipId: 320016,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320016,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320016,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    /*{	// QN UC101v34_AC12_ST003, UC101v34_AC12_ST013
        request: {
            membershipId: 484848
        },
        response: {
            data: [
                {
                    membershipId: 484848,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 484848,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 484848,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },*/
    {
        request: {
            membershipId: 98111111
        },
        response: {
            data: [
                {
                    membershipId: 98111111,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98111111,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98111111,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 98111112
        },
        response: {
            data: [
                {
                    membershipId: 98111112,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98111112,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98111112,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 98111113
        },
        response: {
            data: [
                {
                    membershipId: 98111113,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98111113,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2017-08-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98111113,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2017-10-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 72212962
        },
        response: {
            data: [
                {
                    membershipId: 72212962,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 72212962,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-16T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 72212962,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-10-15T00:00:00",
                    amount: 5754.774,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 99999999
        },
        response: {
            data: [
                {
                    membershipId: 99999999,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 99999999,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 99999999,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Bank Account",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 170390
        },
        response: {
            data: [
                {
                    membershipId: 170390,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170390,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170390,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170391
        },
        response: {
            data: [
                {
                    membershipId: 170391,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170391,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170391,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170392
        },
        response: {
            data: [
                {
                    membershipId: 170392,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170392,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170392,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170393
        },
        response: {
            data: [
                {
                    membershipId: 170393,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170393,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170393,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170394
        },
        response: {
            data: [
                {
                    membershipId: 170394,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170394,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170394,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170395
        },
        response: {
            data: [
                {
                    membershipId: 170395,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170395,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170395,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170396
        },
        response: {
            data: [
                {
                    membershipId: 170396,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170396,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170396,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170397
        },
        response: {
            data: [
                {
                    membershipId: 170397,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170397,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170397,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170398
        },
        response: {
            data: [
                {
                    membershipId: 170398,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170398,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170398,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170399
        },
        response: {
            data: [
                {
                    membershipId: 170399,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170399,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170399,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 170400
        },
        response: {
            data: [
                {
                    membershipId: 170400,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 170400,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 170400,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11122216
        },
        response: {
            data: [
                {
                    membershipId: 11122216,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 11122216,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11122216,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11122217
        },
        response: {
            data: [
                /* {
                     membershipId: 11122217,
                     transactionId: 1,
                     requestedDate: "2016-09-15T00:00:00",
                     paymentDate: "2016-09-15T00:00:00",
                     amount: 387.64,
                     paymentMethod: "Direct Debit",
                     paymentType: "Payment Card",
                 },
                 {
                     //UC101Cv34_AC11_ST006
                     membershipId: 11122217,
                     transactionId: 2,
                     requestedDate: "2016-09-15T00:00:00",
                     paymentDate: "2016-09-15T00:00:00",
                     amount: 387.65,
                     paymentMethod: "Single Payment",
                     paymentType: "Bank Account",
                 },*/
                {
                    membershipId: 11122217,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11122218
        },
        response: {
            data: [
                {
                    membershipId: 11122218,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 11122218,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11122218,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11122219
        },
        response: {
            data: [
                {
                    membershipId: 11122219,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 11122219,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11122219,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11122220
        },
        response: {
            data: [
                {
                    membershipId: 11122220,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 11122220,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11122220,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11122223
        },
        response: {
            data: [
                {
                    membershipId: 11122223,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 11122223,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11122223,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 11122224
        },
        response: {
            data: [
                {
                    membershipId: 11122224,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                },
                {
                    membershipId: 11122224,
                    transactionId: 2,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 11122224,
                    transactionId: 3,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
            ]
        }
    },
    {
        request: {
            membershipId: 74412962
        },
        response: {
            data: [
                {
                    membershipId: 74412962,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2017-09-23T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #1
        request: {
            membershipId: 35790009
        },
        response: {
            data: [
                {
                    membershipId: 35790009,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 200.64,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #2
        request: {
            membershipId: 14782589
        },
        response: {
            data: [
                {
                    membershipId: 14782589,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #3
        request: {
            membershipId: 36984709
        },
        response: {
            data: [
                {
                    membershipId: 36984709,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #4
        request: {
            membershipId: 7722456
        },
        response: {
            data: [
                {
                    membershipId: 7722456,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #5
        request: {
            membershipId: 6652123
        },
        response: {
            data: [
                {
                    membershipId: 6652123,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #6
        request: {
            membershipId: 6785200
        },
        response: {
            data: [
                {
                    membershipId: 6785200,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #6
        request: {
            membershipId: 6785200
        },
        response: {
            data: [
                {
                    membershipId: 6785200,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #7
        request: {
            membershipId: 5287469
        },
        response: {
            data: [
                {
                    membershipId: 5287469,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        //mbs #8
        request: {
            membershipId: 55868699
        },
        response: {
            data: [
                {
                    membershipId: 55868699,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 1233216
        },
        response: {
            data: [
                {
                    membershipId: 1233216,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 1233212
        },
        response: {
            data: [
                {
                    membershipId: 1233212,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 1233211
        },
        response: {
            data: [
                {
                    membershipId: 1233211,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 1233213
        },
        response: {
            data: [
                {
                    membershipId: 1233213,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 1233214
        },
        response: {
            data: [
                {
                    membershipId: 1233214,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 1233215
        },
        response: {
            data: [
                {
                    membershipId: 1233215,
                    transactionId: 1,
                    requestedDate: "",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 500.84,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    // Data for membership 59325001
    {
        request: {
            membershipId: 311111
        },
        response: {
            data: [
                {
                    membershipId: 311111,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 311111,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 311111,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 5754.774,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 511111
        },
        response: {
            data: [
                {
                    membershipId: 511111,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 8674.56768,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 511111,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 72454.546,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 511111,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 5754.774,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {
        request: {
            membershipId: 98111114
        },
        response: {
            data: [
                {
                    membershipId: 98111114,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98111114,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 98111114,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    } /*,
    {	//  UC0100Cv34_AC14_ST017
        request: {
            membershipId: 320024
        },
        response: {
            data: [
                {
                    membershipId: 320024,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320024,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320024,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    },
    {	//  UC0100Cv34_AC14_ST018
        request: {
            membershipId: 320025
        },
        response: {
            data: [
                {
                    membershipId: 320025,
                    transactionId: 1,
                    requestedDate: "2016-09-15T00:00:00",
                    paymentDate: "",
                    amount: 387.66,
                    paymentMethod: "Refund",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320025,
                    transactionId: 2,
                    requestedDate: "2016-12-27T00:00:00",
                    paymentDate: "2016-09-15T00:00:00",
                    amount: 387.65,
                    paymentMethod: "Single Payment",
                    paymentType: "Bank Account",
                },
                {
                    membershipId: 320025,
                    transactionId: 3,
                    requestedDate: "",
                    paymentDate: "2016-01-15T00:00:00",
                    amount: 387.63,
                    paymentMethod: "Direct Debit",
                    paymentType: "Payment Card",
                }
            ]
        }
    }*/
];
//# sourceMappingURL=getPaymentPending.js.map