module.exports = {
    show,
}

async function show(req, res) {
    const buoy = await buoyAPI.getBuoyById(req.params);
    res.json(buoy)   
}