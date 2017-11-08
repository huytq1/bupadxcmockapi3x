export default [
/*
 case "error 500":
            return res.status(500).send();
        case "error 400":
            return res.status(400).send();
        case "error 401":
            return res.status(401).send();
        case "error 403":
            return res.status(403).send();
        case "error 406":
            return res.status(406).send();
*/
    {
        request: {
            addressSearch: "error 500",
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            addressSearch: "error 400",
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            addressSearch: "error 401",
        },
        response: {
            status: 401
        }
    },
    {
        request: {
            addressSearch: "error 403",
        },
        response: {
            status: 403
        }
    },
    {
        request: {
            addressSearch: "error 406",
        },
        response: {
            status: 406
        }
    },
    {
        request: {
            addressSearch: "addressTestingError",
        },
        response: {
            status: 422,
            headers: {
                "Other": "When the media type—particularly the API version that comes with it---is unsupported."
            }
        }
    },
    {
        request: {
            addressSearch: "e400",
        },
        response: {
            status: 400,
            headers: {
                "Address400": "Data cannot be returned as it received a bad request. Please try again and contact the Bupa IS Service Desk if the issue persists. (error 400 - bad request)."
            }
        }
    },
    {
        request: {
            top: 10,
            addressLine: "phan"
        },
        response: {
            data: {
                "addressList": [
                    {
                        "street1": "Phan Van Han",
                        "street2": "Phan Dinh Tung",
                        "street3": "Phan Dinh Dot",
                        "city": "HCM",
                        "state": "NA",
                        "zip": "0801",
                        "country": "VietName",
                        "addressType": "Residential"
                    },
                    {
                        "street1": "Phan Dinh Phung",
                        "street2": "Phan Boi Chau",
                        "street3": "Phan Chu Trinh",
                        "city": "HCM",
                        "state": "MHA",
                        "zip": "9001",
                        "country": "VietName",
                        "addressType": "Residential"
                    }
                ]
            }
        }
    },
//////// QC data
    {
        request: {
            top: 10,
            addressLine: "test"
        },
        response: {
            data: {
                "addressList": [
                    {
                        "street1": "Test Van Han",
                        "street2": "Phan Test Tung",
                        "street3": "Phan Dinh Test",
                        "city": "HCM",
                        "state": "TBA",
                        "zip": "8781",
                        "country": "VietNam",
                        "addressType": "Residential"
                    },
                    {
                        "street1": "Test Dinh Phung",
                        "street2": "Phan Test Chau",
                        "street3": "Test Chu Trinh",
                        "city": "HCM",
                        "state": "NSW",
                        "zip": "0909",
                        "country": "VietNam",
                        "addressType": "Residential"
                    },
                    {
                        "street1": "Vo Van Tan",
                        "street2": "Vo Thi Sau",
                        "street3": "Vo Nhai Than Coc",
                        "city": "HCM",
                        "state": "NSW",
                        "zip": "2190",
                        "country": "VietNam",
                        "addressType": "Residential"
                    },
                    {
                        "street1": "Le Nga",
                        "street2": "Le Lai",
                        "street3": "Le Thi Rieng",
                        "city": "HCM",
                        "state": "NSW",
                        "zip": "2195",
                        "country": "VietNam",
                        "addressType": "Residential"
                    }
                ]
            }
        }
    },
    {
        request: {
            top: 10,
            addressLine: "aloo"
        },
        response: {
            data: {
                "addressList": [
                    {
                        "street1": "Test aloo Han",
                        "street2": "Phan aloo Tung",
                        "street3": "aloo Dinh Test",
                        "city": "HCM",
                        "state": "Y",
                        "zip": "2198",
                        "country": "VietNam",
                        "addressType": "Residential"
                    },
                    {
                        "street1": "Test Dinh Phung",
                        "street2": "Phan Test aloo",
                        "street3": "Test Chu Trinh",
                        "city": "HCM",
                        "state": "NSW",
                        "zip": "2194",
                        "country": "VietNam",
                        "addressType": "Residential"
                    }
                ]
            }
        }
    }
]