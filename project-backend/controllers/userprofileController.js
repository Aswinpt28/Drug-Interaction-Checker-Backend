const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, phoneNumber, gender, age } = req.body;
    const user = new User({ name, phoneNumber, gender, age });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
