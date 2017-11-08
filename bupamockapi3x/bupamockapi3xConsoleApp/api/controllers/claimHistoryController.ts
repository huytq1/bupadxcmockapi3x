import * as utils from '../utils';

export function getAncillaryClaim(req, res, next): void {
    console.log(req);
    utils.processRequestWithResponseBody(req, res, next, 'claimHistory/getAncillaryClaim');
}

export function getAncillaryClaimSummaries(req, res, next): void {
    console.log(req);
    utils.processRequestWithResponseBody(req, res, next, 'claimHistory/getAncillaryClaimSummaries');
}