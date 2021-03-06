(function() {
  'use strict';

  module.exports = function (dbName) {
    if( global.io.mongoose.connection.readyState === 0 ) {
      return io.mongoose.connectAsync(dbName);
    } else {
      return io.mongoose.disconnectAsync(function() {
        io.mongoose.connection.close(function() {
          io.mongoose.connectAsync(dbName);
        });
      });
    }
  };
}());
