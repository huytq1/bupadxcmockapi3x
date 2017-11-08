export default [
    {
        request: {
            membershipId: 11513201,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
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
            membershipId: 11513202,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
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
            membershipId: 11513203,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
            }
        },
        response: {
            status: 422,
            headers: {
                "UserBranchNotReconciled": "Payments cannot be processed as teller has not been reconciled."
            }
        }
    },	
    {
        request: {
            membershipId: 11513204,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
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
            membershipId: 11513205,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
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
            membershipId: 11513206,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
            }
        },
        response: {
            status: 422,
            headers: {
                "Other": "Data cannot be returned as it received a bad request.Please try again and contact the Bupa IS Service Desk if the issue persists. (error 422- Other)"
            }
        }
    },
    {
        request: {
            membershipId: 11513200,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
            }
        },
        response: {
            status: 200
        }
    },
    {
        request: {
            membershipId: 11513200,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
            }
        },
        response: {
            status: 200
        }
    },
    {
        request: {
            membershipId: 83085910,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
            }
        },
        response: {
            status: 200
        }
    },
    {
        request: {
            membershipId: 83085910,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
            }
        },
        response: {
            status: 200
        }
    },
	
	// Data of QC team
	{
        request: {
            membershipId: 82236431,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
            }
        },
        response: {
            status: 200
        }
    },

    {   // Test case 119370: UC0222C_AC06_ST001
        request: {
            membershipId: 16686701,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
            }
        },
        response: {
            status: 200
        }
    },
	{ //Tung Nguyen TCID:119377
        request: {
            membershipId: 65939258,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-16T00:00:00"
            }
        },
        response: {
            status: 422,
            headers: {
                "UserIdNotSetUpInBOSS": "Payments cannot be processed as user is not setup correctly in BOSS."
            }
        }
    },		
	{ // Data of UC0222C_AC06_ST003
        request: {
            membershipId: 133140,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
            }
        },
        response: {
            status: 200
        }
    },
	//Data for UC0222C_AC06_ST011
	{
        request: {
            membershipId: 133140,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
            }
        },
        response: {
            status: 422,
            headers: {
                "UserBranchNotReconciled": "Payments cannot be processed as teller has not been reconciled."
            }
        } 
    }, 	
	{ // Test TC 119371 UC0222C_AC06_ST002
        request: {
            membershipId: 99122137,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
            }
        },
        response: {
            status: 200
        }
    },
	{
        request: {
            membershipId: 21184999,
            body: {
                paymentMethod: "Single Payment",
                paymentDate: "2016-09-15T00:00:00"
            }
        },
        response: {
            status: 422,
            headers: {
                "Other": "Data cannot be returned as it received a bad request.Please try again and contact the Bupa IS Service Desk if the issue persists. (error 422- Other)"
            }
        }
    },
    {
        request: {
            membershipId: 21184999,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
            }
        },
        response: {
            status: 422,
            headers: {
                "UserIdNotAssociatedWithBranch": "Payments cannot be processed as teller has not been started up."
            }
        }
    },
	{ // Chon Vuong - Test Case 119378: UC0222C_AC06_ST009
        request: {
            membershipId: 82404708,
            body: {
                paymentMethod: "Refund",
                transactionId: 3
            }
        },
        response: {
            status: 422,
            headers: {
                "UserIdNotAssociatedWithBranch": "Payments cannot be processed as teller has not been started up."
            }
        }
    },
	{ // Chon Vuong 119373: UC0222C_AC06_ST004
        request: {
            membershipId: 82959636,
            body: {
                paymentMethod: "Refund",
                transactionId: 1
            }
        },
        response: {
            status: 200
        }
    }	
];
