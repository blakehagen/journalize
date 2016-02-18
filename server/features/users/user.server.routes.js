var userCtrl = require('./user.server.controller');

module.exports = function (app) {

    app.route('/api/v1/user/:userId')
        .get(userCtrl.getAuthUser) // GET AUTHED USER DATA

};