(function() {
  'use strict';

  var app = io.express(),

      GETVOTERESULT   = require('../adminApImplementation/voters/getIndex.js'),
      GETCOUNT   = require('../adminApImplementation/voters/getIndex.js'),
      POSTADDVOTERS   = require('../adminApImplementation/voters/postIndex.js'),
      POSTVOTERLOGIN  = require('../adminApImplementation/voters/postIndex.js'),
      PUTVOTERSUBMIT  = require('../adminApImplementation/voters/putIndex.js');

  app.route('/addVoters')
    .post(io.authorize, io.xPoweredBy, POSTADDVOTERS.addVoters);

  app.route('/votersLogin')
    .post(POSTVOTERLOGIN.votersLogin);

  app.route('/votersSubmit')
    .put(PUTVOTERSUBMIT.votersSubmit);

  app.route('/votersResult')
    .get(GETVOTERESULT.votersResult);

  app.route('/count')
    .get(GETCOUNT.count);

  module.exports = app;
}());
