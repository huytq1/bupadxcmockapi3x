import * as utils from '../utils';

export function getAncillaryModalityLimit(req, res, next): void {
    console.log(req)
    utils.processRequest(req, res, next, 'ancillaryModalityLimit/getAncillaryModalityLimit');
}
