import sendRequest from './send-request';
const BASE_URL = '/api/favorites';

// export function addFavorite(favorite) {
//     return fetch(BASE_URL, {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(favorite)
//     }).then(res => res.json());
// }

export function addFavorite(favoriteId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}`, 'POST', { stationId: favoriteId});
}