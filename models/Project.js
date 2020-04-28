const mongoose = require('mongoose');
// Setup schema
const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  donationBudget: {
    type: Number,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  raisedDonation: {
    type: String,
    required: true,
  },
});

const Project = (module.exports = mongoose.model('projects', projectSchema));
module.exports.get = function (callback, limit) {
  Project.find(callback).limit(limit);
};
