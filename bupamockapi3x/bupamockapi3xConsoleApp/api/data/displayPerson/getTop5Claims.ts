export default [
    {
        request: {
            personId: 209041561,
            membershipId: 11111111
        },
        response: {
            data: {
                "currentYearPaid": 22334,
                "prevYearPaid": 23241,
                "extraTop5Claims": [
                    {
                        "category": "type 1",
                        "amountPaid": 2
                    },
                    {
                        "category": "type 2",
                        "amountPaid": 3
                    },
                    {
                        "category": "type 5",
                        "amountPaid": 5
                    }

                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 2555,
                        "totalAmountClaimed": 4431,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 2334,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 0,
                        "totalAmountClaimed": 0,
                        "totalClaims": 0
                    }

                ]
            }
        }
    },
    {
        request: {
            personId: 209041561,
            membershipId: 33333333
        },
        response: {
            data: {
                "currentYearPaid": 65044,
                "prevYearPaid": 54400,
                "extraTop5Claims": [
                    {
                        "category": "type 1",
                        "amountPaid": 5000
                    },
                    {
                        "category": "type 2",
                        "amountPaid": 10000
                    },
                    {
                        "category": "type 5",
                        "amountPaid": 15600
                    },
                    {
                        "category": "type 7",
                        "amountPaid": 44444
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 5000,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 2500,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 0,
                        "totalAmountClaimed": 0,
                        "totalClaims": 0
                    }
                ]
            }
        }
    },
    //QC data
    {   //Test case 121071 UC0293C_AC05_ST002
        request: {
            personId: 197298657,
            membershipId: 24899015
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 4700,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "Extra 3",
                        "amountPaid": 705
                    },
                    {
                        "category": "Extra 4",
                        "amountPaid": 1100
                    },
                    {
                        "category": "Extra 5",
                        "amountPaid": 1050
                    }
                ],
                "medicalHospitalYearlySummary": [    
					{
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },                
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {   //Test case 121070 UC0293C_AC05_ST001
        request: {
            personId: 247494399,
            membershipId: 24899015
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 5400,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 980
                    },
                    /*{
                        "category": "Extra 3",
                        "amountPaid": 705
                    },
                    {
                        "category": "Extra 4",
                        "amountPaid": 1100
                    },*/
                    {
                        "category": "Extra 5",
                        "amountPaid": 1050
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {   //Test case 121071 UC0293C_AC05_ST002
        request: {
            personId: 247494397,
            membershipId: 24899015
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 5400,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "Extra 3",
                        "amountPaid": 705
                    },
                    {
                        "category": "Extra 4",
                        "amountPaid": 1100
                    },
                    {
                        "category": "Extra 5",
                        "amountPaid": 1050
                    }
                ],
                "medicalHospitalYearlySummary": [                    
					{
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 0,
                        "totalAmountClaimed": 0,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {   //Test case 121053: UC0293C_AC01_ST003
        request: {
            personId: 185050295,
            membershipId: 247858
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 4700,
                "extraTop5Claims": [
                    {
                        "category": "Cate 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Cate 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "Cate 3",
                        "amountPaid": 705
                    },
                    {
                        "category": "Cate 4",
                        "amountPaid": 1100
                    },
                    {
                        "category": "Cate 5",
                        "amountPaid": 1050
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {   //Test case 121053: UC0293C_AC01_ST003
        request: {
            personId: 185050295,
            membershipId: 247858
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 4700,
                "extraTop5Claims": [
                    {
                        "category": "Cate 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Cate 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "Cate 3",
                        "amountPaid": 705
                    },
                    {
                        "category": "Cate 4",
                        "amountPaid": 1100
                    },
                    {
                        "category": "Cate 5",
                        "amountPaid": 1050
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    }, {   //Test case 121071 UC0293C_AC05_ST002
        request: {
            personId: 197298657,
            membershipId: 24899015
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 4700,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "Extra 3",
                        "amountPaid": 705
                    },
                    {
                        "category": "Extra 4",
                        "amountPaid": 1100
                    },
                    {
                        "category": "Extra 5",
                        "amountPaid": 1050
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {   //Test Case 121080: UC0293C_AC13_ST001
        request: {
            personId: 185264849,
            membershipId: 408195
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 4700,
                "extraTop5Claims": [
                    {
                        "category": "C 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "C 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "C 3",
                        "amountPaid": 705
                    },
                    {
                        "category": "C 4",
                        "amountPaid": 1100
                    },
                    {
                        "category": "C 5",
                        "amountPaid": 1050
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {   //Test case 121064 UC0293C_AC07_ST002
        request: {
            personId: 247494398,
            membershipId: 24899015
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 0,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "Extra 3",
                        "amountPaid": 705
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {   //Test case 121076 UC0293C_AC09_ST002
        request: {
            personId: 247494396,
            membershipId: 24899015
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 5000,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "Extra 3",
                        "amountPaid": 705
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {   
        request: {
            personId: 35791246,
            membershipId: 10000001
        },
        response: {
            data: {
                "currentYearPaid": 6500,
                "prevYearPaid": 4700,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 500
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 980
                    },
                    {
                        "category": "Extra 3",
                        "amountPaid": 705
                    },
                    {
                        "category": "Extra 4",
                        "amountPaid": 1100
                    },
                    {
                        "category": "Extra 5",
                        "amountPaid": 1050
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3800,
                        "totalAmountClaimed": 4200,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1900,
                        "totalAmountClaimed": 2900,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1400,
                        "totalAmountClaimed": 2000,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {
        request: {
            personId: 35791246,
            membershipId: 10000002
        },
        response: {
            data: {
                "currentYearPaid": 6600,
                "prevYearPaid": 4800,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 501
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 890
                    },
                    {
                        "category": "Extra 3",
                        "amountPaid": 706
                    },
                    {
                        "category": "Extra 4",
                        "amountPaid": 1101
                    },
                    {
                        "category": "Extra 5",
                        "amountPaid": 1051
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3801,
                        "totalAmountClaimed": 4201,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1901,
                        "totalAmountClaimed": 2901,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1401,
                        "totalAmountClaimed": 2001,
                        "totalClaims": 2
                    }
                ]
            }
        }
    },
    {
        request: {
            personId: 35791246,
            membershipId: 10000003
        },
        response: {
            data: {
                "currentYearPaid": 7000,
                "prevYearPaid": 5100,
                "extraTop5Claims": [
                    {
                        "category": "Extra 1",
                        "amountPaid": 502
                    },
                    {
                        "category": "Extra 2",
                        "amountPaid": 891
                    },
                    {
                        "category": "Extra 3",
                        "amountPaid": 707
                    },
                    {
                        "category": "Extra 4",
                        "amountPaid": 1102
                    },
                    {
                        "category": "Extra 5",
                        "amountPaid": 1052
                    }
                ],
                "medicalHospitalYearlySummary": [
                    {
                        "year": 2017,
                        "totalAmountPaid": 3802,
                        "totalAmountClaimed": 4202,
                        "totalClaims": 3
                    },
                    {
                        "year": 2016,
                        "totalAmountPaid": 1902,
                        "totalAmountClaimed": 2902,
                        "totalClaims": 4
                    },
                    {
                        "year": 2015,
                        "totalAmountPaid": 1402,
                        "totalAmountClaimed": 2002,
                        "totalClaims": 2
                    }
                ]
            }
        }
    }
];
