export default [
    {
        request: {
            membershipId: 789987,
        },
        response: {
            status: 400
        }
    },
	{
        request: {
            membershipId: 987789,
        },
        response: {
            status: 500
        }
    },
	{
        request: {
            membershipId: 111111,
        },
        response: {
            data:
						{
							street1: "34 Kyoto Street",
                            street2: "Japanese",
                            street3: "street3"
						}
        }
    },
	{
        request: {
            membershipId: 92206127,
        },
        response: {
            data:
						{
							street1: "366 Nguyen Trai",
                            street2: "District 5",
                            street3: "HCM"
						}
        }
    },
	{
        request: {
            membershipId: 9684564,
        },
        response: {
            data:
						{
							street1: "",
                            street2: "",
                            street3: ""
						}
        }
    }
];
