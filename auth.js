const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user'); // Adjust the path as needed

passport.use(new LocalStrategy(
    { usernameField: 'email' }, // Adjust if your login form uses 'email' instead of 'username'
    async (email, password, done) => {
        try {
            // console.log('Received credentials:', email, password);
            const user = await User.findOne({ email });
            if (!user)
                return done(null, false, { message: 'Incorrect email.' });

            const isPasswordMatch = await user.comparePassword(password);
            if (isPasswordMatch)
                return done(null, user);
            else
                return done(null, false, { message: 'Incorrect password.' });
        } catch (error) {
            return done(error);
        }
    }
));

module.exports = passport; // Export configured passport
