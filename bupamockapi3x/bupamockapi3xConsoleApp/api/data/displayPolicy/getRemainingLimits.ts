/// <reference path="getSpecialFeatures.ts" />
export default [
    {
        request: {
            membershipId: 111111,
            personId: 5
        },
        response: {
            data: {
                "data": {
                    "hasClaimed": true,
                    "modalities": [
                        {
                            "name": "Optical",
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "waitingPeriodDate": '2017-10-17'
                        },
                        {
                            "name": "General Dental",
                            "subModalities": [
                                {
                                    "name": "General Dental",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 200,
                                        "servicesUsed": 100,
                                        "usedPercent": 40.5
                                    },
                                },
                                {
                                    "name": "Major Dental",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": null,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                },
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 250,
                                        "servicesUsed": 200,
                                        "usedPercent": 40.5
                                    },
                                }
                            ],
                            "amountInfo": null,
                            "serviceInfo": null,
                            "waitingPeriodDate": null
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 300,
                                        "usedPercent": 30.5
                                    },
                                },
                                {
                                    "name": "Optical B",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": null,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "waitingPeriodDate": null
                        },
                        {
                            "name": "Physio/Chiro/Podiatry",
                            "subModalities": [],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": null,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "waitingPeriodDate": '2017-10-17'
                        },
                        {
                            "name": "Optical",
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "waitingPeriodDate": null
                        }, {
                            "name": "Optical",
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "waitingPeriodDate": '2017-10-17'
                        }
                    ]
                },
                "items": []
            }
        }
    },
    {
        request: {
            membershipId: 111111,
            personId: 1
        },
        response: {
            data: {
                "data": {
                    "hasClaimed": null,
                    "modalities": []
                },
                "items": []
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            personId: 195234257
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                            },
                            {
                                "name": "Major Dental",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": null,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                            },
                            {
                                "name": "Orthodontia",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 250,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                            }
                        ],
                        "amountInfo": null,
                        "serviceInfo": null,
                        "isLimitReached": false
                    },
                    {
                        "name": "Optical",
                        "subModalities": [],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 85
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": true
                    },
                    {
                        "name": "Physio/Chiro/Podiatry",
                        "subModalities": [
                            {
                                "name": "Major Dental",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": null,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Orthodontia",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 81
                                },
                                "isLimitReached": true
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": null,
                            "usedPercent": 40.5
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 90
                        },
                        "isLimitReached": true
                    },
                    {
                        "name": "Optical",
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    }, {
                        "name": "Optical",
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    }],
                    "isLimitReached": true
                },
                "item": []
            }
        }
    },
    {
        request: {
            membershipId: 45635432,
            personId: 72144532 //Person :Sansha S Stark
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                            },
                            {
                                "name": "Major Dental",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": null,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                            },
                            {
                                "name": "Orthodontia",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 250,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                            }
                        ],
                        "amountInfo": null,
                        "serviceInfo": null,
                        "isLimitReached": false
                    },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 300,
                                        "usedPercent": 30.5,
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Optical B",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": null,
                                        "usedPercent": 95
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": true
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 85
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": true
                        },
                        {
                            "name": "Physio/Chiro/Podiatry",
                            "subModalities": [
                                {
                                    "name": "Major Dental",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": null,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 200,
                                        "usedPercent": 81
                                    },
                                    "isLimitReached": true
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": null,
                                "usedPercent": 40.5
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 90
                            },
                            "isLimitReached": true
                        },
                        {
                            "name": "Optical",
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }, {
                            "name": "Optical",
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": true
                },
                "item": []
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            personId: 203918519
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Major Dental",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": null,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Orthodontia",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": null,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    //QC Data
    { // UC0318C_AC01_ST005
        request: {
            membershipId: 66375395,
            personId: 19294339 //Hasmukhbhai Dehar Belczacki
        },
        response: {
            data: {
                "data": {
                    "modalities": [
                        {
                            "name": "General Dental",
                            "subModalities": [
                                {
                                    "name": "General Dental A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 100,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "General Dental B",
                                    "amountInfo": {
                                        "usedAmount": 0,
                                        "limitAmount": 1500,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "General Dental C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 15,
                                        "servicesUsed": 8,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 1500,
                                "limitAmount": 200000,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 30,
                                "servicesUsed": 25,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 300,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Optical B",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": null,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physio/Chiro/Podiatry",
                            "subModalities": [
                                // {
                                // "name": "Hasmukhbhai Belczacki A",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": 500,
                                // "servicesUsed": 300,
                                // "usedPercent": 30.5
                                // },
                                // }, 
                                // {
                                // "name": "Hasmukhbhai Belczacki C",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": null,
                                // "servicesUsed": 400,
                                // "usedPercent": 40.5
                                // },
                                // }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": null,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //UC0318C_AC14_ST001, UC0318C_AC08_ST001
        request: {
            membershipId: 74212962,
            personId: 277218434 //Hasmukhbhai Dehar Belczacki
        },
        response: {
            data: {
                "data": {
                    "modalities": [
                        {
                            "name": "General Dental",
                            "subModalities": [
                                {
                                    "name": "General Dental A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 100,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "General Dental B",
                                    "amountInfo": {
                                        "usedAmount": 0,
                                        "limitAmount": 1500,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "General Dental C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 15,
                                        "servicesUsed": 8,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 1500,
                                "limitAmount": 200000,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 30,
                                "servicesUsed": 25,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 300,
                                        "usedPercent": 30.5
                                    },
                                },
                                {
                                    "name": "Optical B",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": null,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                // {
                                // "name": "Hasmukhbhai Belczacki A",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": 500,
                                // "servicesUsed": 300,
                                // "usedPercent": 30.5
                                // },
                                // }, 
                                // {
                                // "name": "Hasmukhbhai Belczacki C",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": null,
                                // "servicesUsed": 400,
                                // "usedPercent": 40.5
                                // },
                                // }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": null,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //134924 UC0318C_AC10_ST001 , UC0318C_AC08_ST002
        request: {
            membershipId: 74212962,
            personId: 277218439 //Lidiana H Jacob
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Major Dental",
                            "subModalities": [
                                {
                                    "name": "Major Dental A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Major Dental C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "subModalities": [
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Orthodontia C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Optical C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physiotherapy",
                            "subModalities": [
                                {
                                    "name": "Physiotherapy A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physiotherapy C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }]
                },
                "item": []
            }
        }
    },
    { //134924 UC0318C_AC10_ST001 - Person 1
        request: {
            membershipId: 66375395,
            personId: 19294340 //Manuele Y Jacob
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Major Dental",
                            "subModalities": [
                                {
                                    "name": "Major Dental A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Major Dental C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "subModalities": [
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 8000,
                                        "servicesUsed": 100,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Orthodontia C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Optical C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physiotherapy",
                            "subModalities": [
                                {
                                    "name": "Physiotherapy A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physiotherapy C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    {
        request: {
            membershipId: 61634119,
            personId: 24739415 // Gysber tus Dehar Patania
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "Dental Scale and Clean",
                        "subModalities": [
                            {
                                "name": "Dental Scale and Clean A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Scale and Clean B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Scale and Clean C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 256,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                {
                                    "name": "X-Ray A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "X-Ray C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 258,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": 1000,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": {
                                        "servicesNumber": 254,
                                        "servicesUsed": 632,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 458,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }]
                },
                "item": []
            }
        }
    },
    {
        request: {
            membershipId: 61634119,
            personId: 20001182 // Jimmea John Pan Lee
        },
        response: {
            data: {
                "data": {
                    "modalities": [
                        {
                            "name": "Physiotherapy",
                            "amountInfo": {
                                "usedAmount": 356.1,
                                "limitAmount": 900,
                                "usedPercent": 0.39566666666666666666666666667
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Chiropractic & Osteopathy",
                            "amountInfo": {
                                "usedAmount": 160,
                                "limitAmount": 500,
                                "usedPercent": 0.32
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Major Dental",
                            "amountInfo": null,
                            "serviceInfo": {
                                "servicesNumber": 800,
                                "servicesUsed": 100,
                                "usedPercent": 40.5
                            },
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "amountInfo": {
                                "usedAmount": 0,
                                "limitAmount": 1800,
                                "usedPercent": 0
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "amountInfo": null,
                            "serviceInfo": {
                                "servicesNumber": 200,
                                "servicesUsed": 100,
                                "usedPercent": 40.5
                            },
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "amountInfo": null,
                            "serviceInfo": {
                                "servicesNumber": 800,
                                "servicesUsed": 100,
                                "usedPercent": 40.5
                            },
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Natural Therapies",
                            "amountInfo": null,
                            "serviceInfo": {
                                "servicesNumber": 2500,
                                "servicesUsed": 500,
                                "usedPercent": 40.5
                            },
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "X-Ray",
                            "amountInfo": null,
                            "serviceInfo": {
                                "servicesNumber": 2000,
                                "servicesUsed": 100,
                                "usedPercent": 40.5
                            },
                            "subModalities": null,
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    {  // UC0318C_AC08_ST004
        request: {
            membershipId: 61634119,
            personId: 5463124 // Alexis X Marrion
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Major Dental",
                            "subModalities": [
                                {
                                    "name": "Major Dental A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Major Dental C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "subModalities": [
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 25,
                                        "servicesUsed": 25,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Orthodontia C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 536,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Optical C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physiotherapy",
                            "subModalities": [
                                {
                                    "name": "Physiotherapy A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physiotherapy C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }]
                },
                "item": []
            }
        }
    },
    {
        request: {
            membershipId: 61634119,
            personId: 56123259 // Person: Cristino J Marrion
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "Chiropractic & Osteopathy",
                        "subModalities": [
                            {
                                "name": "Chiropractic & Osteopathy A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Chiropractic & Osteopathy B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Chiropractic & Osteopathy C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Psychology",
                            "subModalities": [
                                {
                                    "name": "PsychologyA",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 236,
                                        "servicesUsed": 52,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Psychology C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Natural Therapies",
                            "subModalities": [
                                {
                                    "name": "Natural Therapies A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Natural Therapies C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Dietary",
                            "subModalities": [
                                {
                                    "name": "Dietary A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Dietary C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    {
        request: {
            membershipId: 61634119,
            personId: 199626763 // Person Evee Evee
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "Dental Examination",
                        "subModalities": [
                            {
                                "name": "Dental Examinationl A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 201,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Examination B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                            },
                            {
                                "name": "Dental Examination C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Dental Flouride",
                            "subModalities": [
                                {
                                    "name": "Dental Flouride A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Dental Flouride C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "subModalities": [
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 789,
                                        "servicesUsed": 56,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Orthodontia C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physio/Chiro/Podiatry",
                            "subModalities": [
                                {
                                    "name": "Physio/Chiro/Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physio/Chiro/Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physiotherapy",
                            "subModalities": [
                                {
                                    "name": "Physiotherapy A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physiotherapy C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }]
                },
                "item": []
            }
        }
    },
    { // 134924 UC0318C_AC10_ST001 - Person 2
        request: {
            membershipId: 66375395,
            personId: 19294341 //Guerino H Jacob
        },
        response: {
            data: {
                "data":
                {
                    "modalities": [{
                        "name": "Chiropractic & Osteopathy",
                        "subModalities": [
                            {
                                "name": "Chiropractic & Osteopathy A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Chiropractic & Osteopathy B",
                                "amountInfo": {
                                    "usedAmount": 1000,
                                    "limitAmount": 20000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 500,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Psychology",
                            "subModalities": [
                                {
                                    "name": "Psychology A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 1100,
                                        "servicesUsed": 500,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Psychology C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Natural Therapies",
                            "subModalities": [
                                {
                                    "name": "Natural Therapies A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 300,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Natural Therapies C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Dietary",
                            "subModalities": [
                                {
                                    "name": "Dietary A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Dietary C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { // 134924 UC0318C_AC10_ST001 - Perosn 3
        request: {
            membershipId: 66375395,
            personId: 19294342
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "Dental Examination",
                        "subModalities": [
                            {
                                "name": "Dental Examination A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Examination B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Dental Flouride",
                            "subModalities": [
                                {
                                    "name": "Dental Flouride A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Dental Flouride C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physio",
                            "subModalities": [
                                {
                                    "name": "Physio A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physio C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Chiro",
                            "subModalities": [
                                {
                                    "name": "Chiro A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Chiro C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { // 134924 UC0318C_AC10_ST001 - Person 4
        request: {
            membershipId: 66375395,
            personId: 19294343 //Lidiana F Jacob
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [{
                        "name": "Dental Scale and Clean",
                        "subModalities": [
                            {
                                "name": "Dental Scale and Clean A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Scale and Clean B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                {
                                    "name": "X-Ray A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "X-Ray C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { // 134897 UC0318C_AC14_ST001
        request: {
            membershipId: 66375395,
            personId: 19294198
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [{
                        "name": "Dental Scale and Clean",
                        "subModalities": [
                            {
                                "name": "Dental Scale and Clean A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 245,
                                    "servicesUsed": 123,
                                    "usedPercent": 46.53
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Scale and Clean B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1500,
                                    "usedPercent": 6.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                {
                                    "name": "X-Ray A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "X-Ray C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //UC0318C_AC10_ST003
        request: {
            membershipId: 91975193,
            // personId: 247604044 //Person Hasmukhbhai Dehar Belczacki
            personId: 277218435 //Person Manuele Y Jacob
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            // {
                            // "name": "General Dental B",
                            // "amountInfo": {
                            // "usedAmount": 0,
                            // "limitAmount": 1500,
                            // "usedPercent": 4.2
                            // },
                            // "serviceInfo": null,
                            // }                              
                        ],
                        "amountInfo": {
                            "usedAmount": 500,
                            "limitAmount": 1200,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Non-member First",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": 300,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Member First",
                                    "amountInfo": {
                                        "usedAmount": 150,
                                        "limitAmount": 300,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": null,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Major Dental",
                            "subModalities": [
                                {
                                    "name": "Sub type 1",
                                    "amountInfo": {
                                        "usedAmount": 320,
                                        "limitAmount": 700,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Sub type 2",
                                    "amountInfo": {
                                        "usedAmount": 330,
                                        "limitAmount": 710,
                                        "usedPercent": 4.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": null,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Psychology",
                            "subModalities": [
                                {
                                    "name": "Sub Type 1",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 10,
                                        "servicesUsed": 4,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Sub Type 2",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 8,
                                        "servicesUsed": 2,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": null,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Dietary",
                            "subModalities": [
                                // {
                                // "name": "Hasmukhbhai Belczacki A",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": 500,
                                // "servicesUsed": 300,
                                // "usedPercent": 30.5
                                // },
                                // }, 
                                // {
                                // "name": "Hasmukhbhai Belczacki C",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": null,
                                // "servicesUsed": 400,
                                // "usedPercent": 40.5
                                // },
                                // }
                            ],
                            "amountInfo": null,
                            "serviceInfo": {
                                "servicesNumber": 15,
                                "servicesUsed": 5,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                // {
                                // "name": "Hasmukhbhai Belczacki A",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": 500,
                                // "servicesUsed": 300,
                                // "usedPercent": 30.5
                                // },
                                // }, 
                                // {
                                // "name": "Hasmukhbhai Belczacki C",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": null,
                                // "servicesUsed": 400,
                                // "usedPercent": 40.5
                                // },
                                // }
                            ],
                            "amountInfo": {
                                "usedAmount": null,
                                "limitAmount": null,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 12,
                                "servicesUsed": 3,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //134894: UC0318C_AC11_ST001
        request: {
            membershipId: 91975193,
            personId: 247604043
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "Major Dental",
                        "subModalities": [
                            {
                                "name": "Major Dental 1",
                                "amountInfo": {
                                    "usedAmount": 320,
                                    "limitAmount": null,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Major Dental 2",
                                "amountInfo": {
                                    "usedAmount": 330,
                                    "limitAmount": 800,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 700,
                            "limitAmount": 800,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //134900
        request: {
            membershipId: 66118027,
            personId: 18692756
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "Major Dental",
                        "subModalities": [
                            {
                                "name": "Major Dental 1",
                                "amountInfo": {
                                    "usedAmount": 320,
                                    "limitAmount": null,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Major Dental 2",
                                "amountInfo": {
                                    "usedAmount": 330,
                                    "limitAmount": 800,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 700,
                            "limitAmount": 800,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //134900
        request: {
            membershipId: 66118027,
            personId: 18692757
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "Major Dental",
                        "subModalities": [
                            {
                                "name": "Major Dental 1",
                                "amountInfo": {
                                    "usedAmount": 320,
                                    "limitAmount": null,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Major Dental 2",
                                "amountInfo": {
                                    "usedAmount": 330,
                                    "limitAmount": 800,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 700,
                            "limitAmount": 800,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //134900
        request: {
            membershipId: 66118027,
            personId: 18692758
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "Major Dental",
                        "subModalities": [
                            {
                                "name": "Major Dental 1",
                                "amountInfo": {
                                    "usedAmount": 320,
                                    "limitAmount": null,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Major Dental 2",
                                "amountInfo": {
                                    "usedAmount": 330,
                                    "limitAmount": 800,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 700,
                            "limitAmount": 800,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": null,
                            "servicesUsed": null,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //Tiep
        request: {
            membershipId: 98837214,
            personId: 246447247
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [{
                        "name": "Dental Scale and Clean",
                        "subModalities": [
                            {
                                "name": "Dental Scale and Clean A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Scale and Clean B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                {
                                    "name": "X-Ray A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "X-Ray C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //tiep
        request: {
            membershipId: 98837214,
            personId: 246447248
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [{
                        "name": "Dental Scale and Clean",
                        "subModalities": [
                            {
                                "name": "Dental Scale and Clean A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Scale and Clean B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                {
                                    "name": "X-Ray A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "X-Ray C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { //Tiep
        request: {
            membershipId: 98837214,
            personId: 246447249
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [{
                        "name": "Dental Scale and Clean",
                        "subModalities": [
                            {
                                "name": "Dental Scale and Clean A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Scale and Clean B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                {
                                    "name": "X-Ray A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "X-Ray C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { // 134925: UC0318C_AC10_ST002
        request: {
            membershipId: 65939258,
            personId: 246680581
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "Sub type 1",
                                "amountInfo": {
                                    "usedAmount": 500,
                                    "limitAmount": 1200,
                                    "usedPercent": 6.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "Sub type 2",
                                "amountInfo": {
                                    "usedAmount": 300,
                                    "limitAmount": 1000,
                                    "usedPercent": 6.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": null,
                        "serviceInfo": null,
                        "isLimitReached": false
                    },
                        {
                            "name": "Dietary",
                            "subModalities": [
                                // {
                                // "name": "Dental Scale and Clean A",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": 255,
                                // "servicesUsed": 123,
                                // "usedPercent": 46.53
                                // },
                                // },
                                {
                                    "name": "Sub Type",
                                    "amountInfo": {
                                        "usedAmount": 500,
                                        "limitAmount": null,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                                // {
                                // "name": "General Dental C",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": null,
                                // "servicesUsed": 200,
                                // "usedPercent": 40.5
                                // },
                                // }
                            ],
                            "amountInfo": {
                                "usedAmount": 300,
                                "limitAmount": null,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Non-member First",
                                    "amountInfo": {
                                        "usedAmount": 200,
                                        "limitAmount": 300,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Member First",
                                    "amountInfo": {
                                        "usedAmount": 150,
                                        "limitAmount": 300,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": null,
                            "serviceInfo": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                // {
                                // "name": "Dental Scale and Clean A",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": 255,
                                // "servicesUsed": 123,
                                // "usedPercent": 46.53
                                // },
                                // },
                                // {
                                // "name": "Dental Scale and Clean B",
                                // "amountInfo": {
                                // "usedAmount": 200,
                                // "limitAmount": 1500,
                                // "usedPercent": 6.2
                                // },
                                // "serviceInfo": null,
                                // },
                                // {
                                // "name": "General Dental C",
                                // "amountInfo": null,
                                // "serviceInfo": {
                                // "servicesNumber": null,
                                // "servicesUsed": 200,
                                // "usedPercent": 40.5
                                // },
                                // }
                            ],
                            "amountInfo": {
                                "usedAmount": 250,
                                "limitAmount": 100,
                                "usedPercent": 4.5
                            },
                            "serviceInfo": {
                                "servicesNumber": null,
                                "servicesUsed": null,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Sub type 1",
                                    "amountInfo": {
                                        "usedAmount": 280,
                                        "limitAmount": 400,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Sub type 2",
                                    "amountInfo": {
                                        "usedAmount": 250,
                                        "limitAmount": 320,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": null,
                            "serviceInfo": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Major Dental",
                            "subModalities": [
                                {
                                    "name": "Sub type 1",
                                    "amountInfo": {
                                        "usedAmount": 320,
                                        "limitAmount": 700,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Sub type 2",
                                    "amountInfo": {
                                        "usedAmount": 330,
                                        "limitAmount": 710,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": null,
                            "serviceInfo": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Psychology",
                            "subModalities": [
                                {
                                    "name": "Sub type 1",
                                    "amountInfo": {
                                        "usedAmount": 120,
                                        "limitAmount": 200,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Sub type 2",
                                    "amountInfo": {
                                        "usedAmount": 210,
                                        "limitAmount": 340,
                                        "usedPercent": 6.2
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": null,
                            "serviceInfo": null,
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    {
        request: {
            membershipId: 56446479,
            personId: 247004187 //Quynh Pham Nhu
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Major Dental",
                            "subModalities": [
                                {
                                    "name": "Major Dental A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Major Dental C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "subModalities": [
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Orthodontia C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Optical C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physiotherapy",
                            "subModalities": [
                                {
                                    "name": "Physiotherapy A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physiotherapy C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
	{
        request: {
            membershipId: 133140,
            personId: 246709810 //Helen Jacob Gatilogo
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Major Dental",
                            "subModalities": [
                                {
                                    "name": "Major Dental A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Major Dental C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "subModalities": [
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Orthodontia C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Optical C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physiotherapy",
                            "subModalities": [
                                {
                                    "name": "Physiotherapy A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physiotherapy C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
	{
        request: {
            membershipId: 59325001,
            personId: 246709810 //Quynh Pham Nhu
        },
        response: {
            data: {
                "data": {
                    "modalities": [{
                        "name": "General Dental",
                        "subModalities": [
                            {
                                "name": "General Dental A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "Major Dental",
                            "subModalities": [
                                {
                                    "name": "Major Dental A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Major Dental C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "subModalities": [
                                {
                                    "name": "Orthodontia",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                },
                                {
                                    "name": "Orthodontia C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Optical A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Optical C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Physiotherapy",
                            "subModalities": [
                                {
                                    "name": "Physiotherapy A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Physiotherapy C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    {
        request: {
            membershipId: 1111111,
            personId: 1111111
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [
                        {
                            "name": "Physiotherapy",
                            "amountInfo": {
                                "usedAmount": 356.1,
                                "limitAmount": 900,
                                "usedPercent": 0.3956666666666666666666666667
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Chiropractic & Osteopathy",
                            "amountInfo": {
                                "usedAmount": 160,
                                "limitAmount": 500,
                                "usedPercent": 0.32
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "General Dental",
                            "amountInfo": {
                                "usedAmount": 0,
                                "limitAmount": null,
                                "usedPercent": null
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Major Dental",
                            "amountInfo": {
                                "usedAmount": 0,
                                "limitAmount": 1000,
                                "usedPercent": 0
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Orthodontia",
                            "amountInfo": {
                                "usedAmount": 0,
                                "limitAmount": 1800,
                                "usedPercent": 0
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "amountInfo": {
                                "usedAmount": 0,
                                "limitAmount": 600,
                                "usedPercent": 0
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Psychology",
                            "amountInfo": {
                                "usedAmount": 0,
                                "limitAmount": 600,
                                "usedPercent": 0
                            },
                            "serviceInfo": null,
                            "subModalities": null,
                            "isLimitReached": false
                        },
                        {
                            "name": "Natural Therapies",
                            "amountInfo": {
                                "usedAmount": 0,
                                "limitAmount": 800,
                                "usedPercent": 0
                            },
                            "serviceInfo": null,
                            "subModalities": [
                                {
                                    "name": "Massage",
                                    "amountInfo": {
                                        "usedAmount": 0,
                                        "limitAmount": 100,
                                        "usedPercent": 0
                                    },
                                    "serviceInfo": null,
                                    "subModalities": null,
                                    "isLimitReached": false
                                }
                            ],
                            "isLimitReached": false
                        },
                        {
                            "name": "Optical",
                            "amountInfo": null,
                            "serviceInfo": null,
                            "subModalities": [
                                {
                                    "name": "Non-Members First",
                                    "amountInfo": {
                                        "usedAmount": 179,
                                        "limitAmount": 180,
                                        "usedPercent": 0.9944444444444444444444444444
                                    },
                                    "serviceInfo": null,
                                    "subModalities": null,
                                    "isLimitReached": true
                                },
                                {
                                    "name": "Members First",
                                    "amountInfo": null,
                                    "serviceInfo": null,
                                    "subModalities": null,
                                    "isLimitReached": false
                                }
                            ],
                            "isLimitReached": false
                        }
                    ],
                    "isLimitReached": false
                },
                "items": []
            }
        }
    },
    { // AP
        request: {
            membershipId: 16686701,
            personId: 203918467
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [
                        {
                            "name": "Psychology",
                            "subModalities": null,
                            "amountInfo": {
                                "usedAmount": 140,
                                "limitAmount": 250,
                                "usedPercent": 0.56
                            },
                            "serviceInfo": null,
                            "isLimitReached": false
                        }
                    ],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    },
    { // AP
        request: {
            membershipId: 16686701,
            personId: 435494539
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [
                        {
                            "name": "Optical",
                            "subModalities": [
                                {
                                    "name": "Podiatry",
                                    "amountInfo": {
                                        "usedAmount": 180,
                                        "limitAmount": 190,
                                        "usedPercent": 0.94736842105263157894736842105263
                                    },
                                    "serviceInfo": {
                                        "servicesNumber": 200,
                                        "servicesUsed": 180,
                                        "usedPercent": 0.9
                                    },
                                    "isLimitReached": true
                                },
                                {
                                    "name": "Optical B",
                                    "amountInfo": {
                                        "usedAmount": 140,
                                        "limitAmount": 250,
                                        "usedPercent": 0.56
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": null,
                            "serviceInfo": null,
                            "isLimitReached": true
                        },
                        {
                            "name": "Psychology",
                            "subModalities": null,
                            "amountInfo": {
                                "usedAmount": 140,
                                "limitAmount": 250,
                                "usedPercent": 0.56
                            },
                            "serviceInfo": null,
                            "isLimitReached": false
                        }
                    ],
                    "isLimitReached": true
                },
                "item": []
            }
        }
    },
    { // AP
        request: {
            membershipId: 16686701,
            personId: 435498421
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Natural Therapies",
                                    "amountInfo": {
                                        "usedAmount": 180,
                                        "limitAmount": 190,
                                        "usedPercent": 0.94736842105263157894736842105263
                                    },
                                    "serviceInfo": null,
                                    "isLimitReached": true
                                }
                            ],
                            "amountInfo": null,
                            "serviceInfo": null,
                            "isLimitReached": true
                        },
                        {
                            "name": "Psychology",
                            "subModalities": null,
                            "amountInfo": {
                                "usedAmount": 225,
                                "limitAmount": 250,
                                "usedPercent": 0.90
                            },
                            "serviceInfo": null,
                            "isLimitReached": true
                        },
                        {
                            "name": "Dental",
                            "subModalities": null,
                            "amountInfo": null,
                            "serviceInfo": {
                                "usedAmount": 225,
                                "limitAmount": 250,
                                "usedPercent": 0.90
                            },
                            "isLimitReached": true
                        }
                    ],
                    "isLimitReached": true
                },
                "item": []
            }
        }
    },
    { // 134924 UC0318C_AC09_ST004 - Person 
        request: {
            membershipId: 20265534,
            personId: 476138738 //Itai Rijnbeek
        },
        response: {
            data:
            {
                "data": {
                    "modalities": [{
                        "name": "Dental Scale and Clean",
                        "subModalities": [
                            {
                                "name": "Dental Scale and Clean A",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": 200,
                                    "servicesUsed": 100,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            },
                            {
                                "name": "Dental Scale and Clean B",
                                "amountInfo": {
                                    "usedAmount": 200,
                                    "limitAmount": 1000,
                                    "usedPercent": 4.2
                                },
                                "serviceInfo": null,
                                "isLimitReached": false
                            },
                            {
                                "name": "General Dental C",
                                "amountInfo": null,
                                "serviceInfo": {
                                    "servicesNumber": null,
                                    "servicesUsed": 200,
                                    "usedPercent": 40.5
                                },
                                "isLimitReached": false
                            }
                        ],
                        "amountInfo": {
                            "usedAmount": 200,
                            "limitAmount": 1500,
                            "usedPercent": 4.2
                        },
                        "serviceInfo": {
                            "servicesNumber": 100,
                            "servicesUsed": 200,
                            "usedPercent": 40.5
                        },
                        "isLimitReached": false
                    },
                        {
                            "name": "X-Ray",
                            "subModalities": [
                                {
                                    "name": "X-Ray A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 500,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "X-Ray C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        },
                        {
                            "name": "Podiatry",
                            "subModalities": [
                                {
                                    "name": "Podiatry A",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": 0,
                                        "servicesUsed": 0,
                                        "usedPercent": 30.5
                                    },
                                    "isLimitReached": false
                                },
                                {
                                    "name": "Podiatry C",
                                    "amountInfo": null,
                                    "serviceInfo": {
                                        "servicesNumber": null,
                                        "servicesUsed": 0,
                                        "usedPercent": 40.5
                                    },
                                    "isLimitReached": false
                                }
                            ],
                            "amountInfo": {
                                "usedAmount": 200,
                                "limitAmount": 1500,
                                "usedPercent": 4.2
                            },
                            "serviceInfo": {
                                "servicesNumber": 100,
                                "servicesUsed": 200,
                                "usedPercent": 40.5
                            },
                            "isLimitReached": false
                        }],
                    "isLimitReached": false
                },
                "item": []
            }
        }
    }
]	
