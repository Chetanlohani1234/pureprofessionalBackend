const { User, sequelize } = require('../models');



// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create user' });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    console.log("sdsds")
   // const users = await User.findAll();
   const [result,metadata] = await sequelize.query("select * from users");
   console.log(result,metadata)
   
   
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching users: ", error);
    return res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get a single user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json({ error: 'User not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const { name, email, password } = req.body;
      await user.update({ name, email, password });
      return res.status(200).json(user);
    }
    return res.status(404).json({ error: 'User not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update user' });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      return res.status(200).json({ message: 'User deleted' });
    }
    return res.status(404).json({ error: 'User not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete user' });
  }
};
