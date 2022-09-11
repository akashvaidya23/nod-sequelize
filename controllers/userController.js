const db = require("../models");

const User = db.users;

const addUser = async (req, res) => {
  console.log(req.body);
  let info = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
  };

  const user = await User.create(info);
  res.status(200).send(user);
  console.log(user);
};

const getAllUsers = async (eq, res) => {
  let users = await User.findAll({
    attributes: ["name", "email", "mobile"],
  });
  res.status(200).send(users);
};

const getOneUser = async (req, res) => {
  let id = req.params.id;
  let users = await User.findOne({ where: { id: id } });
  res.status(200).send(users);
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  console.log(req.body);
  const userUpdate = await User.update(req.body, { where: { id: id } });
  res.status(200).send(userUpdate);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).send("User deleted successfully");
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
