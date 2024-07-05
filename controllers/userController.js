const userService = require('../services/userService');
const validate = require('./validateController');
const { handleError } = require('./errorController');
const { makePayload } = require('../middleware/encryptionMiddleware');

async function index(req, res, next) {
  try {
    const allUsers = await userService.findAll();
    return res.json(await makePayload(allUsers, req.user.id)).next();
  } catch (error) {
    await handleError(error, res, req);
  }
}

async function show(req, res, next) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const user = await userService.findById(id);

    if (!user) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'User not found' };
      throw error;
    }
    return res.json(await makePayload(user, req.user.id)).next();
  } catch (error) {
    await handleError(error, res, req);
  }
}

async function update(req, res, next) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const { name, email, phone, birth, status } = req.body;

    const oldUser = await userService.findById(id);
    if (!oldUser) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'User not found' };
      throw error;
    }

    const updatedUser = await userService.updateUser(id, name, email, phone, birth, status);
    return res.status(200).json(await makePayload(updatedUser, req.user.id)).next();
  } catch (error) {
    await handleError(error, res, req);
  }
}

async function destroy(req, res, next) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const deletedUser = await userService.deleteUser(id);

    if (!deletedUser) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'User not found' };
      throw error;
    }
    return res.json(await makePayload({ message: 'User deleted successfully' }, req.user.id)).next();
  } catch (error) {
    await handleError(error, res, req);
  }
}

module.exports = { index, show, update, destroy };
