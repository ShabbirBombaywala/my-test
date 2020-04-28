const mongoose = require('mongoose');
// Setup schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
  },
});

const User = (module.exports = mongoose.model('user', userSchema));
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
