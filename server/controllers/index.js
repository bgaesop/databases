var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(err, results) {
        //put in error handling
        res.json(results);
      });
    },
    post: function(req, res) {
      var params  = [req.body[text], req.body[username]];
      models.messages.post(params, function(err, results) {
        res.json(results);
      });
    }
  },
  users: {
    get: function(req, res) {
      models.users.get(function(err, results) {
        res.json(results);
      });

    },
    post: function(req, res) {
      var params = [req.body[username]];
      models.users.post(params, function(err, results) {
        res.json(results);
      });
    }
  }



}