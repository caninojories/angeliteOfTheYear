(function() {
  'use strict';

  var node = appRequire('services/module.config');

  module.exports = function(passport) {
    passport.use('local-login', new node.LocalStrategy({
      usernameField: 'email'
    }, function(email, password, done) {
      node.mongoDB(node, node.config.dbName)
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

    passport.use('local-votersLogin', new node.LocalStrategy({
      usernameField: 'votersId'
    }, function(votersId, password, done) {
      console.log('jories');
      node.mongoDB(node, node.config.dbName)
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
          // user.comparePasswords(password, function(err, isMatch) {
          //   if (err) {return done(err);}
          //   if (!isMatch) {
          //     return done(null, false, {
          //       message: 'Wrong email/password'
          //     });
          //   }
          //   return done(null, user);
          // });
        });
      });
    }));

    passport.use('local-register', new node.LocalStrategy({
      usernameField: 'email',
      passReqToCallback: true
    }, function(req, email, password, done) {
      node.mongoDB(node, node.config.dbName)
        .then(function(connection) {
          var newUser = node.User({
            email: email,
            password: password,
            username: req.body.username
          });
          return newUser;
        }).then(function(user) {
            user.save(function(err) {
             if (err) {return done(null, false);}
              done(null, user);
          });
        });
    }));
  };
}());
