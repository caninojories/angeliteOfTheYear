(function() {
  'use strict';

  exports.putById = function(options) {
    return io[options.name]
      .findById(options.find)
      .exec()
      .then(function(result) {
        for (var obj in options.details) {
          if( options.details.hasOwnProperty(obj)) {
            result[obj] = options.query[obj];
          }
        }
        return result;
      })
      .then(function(result) {
        result.save(function() {
          if(options.count) {return 'jories';}
          options.res.json('success');
        });
      });
  };

  exports.putFindOne = function(options) {
    return io[options.result || options.name]
      .findOne(options.find || {})
      .exec()
      .then(function(result) {
        console.log(result === null);
        return result;
        // for (var obj in options.details) {
        //   if(options.details.hasOwnProperty(obj)) {
        //     result[obj] = result[obj] + 1;
        //   }
        // }
        // return result;
      }).then(function(result) {
        if(result === null) {
          var options = {
            name: 'Result',
            res: options.res,
          };
          io.save.withSubDocuments(options);
        } else {
          result.save(function() {
            options.res.json('success');
          });
        }

      });
  };
}());
