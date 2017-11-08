import { Request, Response, NextFunction } from 'express';
import * as _ from 'lodash';

export function processRequest(req: Request, res: Response, next: NextFunction, dataFilePath: string) {
    console.log(dataFilePath)
    let params = {}
    _.assignWith(params, (<any>req).swagger.params, (o, s) => s.value);
    console.log(params)
    let data: any[] = require('./data/' + dataFilePath).default;
    console.log(data)
    let entry = data.find(d => d && _.isFunction(d.request) ? d.request(params) : _.isMatch(params, d.request));
    console.log(entry)
    let result: any = (entry && entry.response && (_.isFunction(entry.response) ? entry.response(params) : entry.response)) || { status: 404 };
    console.log(result)
    if (result.status) {
        if (result.headers)
            res.set(result.headers)
        res.status(result.status);
    }
    res.json(result.data);
}

export function processRequestWithResponseBody(req: Request, res: Response, next: NextFunction, dataFilePath: string) {
    console.log(dataFilePath)
    let params = {}
    _.assignWith(params, (<any>req).swagger.params, (o, s) => s.value);
    console.log(params)
    let data: any[] = require('./data/' + dataFilePath).default;
    console.log(data)
    let entry = data.find(d => d && _.isFunction(d.request) ? d.request(params) : _.isMatch(params, d.request));
    console.log(entry)
    let result: any = (entry && entry.response && (_.isFunction(entry.response) ? entry.response(params) : entry.response)) || { status: 404 };
    console.log(result)
    if (result.status) {
        if (result.headers)
            res.set(result.headers)
        res.status(result.status);
    }

    var reponseData = JSON.parse(JSON.stringify({ data: result.data, items: result.items }));

    res.json(reponseData);
}
export function processRequestWithResponseBodyAsAddress(req: Request, res: Response, next: NextFunction, dataFilePath: string) {
    console.log(dataFilePath)
    let params = {}
    _.assignWith(params, (<any>req).swagger.params, (o, s) => s.value);
    console.log(params)
    let data: any[] = require('./data/' + dataFilePath).default;
    console.log(data)
    let entry = data.find(d => d && _.isFunction(d.request) ? d.request(params) : _.isMatch(params, d.request));
    console.log(entry)
    let result: any = (entry && entry.response && (_.isFunction(entry.response) ? entry.response(params) : entry.response)) || { status: 404 };
    console.log(result)
    if (result.status) {
        if (result.headers)
            res.set(result.headers)
        res.status(result.status);
    }

    var reponseData = JSON.parse(JSON.stringify({ addresses: result.data, items: result.items }));

    res.json(reponseData);
}
