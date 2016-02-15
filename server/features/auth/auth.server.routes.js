// GOOGLE AUTH ROUTES //
module.exports = function (app, passport) {

    app.get('/auth/google', passport.authenticate('google', {
        session: true,
        scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), function (req, res, next) {
        if (req.user) {
            res.redirect('/#/user/' + req.user._id);
            console.log('Login successful');
        }
        else {
            res.redirect('/');
        }
    });  
    
    // LOG OUT //
    app.get('/auth/logout', function (req, res) {
        req.logout();
        console.log('You have logged out')
        res.redirect('/#');
    });




};