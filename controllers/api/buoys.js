module.exports = {
    show,
}

async function show(req, res) {
    try {
        const buoy = await buoyAPI.getBuoyById(req.params);
        console.log(buoy);
    } catch (err) {
         console.log(err);
    }
}