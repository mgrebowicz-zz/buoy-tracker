import sendRequest from './send-request';

const BASE_URL = '/api/buoys';


export function getBuoyById(stationId) {
    //url, method = GET, payload 
    return sendRequest(`${BASE_URL}/` + stationId);
};

// export async function getBuoyById(stationId) {
//     let url = BASE_URL + stationId + apikey
//     let response = await fetch(url);
//     let result = await response.json;
//     return result;
// };

