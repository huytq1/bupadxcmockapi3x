export default [
    {
        request: {
            communicationId: 11211101
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            communicationId: 11211102
        },
        response: {
            status: 401
        }
    },
    {
        request: {
            communicationId: 11211103
        },
        response: {
            status: 403
        }
    },
    {
        request: {
            communicationId: 11211104
        },
        response: {
            status: 404
        }
    },
    {
        request: {
            communicationId: 11211105
        },
        response: {
            status: 406
        }
    },
    {
        request: {
            communicationId: 11211106
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            communicationId: 1
        },
        response: {
            data: {
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
                },
                // Details
                sourceId: "1",
                source: "aa",
                generatedOn: "2016-09-25T00:00:00",
                status: "goood",
                detail: "yeah",
                sentTo: "htran84@csc.com",
                sentBy: "admin",
                isBundled: true,
                isPremiumSummaryExpected: true, /*add on 24/10/2017*/
                documentList: [
                    {
                        id: "1",
                        title: "Document API call with url",
                        url: "google.com",
                        smsText: "Hello World",
                        documentAccessMode: {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "2",
                        title: " External URL is google",
                        url: "http://www.google.com",
                        smsText: "",
                        documentAccessMode: {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "3",
                        title: "SMS Text with message is hello world",
                        url: "",
                        smsText: "Hello World",
                        documentAccessMode: {
                            value: "2",
                            description: "SMS text"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "4",
                        title: "Document API call without url",
                        url: "",
                        smsText: "Hello World",
                        documentAccessMode: {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "5",
                        title: " External URL without url",
                        url: "",
                        smsText: "",
                        documentAccessMode: {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "6",
                        title: "SMS Text with empty message",
                        url: "google.com",
                        smsText: "",
                        documentAccessMode: {
                            value: "2",
                            description: "SMS Text"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    }
                ],
                statusHistoryList: [
                    {
                        eventDate: "2016-09-25T00:00:00",
                        personGivenName: "Huy",
                        personFamilyName: "Tran",
                        recipient: "Huy Tran",     //PersonGivenName + PersonFamilyName 
                        communicationChannel:"Document API call",
                        eventStatus:"Active",
                        eventStatusDetail: "event Status Detail"
                    },
                    {
                        eventDate: "2016-010-25T00:00:00",
                        personGivenName: "Thao",
                        personFamilyName: "Huynh",
                        recipient: "Thao Huynh",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "Active",
                        eventStatusDetail: "event Status Detail"
                    },
                    {
                        eventDate: "2016-011-25T00:00:00",
                        personGivenName: "Phong",
                        personFamilyName: "Ho",
                        recipient: "Phong Ho",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "Active",
                        eventStatusDetail: "event Status Detail"
                    },
                    {
                        eventDate: "2016-012-25T00:00:00",
                        personGivenName: "Tiep",
                        personFamilyName: "Nguyen",
                        recipient: "Tiep Nguyen",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "Active",
                        eventStatusDetail: "event Status Detail"
                    }],
                premiumDetails: {    /*add on 24/10/2017*/
                    packageDescription: "",
                    preApril1: {
                        rebateAmount: 0.0,
                        rebatePercent: 0.0,
                        lHCAmount: 0.0,
                        lHCPercent: 0.0,
                        discountAmount: 0.0,
                        discountPercent: 0.0,
                        baseAmount: 0.0,
                        gST: 0.0,
                        netAmount: 0.0

                    },
                    postApril1: {
                        rebateAmount: 0.0,
                        rebatePercent: 0.0,
                        lHCAmount: 0.0,
                        lHCPercent: 0.0,
                        discountAmount: 0.0,
                        discountPercent: 0.0,
                        baseAmount: 0.0,
                        gST: 0.0,
                        netAmount: 0.0
                    },
                    premiumDifference: {
                        rebateAmount: 0.0,
                        rebatePercent: 0.0,
                        lHCAmount: 0.0,
                        lHCPercent: 0.0,
                        discountAmount: 0.0,
                        discountPercent: 0.0,
                        baseAmount: 0.0,
                        gST: 0.0,
                        netAmount: 0.0
                    }
                }
                /*, // removed on 24/10/2017
                commDataList: [
                    {
                        key: "Huy",
                        value: 1,
                        children: [
                            {
                                key: "Huy 1.1",
                                value: 1,
                                children:[]
                            }]
                    },
                    {
                        key: "Thao",
                        value: 2,
                        children: [
                            {
                                key: "Thao 1.1",
                                value: 1,
                                children: []
                            },
                            {
                                key: "Thao 1.2",
                                value: 2,
                                children: []
                            }]
                    }
                    ,
                    {
                        key: "Phong",
                        value: 3,
                        children: [
                            {
                                key: "Phong 1.1",
                                value: 1,
                                children: []
                            },
                            {
                                key: "Phong 1.2",
                                value: 2,
                                children: [
                                    {
                                        key: "Phong 1.2.1",
                                        value: 1,
                                        children: []
                                    },
                                    {
                                        key: "Phong 1.2.2",
                                        value: 2,
                                        children: []
                                    }
                                ]
                            }]
                    },
                    {
                        key: "Tiep",
                        value: 4,
                        children: [
                            {
                                key: "Tiep 1.1",
                                value: 1,
                                children: [{
                                    key: "Tiep 1.1.1",
                                    value: 1,
                                    children: []
                                },
                                {
                                    key: "Tiep 1.1.2",
                                    value: 2,
                                    children: []
                                }]
                            },
                            {
                                key: "Tiep 1.2",
                                value: 2,
                                children: [
                                    {
                                        key: "Tiep 1.2.1",
                                        value: 1,
                                        children: []
                                    },
                                    {
                                        key: "Tiep 1.2.2",
                                        value:2,
                                        children: []
                                    }
                                ]
                            }]
                    }
                ]
                */
            }
        }
    }
    ,
    {
        request: {
            communicationId: 2
        },
        response: {
            data: {
                id: "2",
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
                },
                // Details
                sourceId: "1",
                source: "aa",
                generatedOn: "2016-09-25T00:00:00",
                status: "goood",
                detail: "yeah",
                sentTo: "htran84@csc.com",
                sentBy: "admin",
                isBundled: false,
                isPremiumSummaryExpected: true, /*add on 24/10/2017*/
                documentList: [
                    {
                        id: "1",
                        title: "Document API call with url",
                        url: "google.com",
                        smsText: "Hello World",
                        documentAccessMode: {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "2",
                        title: " External URL is google",
                        url: "http://www.google.com",
                        smsText: "",
                        documentAccessMode: {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "3",
                        title: "SMS Text with message is hello world",
                        url: "",
                        smsText: "Hello World",
                        documentAccessMode: {
                            value: "2",
                            description: "SMS text"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "4",
                        title: "Document API call without url",
                        url: "",
                        smsText: "Hello World",
                        documentAccessMode: {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "5",
                        title: " External URL without url",
                        url: "",
                        smsText: "",
                        documentAccessMode: {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "6",
                        title: "SMS Text with empty message",
                        url: "google.com",
                        smsText: "",
                        documentAccessMode: {
                            value: "2",
                            description: "SMS Text"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    }
                ],
                statusHistoryList: [
                    {
                        eventDate: "2016-09-25T00:00:00",
                        personGivenName: "Huy",
                        personFamilyName: "Tran",
                        recipient: "Huy Tran",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "Active",
                        eventStatusDetail: "event Status Detail"
                    },
                    {
                        eventDate: "2016-010-25T00:00:00",
                        personGivenName: "Thao",
                        personFamilyName: "Huynh",
                        recipient: "Thao Huynh",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "Active",
                        eventStatusDetail: "event Status Detail"
                    },
                    {
                        eventDate: "2016-011-25T00:00:00",
                        personGivenName: "Phong",
                        personFamilyName: "Ho",
                        recipient: "Phong Ho",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "Active",
                        eventStatusDetail: "event Status Detail"
                    },
                    {
                        eventDate: "2016-012-25T00:00:00",
                        personGivenName: "Tiep",
                        personFamilyName: "Nguyen",
                        recipient: "Tiep Nguyen",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "Active",
                        eventStatusDetail: "event Status Detail"
                    }],
                premiumDetails: null
                /*, // removed on 24/10/2017
                commDataList: [
                    {
                        key: "Huy",
                        value: 1,
                        children: [
                            {
                                key: "Huy 1.1",
                                value: 1,
                                children:[]
                            }]
                    },
                    {
                        key: "Thao",
                        value: 2,
                        children: [
                            {
                                key: "Thao 1.1",
                                value: 1,
                                children: []
                            },
                            {
                                key: "Thao 1.2",
                                value: 2,
                                children: []
                            }]
                    }
                    ,
                    {
                        key: "Phong",
                        value: 3,
                        children: [
                            {
                                key: "Phong 1.1",
                                value: 1,
                                children: []
                            },
                            {
                                key: "Phong 1.2",
                                value: 2,
                                children: [
                                    {
                                        key: "Phong 1.2.1",
                                        value: 1,
                                        children: []
                                    },
                                    {
                                        key: "Phong 1.2.2",
                                        value: 2,
                                        children: []
                                    }
                                ]
                            }]
                    },
                    {
                        key: "Tiep",
                        value: 4,
                        children: [
                            {
                                key: "Tiep 1.1",
                                value: 1,
                                children: [{
                                    key: "Tiep 1.1.1",
                                    value: 1,
                                    children: []
                                },
                                {
                                    key: "Tiep 1.1.2",
                                    value: 2,
                                    children: []
                                }]
                            },
                            {
                                key: "Tiep 1.2",
                                value: 2,
                                children: [
                                    {
                                        key: "Tiep 1.2.1",
                                        value: 1,
                                        children: []
                                    },
                                    {
                                        key: "Tiep 1.2.2",
                                        value:2,
                                        children: []
                                    }
                                ]
                            }]
                    }
                ]
                */
            }
        }
    }
    ,

    // QC data QC data QC data
    {
        request: {
            communicationId: 809
        },
        response: {
            data: {
                id: "809",
                membershipId: 22126020,
                personId: 20221260,
                recipient: "Wednesday",
                category: "Membership",
                description: "Descriptionn 4 Person",
                sentOn: "2017-09-20T00:00:00",
                statusDate: "2016-09-15T04:30:00",
                requestedOn: "2016-09-15T00:00:00",
                isBundled: "Yes",
                communicationChannel:
                    {
                        value: "4",
                        description: "PDF"
                    },
                sourceId: "809",
                source: "Sourcee",
                generatedOn: "2016-09-25T00:00:00",
                status: "Statuss",
                detail: "Detaill",
                sentTo: "test@csc.com",
                sentBy: "sentBy admin",
                documentList: [
                    {
                        id: "8001",
                        title: "Document API call with URL null and SMS null",
                        url: "",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8002",
                        title: "Document API call with SMS null",
                        url: "http://www.google.com",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8003",
                        title: "Document API call with SMS null and URL invalid",
                        url: "http://www",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8004",
                        title: "Document API call with URL null",
                        url: "",
                        smsText: "Hello World",
                        documentAccessMode:
                        {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8005",
                        title: "External URL with URL null and SMS null",
                        url: "",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8006",
                        title: "External URL with SMS null",
                        url: "google.com",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8007",
                        title: "External URL with SMS null and URL invalid",
                        url: "google",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8008",
                        title: "External URL with URL null",
                        url: "",
                        smsText: "smsTextt",
                        documentAccessMode:
                        {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8009",
                        title: "SMS text with URL null and SMS null",
                        url: "",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "2",
                            description: "SMS text"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8010",
                        title: "SMS text with SMS null",
                        url: "www.google.com",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "2",
                            description: "SMS text"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8011",
                        title: "SMS text with SMS null and URL invalid",
                        url: "google",
                        smsText: "",
                        documentAccessMode:
                        {
                            value: "2",
                            description: "SMS text"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8012",
                        title: "SMS text with URL null",
                        url: "",
                        smsText: "smsTextt Sync to share your changes with the server Sync to share your changes with the server Sync to share your changes with the server Sync to share your changes with the server Sync to share your changes with the server",
                        documentAccessMode:
                        {
                            value: "2",
                            description: "SMS text"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    }
                ],
                statusHistoryList:
                [
                    {
                        eventDate: "2016-09-25T00:00:00",
                        personGivenName: "personGivenNameee",
                        personFamilyName: "personFamilyNameee",
                        recipient: "personGivenNameee personFamilyNameee",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "eventStatusss",
                        eventStatusDetail: "eventStatusDetail eventStatusDetail eventStatusDetail eventStatusDetail eventStatusDetail"
                    },
                    {
                        eventDate: "2016-010-25T00:00:00",
                        personGivenName: "Givenn",
                        personFamilyName: "Familyy",
                        recipient: "Givenn Familyy",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "Active",
                        eventStatusDetail: ""
                    }
                ],
                commDataList: [
                    {
                        key: "Blue",
                        value: 1,
                        children:
                            [{
                                key: "Blue 1.1",
                                value: 1,
                                children: []
                            }]
                    },
                    {
                        key: "Green",
                        value: 2,
                        children:
                            [{
                                key: "Green 1.1",
                                value: 1,
                                children: []
                            },
                            {
                                key: "Green 1.2",
                                value: 2,
                                children: []
                            }]
                    },
                    {
                        key: "Red",
                        value: 3,
                        children:
                            [{
                                key: "Red 1.1",
                                value: 1,
                                children: []
                            },
                            {
                                key: "Red 1.2",
                                value: 2,
                                children:
                                    [{
                                        key: "Red 1.2.1",
                                        value: 1,
                                        children: []
                                    },
                                    {
                                        key: "Red 1.2.2",
                                        value: 2,
                                        children: []
                                    }
                                ]
                            }]
                    },
                    {
                        key: "Yellow",
                        value: 4,
                        children:
                            [{
                                key: "Yellow 1.1",
                                value: 1,
                                children:
                                    [{
                                        key: "Yellow 1.1.1",
                                        value: 1,
                                        children: []
                                    },
                                    {
                                        key: "Yellow 1.1.2",
                                        value: 2,
                                        children: []
                                    }]
                            },
                            {
                                key: "Yellow 1.2",
                                value: 2,
                                children: [
                                    {
                                        key: "Yellow 1.2.1",
                                        value: 1,
                                        children: []
                                    },
                                    {
                                        key: "Yellow 1.2.2",
                                        value: 2,
                                        children: []
                                    }
                                ]
                            }]
                    }
                ]
            }
        }
    },
    {
        request: {
            communicationId: 801
        },
        response: {
            data: {
                id: "801",
                membershipId: 22126019,
                personId: 19221260,
                recipient: "Testt Recipient",
                category: "Membership",
                description: "Descriptionn",
                sentOn: "2017-09-15T00:00:00",
                statusDate: "2016-09-15T01:30:00",
                requestedOn: "2016-09-15T00:00:00",
                isBundled: "Yes",
                communicationChannel:
                {
                    value: "1",
                    description: "SMS"
                },
                sourceId: "801",
                source: "abc null empty",
                generatedOn: "",

                status: "",
                detail: "",
                sentTo: "",
                sentBy: "",
                documentList: [
                    {
                        id: "8020",
                        title: "Document API call with URL",
                        url: "google.com",
                        smsText: "Hello World",
                        documentAccessMode: {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "8021",
                        title: "External URL is google",
                        url: "http://www.google.com",
                        smsText: "",
                        documentAccessMode: {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    }
                ],
                statusHistoryList:
                [
                    {
                        eventDate: "",
                        personGivenName: "",
                        personFamilyName: "",
                        recipient: "",     //PersonGivenName + PersonFamilyName 
                        communicationChannel: "Document API call",
                        eventStatus: "",
                        eventStatusDetail: ""
                    }
                ],
                commDataList: [
                    {
                        key: "Blue",
                        value: 1,
                        children:
                        [{
                            key: "Blue 1.1",
                            value: 1,
                            children: []
                        }]
                    }
                ]
            }
        }
    },
    //////////////////////////////////////////////////
    {
        request: {
            communicationId: 400
        },
        response: {
            data: {
                sourceId: "400",
                source: "abc null empty",
                requestedOn: "",
                generatedOn: "",

                status: "",
                detail: "",
                sentTo: "",
                sentBy: "",
                documentList: [
                    {
                        id: "4000",
                        title: "Document API call with URL",
                        url: "google.com",
                        smsText: "Hello World",
                        documentAccessMode: {
                            value: "0",
                            description: "Document API call"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "4001",
                        title: "External URL is google",
                        url: "http://www.google.com",
                        smsText: "",
                        documentAccessMode: {
                            value: "1",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    },
                    {
                        id: "4001",
                        title: "External URL is google",
                        url: "http://www.google.com",
                        smsText: "This is smsTextThis is smsTextThis is smsTextThis is smsTextThis is smsTextThis is smsTextThis is smsTextThis is smsText",
                        documentAccessMode: {
                            value: "3",
                            description: "External URL"
                        }   		 /* 0 = Document API call;  1 = External URL; 2 = SMS Text */
                    }
                ]
            }
        }
    }
]