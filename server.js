// REQUIRE EXPRESS, MONGOOSE, and PASSPORT CONFIG FILES //
var express = require('./server/config/express');
var mongoose = require('./server/config/mongoose');
var passport = require('passport');
require('./server/config/passport.google')(passport);

// RUN EXPRESS & MONGOOSE CONFIG //
var app = express();
var db = mongoose();











// PORT //
var port = process.env.PORT || 3030;

app.listen(port, function () {
    console.log('I got you on port ' + port);

});