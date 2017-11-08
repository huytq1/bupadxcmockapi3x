"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
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
                        patient: "patient 2154",
                        dateOfBirth: "2017-10-16T09:53:59.332Z",
                        provider: {
                            name: "provider 3257",
                            number: "215457",
                            address: "2154 address 1" //View 2-RHS-Section 2-Column 1
                        },
                        modality: "modality 2154",
                        serviceDate: "2017-10-16T09:53:59.332Z",
                        feeCharged: 87165,
                        benefit: 154,
                        levelOfCover: "lever of cover 21547",
                        paymentType: "Payment Card",
                        claimItems: [
                            {
                                itemNumber: "21354787",
                                numberOfServices: 15184,
                                feeCharged: 48.1,
                                benefit: 578.21,
                                outOfPocket: 5.12,
                                status: "Rejected",
                                statusReason: "rejected pending",
                                benefitBonus: 54897.11,
                                topUpBonus: 47.121,
                                stepDown: "Test 2154875656489",
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
                        patient: "patient 545444",
                        dateOfBirth: "2017-10-16T09:53:59.332Z",
                        provider: {
                            name: "provider 23467",
                            number: "p001",
                            address: "8721346 address 1" //View 2-RHS-Section 2-Column 1
                        },
                        modality: "modality 5168498",
                        serviceDate: "2017-10-16T09:53:59.332Z",
                        feeCharged: 111,
                        benefit: 11,
                        levelOfCover: "lever of cover 213487",
                        paymentType: "Payment Card",
                        claimItems: [
                            {
                                itemNumber: "2135487",
                                numberOfServices: 15184,
                                feeCharged: 2138787.1,
                                benefit: 2132386.21,
                                outOfPocket: 21354684.12,
                                status: "Paid",
                                statusReason: "Good",
                                benefitBonus: 221879.11,
                                topUpBonus: 2135789722.121,
                                stepDown: "Test 21548756 2546878",
                                serviceDescription: "Test 21587879213" // View 2-RHS-Section 2-Column 2
                            }
                        ]
                    },
                    {
                        patient: "patient 54654471",
                        dateOfBirth: "2017-10-16T09:53:59.332Z",
                        provider: {
                            name: "provider 5455",
                            number: "8789",
                            address: "5897 address 1" //View 2-RHS-Section 2-Column 1
                        },
                        modality: "modality 897895",
                        serviceDate: "2017-10-16T09:53:59.332Z",
                        feeCharged: 111,
                        benefit: 11,
                        levelOfCover: "lever of cover 1879897",
                        paymentType: "Payment Card",
                        claimItems: [
                            {
                                itemNumber: "Item number 1",
                                numberOfServices: 1,
                                feeCharged: 100.1,
                                benefit: 190.21,
                                outOfPocket: 21.12,
                                status: "OK",
                                statusReason: "Good",
                                benefitBonus: 2.11,
                                topUpBonus: 22.121,
                                stepDown: "Test 12315",
                                serviceDescription: "Test 234897" // View 2-RHS-Section 2-Column 2
                            },
                            {
                                itemNumber: "4564564",
                                numberOfServices: 564564,
                                feeCharged: 545.1,
                                benefit: 8789.21,
                                outOfPocket: 2121.12,
                                status: "Pending",
                                statusReason: "Pening Status",
                                benefitBonus: 444.11,
                                topUpBonus: 22.121,
                                stepDown: "Test 8979798",
                                serviceDescription: "Test 545897" // View 2-RHS-Section 2-Column 2
                            }
                        ]
                    }
                ]
            }
        }
    }
];
//# sourceMappingURL=getAncillaryClaim.js.map