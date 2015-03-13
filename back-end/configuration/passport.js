(function() {
  'use strict';

  var node = appRequire('services/module.config');

  module.exports = function(passport) {
    passport.serializeUser(function( user, done ) {
      done( null, user._id );
    });

    passport.deserializeUser(function(id, done) {
      node.mongoDB( node, node.config.dbName )
        .then(function(connection) {
          node.User.User.findById(id, function(err, user) {
            done(err, user);
          });
        });
    });

    passport.use('local-login', new io.LocalStrategy({
      usernameField: 'email'
    }, function(email, password, done) {
      io.mongoDB(io.config.dbName)
      .then(function(connection) {
        node.User.findOne({
          email: email
        }, function(err, user) {
          if (err) {return done(err);}
          if (!user) {
            return done(null, false, {
              message: 'Wrong email/password'
            });
          }
          user.comparePasswords(password, function(err, isMatch) {
            if (err) {return done(err);}
            if (!isMatch) {
              return done(null, false, {
                message: 'Wrong email/password'
              });
            }
            return done(null, user);
          });
        });
      });
    }));

    passport.use('local-votersLogin', new io.LocalStrategy({
      usernameField: 'votersId'
    }, function(votersId, password, done) {
      console.log('jories');
      node.mongoDB(node.config.dbName)
      .then(function(connection) {
        node.Voters.findOne({
          votersId: votersId
        }, function(err, voters) {
          console.log(voters);
          if (err) {return done(err);}
          if (!voters) {
            return done(null, false, {
              message: 'Wrong email/password'
            });
          }
        });
      });
    }));

    passport.use('local-register', new io.LocalStrategy({
      usernameField: 'email',
      passReqToCallback: true
    }, function(req, email, password, done) {
      var options = {
        io: io,
        name: 'User',
        details: {
          email   : email,
          password: password,
          username: req.body.username
        },
        done: done
      };

      io.mongoDB(io.config.dbName)
        .then(io.save.all(options));
    }));
  };
}());
