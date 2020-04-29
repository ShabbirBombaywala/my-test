const User = require('../models/User');
const Donation = require('../models/Donation');
const Project = require('../models/Project');

exports.get = async (req, res) => {
  try {
    const user = await User.findOne().populate({
      path: 'donations',
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: 'project' },
    });
    res.json({
      status: 'success',
      message: 'user retrieved successfully',
      user,
    });
  } catch (error) {
    res.json({
      status: 'error',
      message: error,
    });
  }
};

exports.create = async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.json({
    status: 'success',
    message: 'user created successfully',
    user: savedUser,
  });
};

exports.addDonation = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const project = await Project.findById(req.body.project_id);
    const newDonation = new Donation({
      ...req.body,
      owner: req.params.userId,
      project,
    });
    const saveDonation = await newDonation.save();
    user.donations.push(saveDonation);
    const savedUser = await user.save();
    res.json({
      status: 'success',
      donations: saveDonation,
      savedUser,
      message: 'user created successfully',
    });
  } catch (error) {
    console.log('error: ', error);
    res.json({
      status: 'error',
      message: error,
    });
  }
};
