"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        request: {
            membershipId: 111111,
            personId: 111111
        },
        response: {
            data: {
                limitReached: true,
                ancillaryModalities: [
                    {
                        name: "jonh",
                        limit: 11,
                        used: 2,
                        usedPercentage: 40
                    },
                    {
                        name: "coset",
                        limit: 43,
                        used: 12,
                        usedPercentage: 12
                    }
                ]
            }
        }
    },
    {
        request: {
            membershipId: 222222,
            personId: 222222
        },
        response: {
            data: {
                limitReached: false,
                ancillaryModalities: [
                    {
                        name: "kika",
                        limit: 333,
                        used: 43,
                        usedPercentage: 44
                    },
                    {
                        name: "coset",
                        limit: 1123,
                        used: 432,
                        usedPercentage: 14.5
                    }
                ]
            }
        }
    },
    {
        request: {
            membershipId: 333333,
            personId: 333333
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            membershipId: 444444,
            personId: 444444
        },
        response: {
            status: 404
        }
    },
    {
        request: {
            membershipId: 555555,
            personId: 555555
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            membershipId: 84470160,
            personId: 13266432
        },
        response: {
            data: {
                limitReached: true,
                ancillaryModalities: [
                    {
                        name: "kika",
                        limit: 333,
                        used: 43,
                        usedPercentage: 44
                    },
                    {
                        name: "coset",
                        limit: 1123,
                        used: 432,
                        usedPercentage: 89
                    }
                ]
            }
        }
    },
    {
        request: {
            membershipId: 9684564,
            personId: 199626763
        },
        response: {
            data: {
                limitReached: true,
                ancillaryModalities: [
                    {
                        name: "Physiopractic and Osteopathy",
                        limit: 250,
                        used: 110,
                        usedPercentage: 44
                    },
                    {
                        name: "Dental",
                        limit: 100,
                        used: 80,
                        usedPercentage: 80.1
                    }
                ]
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            personId: 203918494
        },
        response: {
            data: {
                limitReached: true,
                ancillaryModalities: [
                    {
                        name: "Physiopractic and Osteopathy",
                        limit: 250,
                        used: 202.5,
                        usedPercentage: 81.000000
                    },
                    {
                        name: "Dental",
                        limit: 4651,
                        used: 4651,
                        usedPercentage: 100
                    }
                ]
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            personId: 203918467
        },
        response: {
            data: {
                limitReached: true,
                ancillaryModalities: [
                    {
                        name: "Physiopractic and Osteopathy",
                        limit: 4323,
                        used: 432,
                        usedPercentage: 10.00
                    },
                    {
                        name: "Dental",
                        limit: 243,
                        used: 243,
                        usedPercentage: 100
                    },
                    {
                        name: "Podiatry",
                        limit: 543,
                        used: 537,
                        usedPercentage: 99
                    },
                    {
                        name: "Optical",
                        limit: 7839,
                        used: 7651,
                        usedPercentage: 84.12365448
                    },
                    {
                        name: "Psychology",
                        limit: 37,
                        used: 148,
                        usedPercentage: 400
                    },
                    {
                        name: "Natural Therapies",
                        limit: 345,
                        used: 283,
                        usedPercentage: 82.1
                    }
                ]
            }
        }
    },
    {
        request: {
            membershipId: 16686701,
            personId: 435494539
        },
        response: {
            data: {
                limitReached: false,
                ancillaryModalities: [
                    {
                        name: "Physiopractic and Osteopathy",
                        limit: 250,
                        used: 110,
                        usedPercentage: 44
                    },
                    {
                        name: "Dental",
                        limit: 100,
                        used: 40,
                        usedPercentage: 40
                    }
                ]
            }
        }
    }
];
//# sourceMappingURL=getAncillaryModalityLimit.js.map