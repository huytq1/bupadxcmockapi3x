export default [
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
    }, //9684564
    {
        request: {
            personId: 199460897
        },
        response: {
            data: {
                work: "366 000",
                home: "000000",
                mobile: "000",
                email: "acb@xyz.com"
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
                work: "123456",
                home: "654321",
                mobile: "082143245",
                email: "acb@mail.com"
            }
        }
    },
	{
        request: {
            personId: 435461331
        },
        response: {
            data: {
                work: "654321",
                home: "123456",
                mobile: "08015471",
                email: "xyz@mail.com"
            }
        }
    },
	{ // TC121076 - Non-Bupa 
        request: {
            personId: 35791246
        },
        response: {
            data: {
                work: "1245789",
                home: "9638274",
                mobile: "123456789",
                email: "crm@gmail.com"
            }
        }
    },
    { // Person of membership 311111
        request: {
            personId: 321654
        },
        response: {
            data: {
                work: "11523525",
                home: "8910969",
                mobile: "123456789",
                email: "hnguyen300@yopmail.com"
            }
        }
    },
    /*{ // Data for UC0112
        request: {
            personId: 995577889
        },
        response: {
            data: {
                work: "2468579",
                home: "8857749",
                mobile: "101012121",
                email: "rmx@gmail.com"
            }
        }
    }*/
];
