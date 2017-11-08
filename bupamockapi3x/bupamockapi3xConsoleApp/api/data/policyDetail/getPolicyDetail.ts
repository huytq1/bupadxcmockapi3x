export default [
    {
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
    //Test TC 73235 UC0100C_AC04_ST002
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
    {
        request: {
            membershipId: 21026018,
        },
        response: {
            data: {
                medicareRebate: "ACB",
                suspensionType: "Type1",
                levelOfCover: "AIC",
                productScale: "Product",
                totalCombinedLhc: 123,
                adult1Status: "Status 1",
                adult2Status: "Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-05-18"
            }
        }
    },
    {
        request: {
            membershipId: 12345678,
        },
        response: {
            data: {
                medicareRebate: "ACB",
                suspensionType: "Type1",
                levelOfCover: "AIC",
                productScale: "Product",
                totalCombinedLhc: 123,
                adult1Status: "Status 1",
                adult2Status: "Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-05-18"
            }
        }
    },
    {	// Test Case 106930 UC0106Cv2_UC0175C_UC0264C_AC09_ST008
        request: {
            membershipId: 98837214,
        },
        response: {
            data: {
                medicareRebate: "1% Rebate",
                suspensionType: "Type 501",
                levelOfCover: "OSHC/AIC",
                productScale: "Product Scale 1",
                totalCombinedLhc: 123,
                adult1Status: "Adult Status 1",
                adult2Status: "Adult Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-01-18"
            }
        }
    },
	{
        request: {
            membershipId: 9684564,
        },
        response: {
            data: {
              medicareRebate: "1% Rebate",
              suspensionType: "Type 501",
              levelOfCover: "OSHC/AIC",
              productScale: "Product Scale 1",
              totalCombinedLhc: 123,
              adult1Status: "Adult Status 1",
              adult2Status: "Adult Status 2",
              policyState: "NSW",
              lastChangeDate: "2017-01-18"
            }
        }
    },
	{
        request: {
            membershipId: 99122137,
        },
        response: {
            data: {
                medicareRebate: "",
                suspensionType: "",
                levelOfCover: "",
                productScale: "",
                totalCombinedLhc: 0,
                adult1Status: "",
                adult2Status: "",
                policyState: "",
                lastChangeDate: ""
            }
        }
    },
	{
        request: {
            membershipId: 59325001,
        },
        response: {
            data: {
                medicareRebate: "0",
                suspensionType: "",
                levelOfCover: "",
                productScale: "",
                totalCombinedLhc: 0,
                adult1Status: "",
                adult2Status: "",
                policyState: "",
                lastChangeDate: ""
            }
        }
    },
	{
        request: {
            membershipId: 56446479,
        },
        response: {
            data: {
                medicareRebate: "ACB",
                suspensionType: "Type1",
                levelOfCover: "AIC",
                productScale: "Product Scale 1",
                totalCombinedLhc: 123,
                adult1Status: "Status 1",
                adult2Status: "Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-05-18"
            }
        }
    },	//106831_UC0264C_AC39_ST003; UC0264C_AC34_ST001
    {
        request: {
            membershipId: 55330138,
        },
        response: {
            data: {
                medicareRebate: "ACB",
                suspensionType: "Type1",
                levelOfCover: "AIC",
                productScale: "",
                totalCombinedLhc: 123,
                adult1Status: "Status 1",
                adult2Status: "Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-05-18"
            }
        }
    },	//UC0264C_AC39_ST006; UC0264C_AC42_ST002

	// Test TC106934 UC0106Cv2_UC0175C_UC0264C_AC09_ST012
	{
        request: {
            membershipId: 92206127,
        },
        response: {
            data: {
                medicareRebate: "123.546%",
                suspensionType: "Type1",
                levelOfCover: "OSHC",
                productScale: "Family",
                totalCombinedLhc: 123,
                adult1Status: "Status 1",
                adult2Status: "Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-05-18"
            }
        }
    },
	{ // Tung Nguyen - ID 106930: UC0106Cv2_UC0175C_UC0264C_AC09_ST008
        request: {
            membershipId: 91975193,
        },
        response: {
            data: {
                medicareRebate: "ACB",
                suspensionType: "Type1",
                levelOfCover: "OSHC",
                productScale: "",
                totalCombinedLhc: 123,
                adult1Status: "Status 1",
                adult2Status: "Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-05-18"
            }
        }
    },
	{ // Tung Nguyen - 106931: UC0106Cv2_UC0175C_UC0264C_AC09_ST009
        request: {
            membershipId: 66375395,
        },
        response: {
            data: {
                medicareRebate: "ACB",
                suspensionType: "Type1",
                levelOfCover: "AIC",
                productScale: "",
                totalCombinedLhc: 123,
                adult1Status: "Status 1",
                adult2Status: "Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-05-18"
            }
        }
    },
	{	//Test Case 106931 UC0106Cv2_UC0175C_UC0264C_AC09_ST009
        request: {
            membershipId: 59382713,
        },
        response: {
            data: {
                medicareRebate: "ACB",
                suspensionType: "Type1",
                levelOfCover: "AIC",
                productScale: "Product",
                totalCombinedLhc: 123,
                adult1Status: "Status 1",
                adult2Status: "Status 2",
                policyState: "NSW",
                lastChangeDate: "2017-05-18"
            }
        }
    }
];
