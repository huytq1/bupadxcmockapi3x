export default [
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
                "Access-Control-Expose-Headers": "ErrorCode",
                "ErrorCode": "UserIdNotSetUpInBOSS"
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
    ////////// QC data
    // UC0280C_AC03 Error when Confirm
    {
        request: {
            membershipId: 28011111,
            body: {
                frequency: 'Yearly'
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
            membershipId: 28011112,
            body: {
                frequency: 'Monthly'
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
            membershipId: 28011113,
            body: {
                frequency: 'Quarterly'
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
            membershipId: 28011114,
            body: {
                frequency: 'Nil'
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
        request: req => true,
        response: {
            data: "Request processed."
        }
    }    
];
