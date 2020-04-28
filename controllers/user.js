const User = require('../models/User');

exports.get = function (req, res) {
  User.get(function (err, user) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'user retrieved successfully',
      user: user,
    });
  });
};
