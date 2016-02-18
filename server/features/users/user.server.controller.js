var User = require('./user.server.model');

module.exports = {
    // GET AUTHENTICATED USER //
    getAuthUser: function (req, res, next) {
        User.findById(req.params.userId).select('-googleId -accountCreatedDate')
            .exec(function (err, user) {
                if (err) {
                    res.status(500);
                }
                res.status(200).json(user)
            })
    },







};