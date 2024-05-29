const userService = require('../services/userService');
const validate = require('./validateController');
const { handleError } = require('./errorController');
const dotenv = require('dotenv');

dotenv.config();

async function index(req, res) {
  try {
    const allUsers = await userService.findAll();
    return res.json(allUsers);
  } catch (error) {
    await handleError(error, res);
  }
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const user = await userService.findById(id);

    if (!user) {
      return res.status(404).json({ code:"404",message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const { name, email, phone, birth, status } = req.body;

    const oldUser = await userService.findById(id);
    if (!oldUser) {
      return res.status(404).json({ code:"404",message: 'User not found' });
    }

    const updatedUser = await userService.updateUser(id, name, email, phone, birth, status);
    return res.status(200).json(updatedUser);
  } catch (error) {
    await handleError(error, res);
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const deletedUser = await userService.deleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({ code:"404",message: 'User not found' });
    }
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, update, destroy };
