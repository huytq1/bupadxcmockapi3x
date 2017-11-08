"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: {
            personId: 111111
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            personId: 222222
        },
        response: {
            status: 404
        }
    },
    {
        request: {
            personId: 333333
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            personId: 199460897
        },
        response: {
            data: {
                street1: "123 No Policy",
                street2: "234 No Policy",
                street3: "456 No Policy",
                city: "234 No Policy",
                state: "234",
                zip: "2345656",
                country: "234 No Policy",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
    // QC data
    {
        request: {
            personId: 199626763
        },
        response: {
            data: {
                street1: "123 Nguyen Trai",
                street2: "234 Ham Nghi",
                street3: "456 No Policy",
                city: "Ho Chi Minh",
                state: "NZ",
                zip: "71000",
                country: "Viet Nam",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 199626763
        },
        response: {
            data: {
                street1: "456 Nguyen Trai",
                street2: "789 Ham Nghi",
                street3: "456 No Policy",
                city: "Ho Chi Minh",
                state: "LLA",
                zip: "71000",
                country: "Ha Noi",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 435461331
        },
        response: {
            data: {
                street1: "900 Dien Bien Phu Street",
                street2: "14 Etown",
                street3: "456 No Policy",
                city: "Ho Chi Minh",
                state: "AU",
                zip: "81200",
                country: "Viet Nam",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
];
//# sourceMappingURL=getPersonAddressInfo.js.map