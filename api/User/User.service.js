const userQueries = require("../User/User.query");

// 📌 Create User
const registerMember = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;
    const existingUser = await userQueries.findMember({ where: { "email": email} });
    if (existingUser) throw new Error("User already exists");
    const user = await userQueries.createMember(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 📌 Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await userQueries.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Get User by ID
const getUserById = async (req, res) => {
  try {
    const user = await userQueries.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Update User
const updateUser = async (req, res) => {
  try {
    const user = await userQueries.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 📌 Delete User
const deleteUser = async (req, res) => {
  try {
    const response = await userQueries.deleteUser(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerMember,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
