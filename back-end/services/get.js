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
    io.async.series([
      function(callback){
        var nonTeaching = ['Ma. Victoria Pineda', 'Maricris Simbulan', 'Jocelyn Villavicencio'];
        var nonTeachingDatas = {
          nonTeaching: []
        };
        var counter = 0;
        for(var i = 0; i < nonTeaching.length; i++) {
          io[options.name]
            .find({nonTeaching :  nonTeaching[i]})
            .count(function(err, count) {
              nonTeachingDatas.nonTeaching.push({name: nonTeaching[counter], vote: count});
              if (counter === nonTeaching.length - 1) {
                callback(null, nonTeachingDatas);
              }
              counter++;
            });
        }
      },
      function(callback){
        var student = ['Erika Jeana Cariño', 'Jay Arcie Carreon', 'Nikolai Cayanan', 'Kathleen Kaye Tiglao'];
        var studentData = {
          student: []
        };
        var counter = 0;
        for(var i = 0; i < student.length; i++) {
          io[options.name]
            .find({student :  student[i]})
            .count(function(err, count) {
              studentData.student.push({name: student[counter], vote: count});
              if (counter === student.length - 1) {
                callback(null, studentData);
              }
              counter++;
            });
        }
      },
      function(callback){
        var org = ['IIEE', 'JPIA', 'MANSOC', 'PSME'];
        var orgData = {
          org: []
        };
        var counter = 0;
        for(var i = 0; i < org.length; i++) {
          io[options.name]
            .find({org :  org[i]})
            .count(function(err, count) {
              orgData.org.push({name: org[counter], vote: count});
              if (counter === org.length - 1) {
                callback(null, orgData);
              }
              counter++;
            });
        }
      }],
      function(err, results){
        options.res.json(results);
      }
    );
  };
}());
