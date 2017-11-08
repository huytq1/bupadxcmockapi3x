export default [
    {
        request: {
            membershipId: 789987
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 987789
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 922001,
            claimNumber: "111"
        },
        response: {
            data: {
                status: "Paid",
                source: "ABC",
                statusReason: "Active",
                claimNumber: "111",
                claimDate: "2017-10-16T09:53:59.317Z",
                totalFeeCharged: 0,
                totalBenefit: 0,
                payments: [
                    {
                        statusDate: "2017-10-16T09:53:59.332Z",
                        paymentType: "Bank Account",
                        payee: "Thao Huynh",
                        paymentDetails: "Thao Huynh - 123456 - 7894561230",
                        amount: 99,
                        status: "Paid",
                        statusReason: "Paid Reason"
                    },
                    {
                        statusDate: "2017-10-16T09:53:59.332Z",
                        paymentType: "Cash",
                        payee: "Thao Huynh",
                        paymentDetails: "Thao Huynh - 123456 - 7894561230",
                        amount: 1231,
                        status: "Rejected",
                        statusReason: "Rejected Reason"
                    }
                ],
                claimItemGroups: [
                    {
                        patient: "patient 2154",// View 1-RHS-Claims Tab, View 2-RHS-Section 1
                        dateOfBirth: "2017-10-16T09:53:59.332Z",// View 1-RHS-Claims Tab 
                        provider: {
                            name: "provider 3257",// View 1-RHS-Claims Tab, View 2-RHS-Section 2-Column 1
                            number: "215457",//View 2-RHS-Section 2-Column 1
                            address: "2154 address 1" //View 2-RHS-Section 2-Column 1
                        },
                        modality: "modality 2154", // View 1-RHS-Claims Tab
                        serviceDate: "2017-10-16T09:53:59.332Z", // View 1-RHS-Claims Tab, View 2-RHS-Section 1
                        feeCharged: 87165, // View 1-RHS-Claims Tab
                        benefit: 154, // View 1-RHS-Claims Tab 
                        levelOfCover: "lever of cover 21547", // View 2-RHS-Section 1
                        paymentType: "Payment Card", // View 2-RHS-Section 1
                        claimItems: [ /*View 2 will be populated*/
                            {
                                itemNumber: "21354787", // View 2-LHS
                                numberOfServices: 15184, // View 2-LHS
                                feeCharged: 48.1, // View 2-LHS
                                benefit: 578.21, // View 2-LHS
                                outOfPocket: 5.12, // View 2-LHS

                                status: "Rejected", // View 2-LHS
                                statusReason: "rejected pending", // View 2-LHS -Popup
                                benefitBonus: 54897.11, // View 2-RHS-Section 2-Column 2
                                topUpBonus: 47.121, // View 2-RHS-Section 2-Column 2
                                stepDown: "Test 2154875656489", //View 2-RHS-Section 2-Column 2
                                serviceDescription: "Test 5487" // View 2-RHS-Section 2-Column 2
                            }
                        ]
                    }

                ]
            }
        }
    },
    {
        request: {
            membershipId: 922001,
            claimNumber: "222"
        },
        response: {
            data: {
                status: "Paid",
                source: "ABC",
                statusReason: "Active",
                claimNumber: "222",
                claimDate: "2017-10-16T09:53:59.317Z",
                totalFeeCharged: 0,
                totalBenefit: 0,
                payments: [
                    {
                        statusDate: "2017-10-16T09:53:59.332Z",
                        paymentType: "Bank Account",
                        payee: "Thao Huynh",
                        paymentDetails: "Thao Huynh - 123456 - 7894561230",
                        amount: 99,
                        status: "Paid",
                        statusReason: "Paid Reason"
                    },
                    {
                        statusDate: "2017-10-16T09:53:59.332Z",
                        paymentType: "Cash",
                        payee: "Thao Huynh",
                        paymentDetails: "Thao Huynh - 123456 - 7894561230",
                        amount: 1231,
                        status: "Rejected",
                        statusReason: "Rejected Reason"
                    }
                ],
                claimItemGroups: [
                    {
                        patient: "patient 545444",// View 1-RHS-Claims Tab, View 2-RHS-Section 1
                        dateOfBirth: "2017-10-16T09:53:59.332Z",// View 1-RHS-Claims Tab 
                        provider: {
                            name: "provider 23467",// View 1-RHS-Claims Tab, View 2-RHS-Section 2-Column 1
                            number: "p001",//View 2-RHS-Section 2-Column 1
                            address: "8721346 address 1" //View 2-RHS-Section 2-Column 1
                        },
                        modality: "modality 5168498", // View 1-RHS-Claims Tab
                        serviceDate: "2017-10-16T09:53:59.332Z", // View 1-RHS-Claims Tab, View 2-RHS-Section 1
                        feeCharged: 111, // View 1-RHS-Claims Tab
                        benefit: 11, // View 1-RHS-Claims Tab 
                        levelOfCover: "lever of cover 213487", // View 2-RHS-Section 1
                        paymentType: "Payment Card", // View 2-RHS-Section 1
                        claimItems: [ /*View 2 will be populated*/
                            {
                                itemNumber: "2135487", // View 2-LHS
                                numberOfServices: 15184, // View 2-LHS
                                feeCharged: 2138787.1, // View 2-LHS
                                benefit: 2132386.21, // View 2-LHS
                                outOfPocket: 21354684.12, // View 2-LHS

                                status: "Paid", // View 2-LHS
                                statusReason: "Good", // View 2-LHS -Popup
                                benefitBonus: 221879.11, // View 2-RHS-Section 2-Column 2
                                topUpBonus: 2135789722.121, // View 2-RHS-Section 2-Column 2
                                stepDown: "Test 21548756 2546878", //View 2-RHS-Section 2-Column 2
                                serviceDescription: "Test 21587879213" // View 2-RHS-Section 2-Column 2
                            }
                        ]
                    },
                    {
                        patient: "patient 54654471",// View 1-RHS-Claims Tab, View 2-RHS-Section 1
                        dateOfBirth: "2017-10-16T09:53:59.332Z",// View 1-RHS-Claims Tab 
                        provider: {
                            name: "provider 5455",// View 1-RHS-Claims Tab, View 2-RHS-Section 2-Column 1
                            number: "8789",//View 2-RHS-Section 2-Column 1
                            address: "5897 address 1" //View 2-RHS-Section 2-Column 1
                        },
                        modality: "modality 897895", // View 1-RHS-Claims Tab
                        serviceDate: "2017-10-16T09:53:59.332Z", // View 1-RHS-Claims Tab, View 2-RHS-Section 1
                        feeCharged: 111, // View 1-RHS-Claims Tab
                        benefit: 11, // View 1-RHS-Claims Tab 
                        levelOfCover: "lever of cover 1879897", // View 2-RHS-Section 1
                        paymentType: "Payment Card", // View 2-RHS-Section 1
                        claimItems: [ /*View 2 will be populated*/
                            {
                                itemNumber: "Item number 1", // View 2-LHS
                                numberOfServices: 1, // View 2-LHS
                                feeCharged: 100.1, // View 2-LHS
                                benefit: 190.21, // View 2-LHS
                                outOfPocket: 21.12, // View 2-LHS

                                status: "OK", // View 2-LHS
                                statusReason: "Good", // View 2-LHS -Popup
                                benefitBonus: 2.11, // View 2-RHS-Section 2-Column 2
                                topUpBonus: 22.121, // View 2-RHS-Section 2-Column 2
                                stepDown: "Test 12315", //View 2-RHS-Section 2-Column 2
                                serviceDescription: "Test 234897" // View 2-RHS-Section 2-Column 2
                            },
                            {
                                itemNumber: "4564564", // View 2-LHS
                                numberOfServices: 564564, // View 2-LHS
                                feeCharged: 545.1, // View 2-LHS
                                benefit: 8789.21, // View 2-LHS
                                outOfPocket: 2121.12, // View 2-LHS

                                status: "Pending", // View 2-LHS
                                statusReason: "Pening Status", // View 2-LHS -Popup
                                benefitBonus: 444.11, // View 2-RHS-Section 2-Column 2
                                topUpBonus: 22.121, // View 2-RHS-Section 2-Column 2
                                stepDown: "Test 8979798", //View 2-RHS-Section 2-Column 2
                                serviceDescription: "Test 545897" // View 2-RHS-Section 2-Column 2
                            }
                        ]
                    }
                ]
            }
        }
    }
]