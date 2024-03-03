const { userModel } = require("../models/users.models");

const Create = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};
const FindAll = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

const Update = async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};
const Delete = async (req, res) => {
  try {
    await userModel.deleteOne({ _id: req.params.id });
    res.send("successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

module.exports.usersController = {
  Create,
  FindAll,
  Update,
  Delete,
};
