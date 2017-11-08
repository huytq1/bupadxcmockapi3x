export default [
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
      personId: 800000000,
      membershipId: 33333333
    },
    response: {
      data: [
        {
          sentOn:"2017-08-01T08:55:00.819Z",
          membershipNo: 444444,
          category:"no1",
          description:"Super pro",
          recipient: "03894j30485ojksdf983lk",
          communicationMethod: "chat"
        },
		{
          sentOn:"2017-10-10T08:55:00.819Z",
          membershipNo: 111111111,
          category:"no2",
          description:"Super pro 2",
          recipient: "03894j30485ojksdf983lk333333333333",
          communicationMethod: "chat2"
        },
		{
          sentOn:"2016-05-02T08:55:00.819Z",
          membershipNo: 222222222,
          category:"no1444",
          description:"Super pro444",
          recipient: "03894j30485ojksdf983lk444",
          communicationMethod: "chat4444"
        },
		{
          sentOn:"2017-03-05T08:55:00.819Z",
          membershipNo: 33333333,
          category:"no1444",
          description:"Super pro444",
          recipient: "03894j30485ojksdf983lk444",
          communicationMethod: "chat444"
        },
		{
          sentOn:"2016-07-03T08:55:00.819Z",
          membershipNo: 555555555,
          category:"no1333",
          description:"Super pro333",
          recipient: "03894j30485ojksdf983lk333",
          communicationMethod: "chat333"
        }
      ]
    }
  }
];
