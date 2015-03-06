(function() {
  'use strict';

  exports.votersSubmit = function(req, res, next) {
    var query   = io.url.parse(req.url, true).query,
        token   = req.headers.authorization.split(' ')[1],
        payLoad = io.jwt.decode(token, 'shhh..'),
        options = {
          find    : payLoad.sub,
          name    : 'Voter',
          result  : 'Result',
          query   : query,
          res     : res,
          count   : true,
          details : {
            teaching    : 'teaching',
            nonTeaching : 'nonTeaching',
            student     : 'student',
            org         : 'org'
          }
        };

    io.mongoDB(io.config.dbName)
      .then(io.update.putById(options));
      //.then(io.update.putFindOne(options));

  };
}());
// if(options.count) {
//   io[options.count.name]
//     .findOne()
//     .exec()
//     .then(function(document) {
//       if(document === null) {
//         var docOptions = {
//           name: 'Result',
//           res: options.res,
//           details: {
//             teaching: 1,
//             nonTeaching: 1,
//             student: 1,
//             org: 1
//           }
//         };
//         io.save(docOptions);
//       } else {
//
//         var docPutOptions = {
//           name: 'Result',
//           res: options.res,
//           details: {
//             teaching    : 'teaching',
//             nonTeaching : 'nonTeaching',
//             student     : 'student',
//             org         : 'org'
//           }
//         };
//         io.update.putFindOne(docPutOptions);
//       }
//     });
// } else {
//   options.res.json('success');
// }
