import * as utils from '../utils';
import * as request from 'request';
import * as DomParser from 'dom-parser';

export function getSessionToken(req, res, next): void {
    // console.log(req.swagger.params.body.raw.sessionId)
    var personId = req.swagger.params.personid.value;
    var sessionId = req.swagger.params.body.raw.sessionId;
    if(sessionId==111111) {
        return res.status(400).send();
    }
    else if(sessionId==222222) {
        return res.status(404).send();
    }
    else if (sessionId == 333333 || req.swagger.params.personid.value==333333) {
        return res.status(500).send();
    }
    else if(personId=='00000000-0000-0000-0000-000000000400' ) {
        return res.status(400).send();
    }
    else if(personId=='00000000-0000-0000-0000-000000000404' ) {
        return res.status(404).send();
    }
    else if(personId=='00000000-0000-0000-0000-000000000500' ) {
        return res.status(500).send();
    }
    else{
      var callbackUrl = req.swagger.params.body.raw.crmCallBackUrl
      console.log(callbackUrl)
      var requestUrl = `https://demo.ippayments.com.au/access/index.aspx?UserName=bupa.demo.api.2&Password=45789hfe9fh&SessionId=sessionid1&SessionKey=abcabcabc1&DL=bupa_tokenise&UserURL=${callbackUrl}`;
      console.log(requestUrl)
      request(requestUrl, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.
          var doc = new DomParser().parseFromString(body);
          var sstTag = doc.getElementsByName("SST")[0];
          var sttValue = sstTag.getAttribute('value');
          var sessionId = "sessionid1";

          var responseData = {
            data: {
                sst: sttValue,
                merchantId: sessionId,
                iframeUrl: `https://demo.ippayments.com.au/access/index.aspx`
            }
          }

          res.json(responseData)
      });
    }
}

export function getPaymentCardInformation(req, res, next): void {
  utils.processRequestWithResponseBody(req, res, next, 'ipp/getPaymentCardInformation');
}
