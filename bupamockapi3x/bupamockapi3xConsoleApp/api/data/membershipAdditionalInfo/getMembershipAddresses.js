"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: {
            membershipId: 200200,
            type: 'default'
        },
        response: {
            data: [
                {
                    street1: 'Nguyen trai',
                    street2: 'Nguyen Hue',
                    street3: ' Tran Hung Dao',
                    city: 'HCM',
                    state: 'HCM',
                    zip: '700000',
                    country: 'VN',
                    addressType: { Value: 3, Description: "" }
                }
            ]
        }
    },
    {
        request: {
            membershipId: 2002001,
            type: 'default'
        },
        response: {
            data: [
                {
                    street1: 'Nguyen trai',
                    street2: 'Nguyen Hue',
                    street3: ' Tran Hung Dao',
                    city: 'HCM',
                    state: 'HCM',
                    zip: '700000',
                    country: 'VN',
                    addressType: { Value: 1, Description: "" }
                }
            ]
        }
    },
    {
        request: {
            membershipId: 2002002,
            type: 'default'
        },
        response: {
            data: [
                {
                    street1: 'Nguyen trai',
                    street2: 'Nguyen Hue',
                    street3: ' Tran Hung Dao',
                    city: 'HCM',
                    state: 'HCM',
                    zip: '700000',
                    country: 'VN',
                    addressType: { Value: 2, Description: "" }
                }
            ]
        }
    },
    {
        request: {
            membershipId: 400400,
            type: 'default'
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 400400,
            type: ''
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 500500,
            type: 'default'
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 500500,
            type: ''
        },
        response: {
            status: 500
        }
    },
    //Test Data
    //The Membership should have addressType = 3 otherwise, the data can not be loaded in CRM
    {
        request: {
            membershipId: 92206127,
            type: 'default'
        },
        response: {
            data: [
                {
                    street1: '366 Nguyen Trai',
                    street2: 'District 5',
                    street3: 'HCM',
                    city: 'HCMC',
                    state: 'HCMC',
                    zip: '700000',
                    country: 'VN',
                    addressType: { Value: 1, Description: "" }
                }
            ]
        }
    },
    {
        request: {
            membershipId: 24899015,
            type: 'default'
        },
        response: {
            data: [
                {
                    street1: '567 Tran Hung Dao',
                    street2: 'District 1',
                    street3: 'HCM',
                    city: 'HCMC',
                    state: 'HCMC',
                    zip: '700000',
                    country: 'VN',
                    addressType: { Value: 1, Description: "" }
                },
                {
                    street1: '123 Nguyen Trai',
                    street2: 'District 5',
                    street3: 'HCM',
                    city: 'HCMC',
                    state: 'HCMC',
                    zip: '700000',
                    country: 'VN',
                    addressType: { Value: 3, Description: "Postal Address" }
                }
            ]
        }
    },
    {
        request: {
            membershipId: 9684564,
            type: 'default'
        },
        response: {
            data: [
                {
                    street1: '',
                    street2: '',
                    street3: '',
                    city: 'HCMC',
                    state: 'HCMC',
                    zip: '700000',
                    country: 'VN',
                    addressType: { Value: 2, Description: "" }
                }
            ]
        }
    }
];
//# sourceMappingURL=getMembershipAddresses.js.map