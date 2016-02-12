var mongoose = require('mongoose');

module.exports = function () {
    var mongoUri = 'mongodb://admin:admin@ds061385.mongolab.com:61385/journalize';
    mongoose.connect(mongoUri);
    mongoose.connection.once('open', function () {
        console.log('Connection to mongoDB successful')
    });
};