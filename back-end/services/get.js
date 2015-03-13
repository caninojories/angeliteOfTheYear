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
    return io[options.name]
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


  exports.findAndCount = function(options, name) {
    var nonTeachingData = {
      nonTeaching: [],
      student: [],
      org: []
    };

    io[options.name].find( {nonTeaching :  'Ma. Victoria Pineda'}).count(function(err, count) {
      nonTeachingData.nonTeaching.push({name: 'Ma. Victoria Pineda', vote: count});
      io[options.name].find( {nonTeaching : 'Maricris Simbulan'}).count(function(err, count) {
        nonTeachingData.nonTeaching.push({name: 'Maricris Simbulan', vote: count});
        io[options.name].find( {nonTeaching : 'Jocelyn Villavicencio'}).count(function(err, count) {
          nonTeachingData.nonTeaching.push({name: 'Jocelyn Villavicencio', vote: count});
          io[options.name].find( {student : 'Erika Jeana Cariño'}).count(function(err, count) {
            nonTeachingData.student.push({name: 'Erika Jeana Cariño', vote: count});
            io[options.name].find( {student : 'Jay Arcie Carreon'}).count(function(err, count) {
              nonTeachingData.student.push({name: 'Jay Arcie Carreon', vote: count});
              io[options.name].find( {student : 'Nikolai Cayanan'}).count(function(err, count) {
                nonTeachingData.student.push({name: 'Nikolai Cayanan', vote: count});
                io[options.name].find( {student : 'Kathleen Kaye Tiglao'}).count(function(err, count) {
                  nonTeachingData.student.push({name: 'Kathleen Kaye Tiglao', vote: count});
                  io[options.name].find( {org : 'IIEE'}).count(function(err, count) {
                    nonTeachingData.org.push({name: 'IIEE', vote: count});
                    io[options.name].find( {org : 'JPIA'}).count(function(err, count) {
                      nonTeachingData.org.push({name: 'JPIA', vote: count});
                      io[options.name].find( {org : 'MANSOC'}).count(function(err, count) {
                        nonTeachingData.org.push({name: 'MANSOC', vote: count});
                        io[options.name].find( {org : 'PSME'}).count(function(err, count) {
                          nonTeachingData.org.push({name: 'PSME', vote: count});
                          options.res.json(nonTeachingData);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  };
}());
