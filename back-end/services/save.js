(function() {
  'use strict';

  exports.all = function(options) {
    var document = io[options.name](options.details);
      document.save(function(error) {
        if(error) {return options.res.json(403, 'Forbidden');}
        if(options.done) {return options.done(null, document);}
        else {options.res.json('success');}
      });
  };

  exports.withSubDocuments = function(options) {
    var document  = io[options.name].teaching.push({name: 'jories', votes: 2});
      document.save(function(error) {
        if(error) {return options.res.json(403, 'Forbidden');}
        if(options.done) {return options.done(null, document);}
        else {options.res.json('success');}
      });
  };
}());
