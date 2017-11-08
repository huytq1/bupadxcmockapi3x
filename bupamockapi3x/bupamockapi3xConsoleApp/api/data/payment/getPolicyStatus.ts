export default [
    {
        request: {
            membershipId: 422422
        },
        response: {
            status: 422,
            headers: {
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    {
        request: {
            membershipId: 21026018
        },
        response: {
            data: {
                enrolmentDate: "2017-08-20T00:00:00.000Z",
                statusDate: "2017-08-21T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    /*{ //AC04_ST014
        request: {
            membershipId: 320016
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
            }
        }
    },
    { //AC04_ST016
        request: {
            membershipId: 320016
        },
        response: {
            status: 422,
            headers: {
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserBranchNotReconciled"
            }
        }
    },*/
    //{//AC04_ST017
    //    request: {
    //        membershipId: 320016
    //    },
    //    response: {
    //        status: 422,
    //        headers: {
    //            "Access-Control-Expose-Headers": "ErrorCode",
    //            "ErrorCode": "N/A"
    //        }
    //    }
    //},
    //{ //AC04_ST015
    //    request: {
    //        membershipId: 320016
    //    },
    //    response: {
    //        status: 404,
    //        headers: {
    //            "Access-Control-Expose-Headers": "ErrorCode",
    //            "ErrorCode": "MembershipIdNotFound"
    //        }
    //    }
    //},
    {    //  Test Case 134571: UC0100Cv3v4_AC15_ST001
        request: {
            membershipId: 16686701
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-05-01T00:00:00.000Z",
                status: "Ceased",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 45635431
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-05-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 5262274
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922001
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922002
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 82616798
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922011
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 45635433
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 45635434
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 3455431
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 3455434
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 3455436
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 3455437
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  UC)318C
        request: {
            membershipId: 61634119
        },
        response: {
            data: {
                enrolmentDate: "2017-09-27T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922003
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922004
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
	{    // UC0318
        request: {
            membershipId: 74212962
        },
        response: {
            data: {
                enrolmentDate: "2017-09-01T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },
	{    // UC0318
        request: {
            membershipId: 56446479
        },
        response: {
            data: {
                enrolmentDate: "2017-10-18T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922005
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922006
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922007
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922008
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922009
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 922010
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 24899015
        },
        response: {
            data: {
                enrolmentDate: "2017-09-01T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },
    {    //  Test Case 134573: UC0100Cv3v4_AC15_ST003
        request: {
            membershipId: 28811111
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2018-10-01T00:00:00.000Z",
                status: "Ceased",
                statusReason: ""
            }

        }
    },
    //{    //  Test Case 134574: UC0100Cv3v4_AC15_ST004
    //    request: {
    //        membershipId: 4917035
    //    },
    //    response: {
    //        data: {
    //            enrolmentDate: null,
    //            statusDate: "2014-10-01T00:00:00.000Z",
    //            status: "Ceased",
    //            statusReason: ""
    //        }

    //    }
    //},
    {    //  Test Case 134575: UC0100Cv3v4_AC15_ST005
        request: {
            membershipId: 4917035
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-07-20T00:00:00.000Z",
                status: "Ceased",
                statusReason: ""
            }

        }
    },
    //{    //  Test Case 134577: UC0100Cv3v4_AC15_ST007
    //    request: {
    //        membershipId: 320011
    //    },
    //    response: {
    //        data: {
    //            enrolmentDate: null,
    //            statusDate: "2018-11-05T00:00:00.000Z",
    //            status: "Suppense",
    //            statusReason: ""
    //        }

    //    }
    //},
    //{    //  Test Case 134577: UC0100Cv3v4_AC15_ST008
    //    request: {
    //        membershipId: 320011
    //    },
    //    response: {
    //        data: {
    //            enrolmentDate: null,
    //            statusDate: "2017-07-20T00:00:00.000Z",
    //            status: "Suppense",
    //            statusReason: ""
    //        }

    //    }
    //},
    //{    //  Test Case 134577: UC0100Cv3v4_AC15_ST009
    //    request: {
    //        membershipId: 320011
    //    },
    //    response: {
    //        data: {
    //            enrolmentDate: null,
    //            statusDate: "2019-11-05T00:00:00.000Z",
    //            status: "Suppense",
    //            statusReason: ""
    //        }

    //    }
    //},
    {    //  Test Case 134577: UC0100Cv3v4_AC15_ST010
        request: {
            membershipId: 320011
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2019-11-05T00:00:00.000Z",
                status: "Ceased",
                statusReason: ""
            }

        }
    },
    //{    //  Test Case 134576: UC0100Cv3v4_AC15_ST006
    //    request: {
    //        membershipId: 4917035
    //    },
    //    response: {
    //        data: {
    //            enrolmentDate: null,
    //            statusDate: "2019-11-05T00:00:00.000Z",
    //            status: "Suppense",
    //            statusReason: ""
    //        }

    //    }
    //},
    {   //  Test Case 134572: UC0100Cv3v4_AC15_ST002 
        request: {
            membershipId: 9684564
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-05-01T00:00:00.000Z",
                status: "Suppense",
                statusReason: ""
            }

        }
    },
    {   //  Test Case 134574: UC0100Cv3v4_AC15_ST004
        request: {
            membershipId: 20265534
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2016-12-22T00:00:00.000Z",
                status: "Ceased",
                statusReason: ""
            }

        }
    },
    {
        request: {
            membershipId: 789987
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-20T00:00:00.000Z",
                status: "Ceased",
                statusReason: ""
            }

        }
    },
    {
        request: {
            membershipId: 80114531
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2015-09-20T00:00:00.000Z",
                status: "Ceased",
                statusReason: ""
            }

        }
    },
    { //134878: UC0318C_AC03_ST003
        request: {
            membershipId: 66375395
        },
        response: {
            data: {
                enrolmentDate: "2017-10-20T00:00:00.000Z",
                statusDate: "2017-09-20T00:00:00.000Z",
                status: "Ceased",
                statusReason: "CRM paid"
            }

        }
    },
    {
        request: {
            membershipId: 16686701
        },
        response: {
            data: {
                enrolmentDate: "2017-11-21T00:00:00.000Z",
                statusDate: "2017-10-21T00:00:00.000Z",
                status: "Suppense",
                statusReason: "No Reason"
            }

        }
    },
    {
        request: {
            membershipId: 21026018
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-11-30T00:00:00.000Z",
                status: "Suppense",
                statusReason: ""
            }

        }
    },
    { //UC0318C_AC01_ST001,UC0318C_AC03_ST002
        request: {
            membershipId: 65939258
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-11-30T00:00:00.000Z",
                status: "Suspended",
                statusReason: "CRM paid"
            }

        }
    },
    { //134876: UC0318C_AC03_ST001
        request: {
            membershipId: 91975193
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-11-30T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },
    {
        request: {
            membershipId: 59325001
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-11-30T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },

    {//  Test Case UC0098Cv34 mbs# 1
        request: {
            membershipId: 35790009
        },
        response: {
            data: {
            enrolmentDate: "2018-12-22T00:00:00.000Z",
            statusDate: "2017-09-01T00:00:00.000Z",
            status: "Active",
            statusReason: "CRM paid"
            }

        }
    },

    {//  Test Case UC0098Cv34 mbs# 2
        request: {
            membershipId: 14782589
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },

    {//  Test Case UC0098Cv34 mbs# 3
        request: {
            membershipId: 36984709
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },

    {//  Test Case UC0098Cv34 mbs# 4
        request: {
            membershipId: 7722456 
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },

    {//  Test Case UC0098Cv34 mbs# 5
        request: {
            membershipId: 6652123
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },

    {//  Test Case UC0098Cv34 mbs# 6
        request: {
            membershipId: 6785200
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },

    {//  Test Case UC0098Cv34 mbs# 7
        request: {
            membershipId: 5287469
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },

    {//  Test Case UC0098Cv34 mbs# 8
        request: {
            membershipId: 55868699
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 270390
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 270391
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0098Cv34
        request: {
            membershipId: 98111113
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {   
        request: {
            membershipId: 311111
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },

    {   
        request: {
            membershipId: 511111
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    
        request: {
            membershipId: 4917035
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {
        request: {
            membershipId: 61634119
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {
        request: {
            membershipId: 76774256
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {
        request: {
            membershipId: 82315417
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
    {    //  Test Case UC0101Cv34_AC12_ST010
        request: {
            membershipId: 320015
        },
        response: {
            data: {
                enrolmentDate: null,
                statusDate: "2017-05-01T00:00:00.000Z",
                status: "Active",
                statusReason: ""
            }

        }
    },
	{//  Test Case UC0318 ST016_St003
        request: {
            membershipId: 133140
        },
        response: {
            data: {
                enrolmentDate: "2018-12-22T00:00:00.000Z",
                statusDate: "2017-09-01T00:00:00.000Z",
                status: "Active",
                statusReason: "CRM paid"
            }

        }
    }
]
