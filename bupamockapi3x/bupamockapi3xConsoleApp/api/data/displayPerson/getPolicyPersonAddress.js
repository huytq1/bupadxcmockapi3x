"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: {
            personId: 111111,
            membershipId: 111111
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            personId: 222222,
            membershipId: 222222
        },
        response: {
            status: 404
        }
    },
    {
        request: {
            personId: 333333,
            membershipId: 333333
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            personId: 209041561,
            membershipId: 33333333
        },
        response: {
            data: {
                street1: "123 Xuan Alann",
                street2: "234 Xuan Alann",
                street3: "456 Xuan Alann",
                city: "234 Xuan Alann",
                state: "234",
                zip: "2345656",
                country: "234 Xuan Alann",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 209041561,
            membershipId: 11111111
        },
        response: {
            data: {
                street1: "111 Xuan Alann",
                street2: "11 Xuan Alann",
                street3: "111 Xuan Alann",
                city: "111 Xuan Alann",
                state: "1111",
                zip: "1111111",
                country: "1111 Xuan Alann",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 209041561,
            membershipId: 77777777
        },
        response: {
            data: {
                street1: "777 Xuan Alann",
                street2: "777 Xuan Alann",
                street3: "777 Xuan Alann",
                city: "777 Xuan Alann",
                state: "777",
                zip: "7777777",
                country: "7777 Xuan Alann",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
    // QC data 197298657
    {
        request: {
            personId: 247494397,
            membershipId: 24899015
        },
        response: {
            data: {
                street1: "366",
                street2: "Nguyen Trai",
                street3: "Ward 8th",
                city: "Ho Chi Minh",
                state: "HCM",
                zip: "71000",
                country: "Viet Nam",
                addressType: { Value: 3, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 247494396,
            membershipId: 24899016
        },
        response: {
            data: {
                street1: "370",
                street2: "Nguyen Trai",
                street3: "Ward 8th",
                city: "Ho Chi Minh",
                state: "HCM",
                zip: "71000",
                country: "Viet Nam",
                addressType: { Value: 3, Description: "" }
            }
        }
    },
    // Data for 92206127
    {
        request: {
            personId: 246653091,
            membershipId: 92206127
        },
        response: {
            data: {
                street1: "33F",
                street2: "Quoc Lo 22",
                street3: "Ba Diem",
                city: "Ho Chi Minh",
                state: "HCM",
                zip: "71000",
                country: "Viet Nam",
                addressType: { Value: 3, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 995577889,
            membershipId: 82404708
        },
        response: {
            data: {
                street1: "266",
                street2: "Cong Hoa",
                street3: "Ward Tan Binh",
                city: "Ho Chi Minh",
                state: "HCM",
                zip: "71000",
                country: "Viet Nam",
                addressType: { Value: 1, Description: "Postal Address" }
            }
        }
    },
    {
        request: {
            personId: 559900200,
            membershipId: 82404708
        },
        response: {
            data: {
                street1: "",
                street2: "",
                street3: "",
                city: "",
                state: "",
                zip: "",
                country: "",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 659912300,
            membershipId: 82404708
        },
        response: {
            data: {
                street1: "",
                street2: "",
                street3: "",
                city: "",
                state: "",
                zip: "",
                country: "",
                addressType: { Value: 1, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 193256816,
            membershipId: 5262274
        },
        response: {
            data: {
                street1: "Stret1",
                street2: "Street2",
                street3: "Streeet3",
                city: "HCM",
                state: "Q1",
                zip: "70000",
                country: "Vietnam",
                addressType: { Value: 3, Description: "Postal" }
            }
        }
    },
    {
        request: {
            personId: 11211213,
            membershipId: 11211113
        },
        response: {
            data: {
                street1: "Str1",
                street2: "Str2",
                street3: "Str3",
                city: "HCM",
                state: "Q5",
                zip: "70000",
                country: "Vietnam",
                addressType: { Value: 3, Description: "Postal" }
            }
        }
    },
    {
        request: {
            personId: 199626763,
            membershipId: 9684564
        },
        response: {
            data: {
                street1: "Stree1",
                street2: "Street2",
                street3: "Street3",
                city: "HCM",
                state: "Q1",
                zip: "70000",
                country: "Vietnam",
                addressType: { Value: 2, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 247494397,
            membershipId: 24899015
        },
        response: {
            data: {
                street1: "Stree1",
                street2: null,
                street3: null,
                city: null,
                state: null,
                zip: null,
                country: null,
                addressType: { Value: 2, Description: "" }
            }
        }
    },
    {
        request: {
            personId: 277218440,
            membershipId: 74212962
        },
        response: {
            data: {
                street1: "Stree1",
                street2: "Street2",
                street3: "Street3",
                city: "HCM",
                state: "Q1",
                zip: "70000",
                country: "Vietnam",
                addressType: { Value: 2, Description: "" }
            }
        }
    }
];
//# sourceMappingURL=getPolicyPersonAddress.js.map