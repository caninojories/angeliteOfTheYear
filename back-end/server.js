(function() {
  'use strict';

  global.appRequire = function(name) {
    return require(__dirname + '/' + name);
  };

  global.io = appRequire('services/module.config');

  var  catchAll  = require('./routes');

  /*Configuration File NoSQL Database*/
  require('./configuration/mongodb'); //mongodb integration

  /*Start our Express Server*/
  var app = io.express();

  /*Require our Configuration Files*/
  require('./configuration/express')(app);
  //require('./configuration/passport')(io.passport);

  /*Routes*/
  io.useApp(app);
  io.useApi(app);
  app.use('*', catchAll);

  /*.cluster Configuration*/
  if (io.cluster.isMaster) {io.clusterService();}
  else {
    app.listen(io.port, function() {
      console.log(io.chalk.red.reset.underline('listening to port ') +
      io.chalk.cyan.bold((io.port)));
    });
  }
}());
