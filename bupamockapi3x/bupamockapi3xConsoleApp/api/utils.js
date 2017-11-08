"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function processRequest(req, res, next, dataFilePath) {
    console.log(dataFilePath);
    var params = {};
    _.assignWith(params, req.swagger.params, function (o, s) { return s.value; });
    console.log(params);
    var data = require('./data/' + dataFilePath).default;
    console.log(data);
    var entry = data.find(function (d) { return d && _.isFunction(d.request) ? d.request(params) : _.isMatch(params, d.request); });
    console.log(entry);
    var result = (entry && entry.response && (_.isFunction(entry.response) ? entry.response(params) : entry.response)) || { status: 404 };
    console.log(result);
    if (result.status) {
        if (result.headers)
            res.set(result.headers);
        res.status(result.status);
    }
    res.json(result.data);
}
exports.processRequest = processRequest;
function processRequestWithResponseBody(req, res, next, dataFilePath) {
    console.log(dataFilePath);
    var params = {};
    _.assignWith(params, req.swagger.params, function (o, s) { return s.value; });
    console.log(params);
    var data = require('./data/' + dataFilePath).default;
    console.log(data);
    var entry = data.find(function (d) { return d && _.isFunction(d.request) ? d.request(params) : _.isMatch(params, d.request); });
    console.log(entry);
    var result = (entry && entry.response && (_.isFunction(entry.response) ? entry.response(params) : entry.response)) || { status: 404 };
    console.log(result);
    if (result.status) {
        if (result.headers)
            res.set(result.headers);
        res.status(result.status);
    }
    var reponseData = JSON.parse(JSON.stringify({ data: result.data, items: result.items }));
    res.json(reponseData);
}
exports.processRequestWithResponseBody = processRequestWithResponseBody;
function processRequestWithResponseBodyAsAddress(req, res, next, dataFilePath) {
    console.log(dataFilePath);
    var params = {};
    _.assignWith(params, req.swagger.params, function (o, s) { return s.value; });
    console.log(params);
    var data = require('./data/' + dataFilePath).default;
    console.log(data);
    var entry = data.find(function (d) { return d && _.isFunction(d.request) ? d.request(params) : _.isMatch(params, d.request); });
    console.log(entry);
    var result = (entry && entry.response && (_.isFunction(entry.response) ? entry.response(params) : entry.response)) || { status: 404 };
    console.log(result);
    if (result.status) {
        if (result.headers)
            res.set(result.headers);
        res.status(result.status);
    }
    var reponseData = JSON.parse(JSON.stringify({ addresses: result.data, items: result.items }));
    res.json(reponseData);
}
exports.processRequestWithResponseBodyAsAddress = processRequestWithResponseBodyAsAddress;
//# sourceMappingURL=utils.js.map