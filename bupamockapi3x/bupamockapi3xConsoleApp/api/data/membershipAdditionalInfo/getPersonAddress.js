"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: {
            membershipId: 111111,
            personId: 123456
        },
        response: {
            data: [
                {
                    street1: "34 Kyoto Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: 1
                },
                {
                    street1: "35 Tokyo Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: 2
                },
                {
                    street1: "35 Osaka Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: 3
                },
                {
                    street1: "37 Osaka Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: 4
                }
            ]
        }
    },
    {
        request: {
            membershipId: 222222,
            personId: 345678
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 333333,
            personId: 654321
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 9684564,
            personId: 199626898
        },
        response: {
            data: [
                {
                    street1: "34 Kyoto Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: 1
                },
                {
                    street1: "35 Tokyo Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: 2
                },
                {
                    street1: "",
                    street2: "",
                    street3: "",
                    addressType: 3
                },
                {
                    street1: "37 Osaka Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: 4
                }
            ]
        }
    },
    {
        request: {
            membershipId: 92206127,
            personId: 246653053
        },
        response: {
            data: [
                {
                    street1: "34 Kyoto Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: { Value: 1, Description: "" }
                },
                {
                    street1: "35 Tokyo Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: { Value: 2, Description: "" }
                },
                {
                    street1: "Cong Hoa",
                    street2: "Tan Binh",
                    street3: "HCMC",
                    addressType: { Value: 3, Description: "" }
                },
                {
                    street1: "37 Osaka Street",
                    street2: "Japanese",
                    street3: "street3",
                    addressType: { Value: 4, Description: "" }
                }
            ]
        }
    }
];
//# sourceMappingURL=getPersonAddress.js.map