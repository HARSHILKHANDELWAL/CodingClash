const User  = require("../../models/User");
// const bcrypt = require("bcryptjs");

// 📌 Create a New User
const createMember =  (insertData) => {
  
  return User.create(insertData);
};

// 📌 Get All Users
const getAllMembers = async () => {
  return User.findAll();
};

// 📌 Get a Single User by ID
const findMember = async (findQuery) => {
  return  await User.findOne(findQuery);
};

// 📌 Update User
const updateMember = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found");

  user.name = data.name || user.name;
  user.gender = data.gender || user.gender;

  await user.save();
  return user;
};

// 📌 Delete User
const deleteMember = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found");

  await user.destroy();
  return { message: "User deleted successfully" };
};

module.exports = {
  createMember,
  getAllMembers,
  findMember,
  updateMember,
  deleteMember,
};
