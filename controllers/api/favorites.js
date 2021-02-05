const User = require('../../models/user');

module.exports = {
   create,
   delete: deleteFavorite
};

function create(req, res) {
    User.findById(req.params.id, function (err, user) {
        req.body.user = req.user._id;
        user.favorites.push(req.body);
        user.save();
    });
}

function deleteFavorite(req, res) {
   User.findOne({ 'favorites._id': req.params.id })
        .then(function (user) {
            const favorite = user.favorites.id(req.params.id);
            favorite.remove();
            user.save();
        });
}