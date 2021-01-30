const fetch = require('node-fetch');
const BASE_URL = 'http://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations/';
const apikey = process.env.REACT_APP_PLANET_OS_KEY;



module.exports = {
    show,
}

async function show(req, res) {
    fetch(`${BASE_URL}${req.params.id}?apikey=${apikey}&time_order=desc`)
        .then(res => res.json())
        .then(json => res.json(json))
        .catch(err => res.json(err))
};