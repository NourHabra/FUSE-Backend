const accountService = require('../services/accountService');
const { handleError } = require('./errorController');
const validate = require('./validateController');

async function index(req, res) {
  try {
    const allAccounts = await accountService.findAll();
    return res.json(allAccounts);
  } catch (error) {
    await handleError(error, res);
  } finally {
    await accountService.disconnect();
  }
}

async function show(req, res) {
  try {
    const id = await validate.isNumber(req.params.id, "id");

    const account = await accountService.findById(id);

    if (!account) {
      return res.status(404).json({ code: "404", message: 'Account not found' });
    }
    return res.json(account);

  } catch (error) {
    await handleError(error, res);
  } finally {
    await accountService.disconnect();
  }
}

async function store(req, res) {
  try {
    const { userId, balance, type } = req.body;

    const newAccount = await accountService.create(userId, balance, type);
    return res.json(newAccount);
  } catch (error) {
    await handleError(error, res);
  } finally {
    await accountService.disconnect();
  }
}

async function update(req, res) {
  try {
    const id = await validate.isNumber(req.params.id, "id");
    const { userId, balance, type, status, name } = req.body;

    const updatedAccount = await accountService.updateById(id, { userId, balance, type, status, name });
    res.json(updatedAccount);
  } catch (error) {
    await handleError(error, res);
  } finally {
    await accountService.disconnect();
  }
}

async function destroy(req, res) {
  try {
    const id = await validate.isNumber(req.params.id, "id");

    const deletedAccount = await accountService.updateById(id, { status: "Inactive" });
    if (!deletedAccount) {
      return res.status(404).json({ code:"404", message: 'Account not found' });
    }
    return res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  } finally {
    await accountService.disconnect();
  }
}

module.exports = { index, show, store, update, destroy };
