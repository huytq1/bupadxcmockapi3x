export default [
    {
        request: {
            personPaymentCardId: 1234567890
        },
        response: {
          data:{
    			  "cardBrandName": "Visa",
    			  "cardHolderName": "Jonh",
    			  "personPaymentCardId": 1234567890,
                  "maskedCardNumber": "554888******4576",
    			  "expiryMonth": "06",
    			  "expiryYear": "2029"
    			}
        }
    },

    {
        request: {
            personPaymentCardId: 200200
        },
        response: {
            data:
            {
                personPaymentCardId: 200200,
                cardBrandName: 'Tokyo Bank',
                cardHolderName: 'Talame',
                maskedCardNumber: '554858********5568',
                expiryMonth: '07',
                expiryYear: '2024'
            }
        }
    },
    {
        request: {
            personPaymentCardId: 222222
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            personPaymentCardId: 333333
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            personPaymentCardId: 111111
        },
        response: {
            response: {
              data:
                {
                    personPaymentCardId: 111111,
                    cardBrandName: 'Tokyo Bank',
                    cardHolderName: 'Talame',
                    maskedCardNumber: '554858********5568',
                    expiryMonth: '07',
                    expiryYear: '2024'
                }
            }
        }
    }
];
