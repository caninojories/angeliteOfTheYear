(function() {
  'use strict';

  exports.findList = function(options) {
    return io[options.name]
      .find(options.find || {})
      .sort(options.sort || {})
      .exec()
      .then(function(result) {
        return options.res.json(result);
      });
  };

  exports.findOne = function(options) {
    return options.io[options.name]
      .findOne(options.find)
      .exec()
      .then(function(result) {
        options.res.json(result);
      });
  };

  exports.findOneById = function(options) {
    return options.io[options.name]
      .findById(options.find)
      .exec()
      .then(function(result) {
        return options.res.json(result);
      });
  };

  exports.findVotersResult = function(options) {
    io[options.name].teachingResult('one', function(doc) {
      console.log(doc);
    });
  };
}());
