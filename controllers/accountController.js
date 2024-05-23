const accountService = require('../services/accountService');
const { handleError } = require('./errorController');
const validate = require('./validateController');

async function index(req, res) {
  try {
    const allAccounts = await accountService.getAllAccounts();
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

    const account = await accountService.getById(id);

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
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
    let { userId, balance, type } = req.body;
    userId = await validate.isNumber(userId, "userId");
    balance = await validate.isNumber(balance, "balance");
    type = await validate.isAccountType(type);

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

    let { userId, balance, type, status, name } = req.body;
    userId = await validate.isNumber(userId, "userId");
    balance = await validate.isNumber(balance, "balance");
    type = await validate.isAccountType(type);
    status = await validate.isAccountStatus(status);
    name = await validate.checkEmpty(name, "name");

    const updatedAccount = await accountService.updatebyId(id, { userId, balance, type, status, name });
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
      return res.status(404).json({ message: 'Account not found' });
    }
    return res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  } finally {
    await accountService.disconnect();
  }
}

module.exports = { index, show, store, update, destroy };
