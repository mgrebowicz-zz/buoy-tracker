const User = require('../../models/user');

module.exports = {
   create,
//    delete: deleteFavorite
};

function create(req, res) {
    User.findById(req.user._id, function (err, user) {
        // req.body.user = req.user._id;
        // console.log(user);
        // console.log(user);
        // user.favorites.push({ stationId: req.body});
        user.favorites.push(req.body);
        console.log(user);
        user.save();
    });
}

// function deleteFavorite(req, res) {
//    User.findOne({ 'favorites._id': req.params.id })
//         .then(function (user) {
//             const favorite = user.favorites.id(req.params.id);
//             favorite.remove();
//             user.save();
//         });
//     };