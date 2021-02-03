const fetch = require('node-fetch');
const BASE_URL = 'https://api.planetos.com/v1/datasets/noaa_ndbc_stdmet_stations/stations/';
const apikey = process.env.REACT_APP_PLANET_OS_KEY;

module.exports = {
    show,
};

const flattenObject = (obj) => {
    const flattened = {};
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            //Object.assign takes in a target and a source
            Object.assign(flattened, flattenObject(obj[key]));
        } else {
            flattened[key] = obj[key];
        }
    });
    return flattened;
};

async function show(req, res) {
    fetch(`${BASE_URL}${req.params.id}?apikey=${apikey}&time_order=desc`)
        .then(res => res.json())
        .then(data => {
            data = flattenObject(data);
            console.log(data);
            res.json(data);
        })
        .catch(err => res.json(err))
};




