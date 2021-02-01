import sendRequest from './send-request';

const BASE_URL = '/api/buoys';

export function getBuoy(stationId) { 
    return sendRequest(`${BASE_URL}/` + stationId);
};
