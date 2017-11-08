"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    //Membership Error
    {
        request: {
            personId: 11211101
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            personId: 11211102
        },
        response: {
            status: 401
        }
    },
    {
        request: {
            personId: 11211103
        },
        response: {
            status: 403
        }
    },
    {
        request: {
            personId: 11211104
        },
        response: {
            status: 404
        }
    },
    {
        request: {
            personId: 11211105
        },
        response: {
            status: 406
        }
    },
    {
        request: {
            personId: 11211106
        },
        response: {
            status: 500
        }
    },
    //Data
    {
        request: {
            membershipId: 9684564
        },
        response: {
            data: [
                {
                    id: "1",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category",
                    description: "description",
                    sentOn: "2016-09-15T00:00:00",
                    statusDate: "2016-09-15T00:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "1",
                        description: "SMS"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "2",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 2",
                    description: "description 2",
                    sentOn: "2016-09-17T00:00:00",
                    statusDate: "2016-09-15T01:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "2",
                        description: "DirectMail"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "3",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 3",
                    description: "description 3",
                    sentOn: "2016-09-20T00:00:00",
                    statusDate: "2016-09-15T02:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "3",
                        description: "Print"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "4",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 4",
                    description: "description 4",
                    sentOn: "2016-09-20T00:00:00",
                    statusDate: "2016-09-15T03:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "4",
                        description: "PDF"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                }
            ]
        }
    },
    {
        request: {
            personId: 193256816
        },
        response: {
            data: [
                {
                    id: "1",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category",
                    description: "description",
                    sentOn: "2016-09-15T00:00:00",
                    statusDate: "2016-09-15T01:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "1",
                        description: "SMS"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "2",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 2",
                    description: "description 2",
                    sentOn: "2016-09-17T00:00:00",
                    statusDate: "2016-09-15T02:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "2",
                        description: "DirectMail"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "3",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 3",
                    description: "description 3",
                    sentOn: "2016-09-20T00:00:00",
                    statusDate: "2016-09-15T03:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "3",
                        description: "Print"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "4",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 4",
                    description: "description 4",
                    sentOn: "2016-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "2",
                        description: "DirectMail"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                }
            ]
        }
    },
    {
        request: {
            membershipId: 9684564,
            personId: 193256816
        },
        response: {
            data: [
                {
                    id: "1",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category",
                    description: "description",
                    sentOn: "2016-09-15T00:00:00",
                    statusDate: "2016-09-15T01:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "1",
                        description: "SMS"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "2",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 2",
                    description: "description 2",
                    sentOn: "2016-09-17T00:00:00",
                    statusDate: "2016-09-15T02:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "2",
                        description: "DirectMail"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "3",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 3",
                    description: "description 3",
                    sentOn: "2016-09-20T00:00:00",
                    statusDate: "2016-09-15T03:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "0",
                        description: "Email"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "4",
                    membershipId: 9684564,
                    personId: 193256816,
                    recipient: "Huy Tran",
                    category: "category 4",
                    description: "description 4",
                    sentOn: "2016-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "4",
                        description: "PDF"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                }
            ]
        }
    },
    // QC Data QC Data QC Data
    {
        request: {
            membershipId: 22126019
        },
        response: {
            data: [
                {
                    id: "801",
                    membershipId: 22126019,
                    personId: 19221260,
                    recipient: "Testt Recipient",
                    category: "Membership",
                    description: "Descriptionn",
                    sentOn: "2017-09-15T00:00:00",
                    statusDate: "2016-09-15T01:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "1",
                        description: "SMS"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "802",
                    membershipId: 22126019,
                    personId: 19221260,
                    recipient: "Monday",
                    category: "Person",
                    description: "Descriptionn 2",
                    sentOn: "2016-09-17T00:00:00",
                    statusDate: "2016-09-15T02:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "2",
                        description: "DirectMail"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "803",
                    membershipId: 22126019,
                    personId: 19221260,
                    recipient: "Tuesday",
                    category: "Person",
                    description: "Descriptionn aaa",
                    sentOn: "2017-10-20T00:00:00",
                    statusDate: "2016-09-15T03:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "3",
                        description: "Print"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "804",
                    membershipId: 22126019,
                    personId: 19221260,
                    recipient: "Wednesday",
                    category: "Person",
                    description: "Descriptionn 4",
                    sentOn: "2017-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "4",
                        description: "PDF"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "805",
                    membershipId: 22126019,
                    personId: 19221260,
                    recipient: "Thursday",
                    category: "Membership",
                    description: "Descriptionn 5",
                    sentOn: "2017-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "0",
                        description: "Email"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                }
            ]
        }
    },
    {
        request: {
            personId: 20221260
        },
        response: {
            data: [
                {
                    id: "806",
                    membershipId: 22126020,
                    personId: 20221260,
                    recipient: "Testt Recipient",
                    category: "Membership",
                    description: "Descriptionn Person",
                    sentOn: "2017-09-15T00:00:00",
                    statusDate: "2016-09-15T01:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "1",
                        description: "SMS"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "807",
                    membershipId: 22126020,
                    personId: 20221260,
                    recipient: "Monday",
                    category: "Person",
                    description: "Descriptionn 2 Person",
                    sentOn: "2016-09-17T00:00:00",
                    statusDate: "2016-09-15T02:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "2",
                        description: "DirectMail"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "808",
                    membershipId: 22126020,
                    personId: 20221260,
                    recipient: "Tuesday",
                    category: "Person",
                    description: "Descriptionn aaa Person",
                    sentOn: "2017-10-20T00:00:00",
                    statusDate: "2016-09-15T03:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "3",
                        description: "Print"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "809",
                    membershipId: 22126020,
                    personId: 20221260,
                    recipient: "Wednesday",
                    category: "Membership",
                    description: "Descriptionn 4 Person",
                    sentOn: "2017-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "4",
                        description: "PDF"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "810",
                    membershipId: 22126020,
                    personId: 20221260,
                    recipient: "Thursday",
                    category: "Person",
                    description: "Descriptionn 4 Person",
                    sentOn: "2017-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "0",
                        description: "Email"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                }
            ]
        }
    },
    {
        request: {
            membershipId: 22126021,
            personId: 21221260
        },
        response: {
            data: [
                {
                    id: "811",
                    membershipId: 22126021,
                    personId: 21221260,
                    recipient: "Testt Recipient",
                    category: "Membership",
                    description: "Descriptionn Interaction",
                    sentOn: "2017-09-15T00:00:00",
                    statusDate: "2016-09-15T01:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "1",
                        description: "SMS"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "812",
                    membershipId: 22126021,
                    personId: 21221260,
                    recipient: "Monday",
                    category: "Person",
                    description: "Descriptionn 2 Interaction",
                    sentOn: "2016-09-17T00:00:00",
                    statusDate: "2016-09-15T02:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "2",
                        description: "DirectMail"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "813",
                    membershipId: 22126021,
                    personId: 21221260,
                    recipient: "Tuesday",
                    category: "Person",
                    description: "Descriptionn aaa Interaction",
                    sentOn: "2017-10-20T00:00:00",
                    statusDate: "2016-09-15T03:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "3",
                        description: "Print"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "814",
                    membershipId: 22126021,
                    personId: 21221260,
                    recipient: "Wednesday",
                    category: "Person",
                    description: "Interaction Descriptionn 4",
                    sentOn: "2017-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "4",
                        description: "PDF"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "815",
                    membershipId: 22126021,
                    personId: 21221260,
                    recipient: "Thursday",
                    category: "Person",
                    description: "Interaction Descriptionn 5",
                    sentOn: "2017-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "0",
                        description: "Email"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                }
            ]
        }
    },
    ///////////////////////////////////////////////////
    //UC260_AC01_ST001
    {
        request: {
            membershipId: 270390,
            personId: 99001122
        },
        response: {
            data: [
                {
                    id: "400",
                    membershipId: 270390,
                    personId: 99001122,
                    recipient: "Test Recipient",
                    category: "Membership",
                    description: "Description Interaction 1",
                    sentOn: "2017-09-15T00:00:00",
                    statusDate: "2016-09-15T01:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "1",
                        description: "PDF"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "401",
                    membershipId: 270390,
                    personId: 99001122,
                    recipient: "Monday",
                    category: "Person",
                    description: "Description Interaction 2",
                    sentOn: "2016-09-17T00:00:00",
                    statusDate: "2016-09-15T02:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "2",
                        description: "SMS"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "402",
                    membershipId: 270390,
                    personId: 99001122,
                    recipient: "Tuesday",
                    category: "Person",
                    description: "Description Interaction 3",
                    sentOn: "2017-10-20T00:00:00",
                    statusDate: "2016-09-15T03:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "3",
                        description: "Email"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                },
                {
                    id: "403",
                    membershipId: 270390,
                    personId: 99001122,
                    recipient: "Wednesday",
                    category: "Membership",
                    description: "Description Interaction 4Description Interaction 4Description Interaction 4Description Interaction 4Description Interaction 4Description Interaction 4Description Interaction 4Description Interaction 4",
                    sentOn: "2017-09-20T00:00:00",
                    statusDate: "2016-09-15T04:30:00",
                    requestedOn: "2016-09-15T00:00:00",
                    communicationChannel: {
                        value: "4",
                        description: "DirectMail"
                    } //Email=0,  SMS=1, DirectMail=2, Print=3, PDF=4
                }
            ]
        }
    }
];
//# sourceMappingURL=getCommunicationSummary.js.map