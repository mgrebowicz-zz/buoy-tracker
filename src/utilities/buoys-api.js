import sendRequest from './send-request';

const BASE_URL = 'http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations/';

const apikey = process.env.REACT_APP_PLANET_OS_KEY;

export function getBuoyById(stationId) {
    //url, method = GET, payload 
    return sendRequest(`${BASE_URL}/` + stationId + apikey);
};

// export async function getBuoyById(stationId) {
//     let url = BASE_URL + stationId + apikey
//     let response = await fetch(url);
//     let result = await response.json;
//     return result;
// };

