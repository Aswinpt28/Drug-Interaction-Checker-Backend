/* eslint-disable no-unused-vars */
const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const { userId, username, role } = req.user;

    // Fetch additional user details from the database if needed
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Include additional user details in the response if needed
    const userProfile = {
      userId: user._id,
      username: user.username,
      email: user.email, // Add any other fields you want to include
      role: user.role,
    };

    res.json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
