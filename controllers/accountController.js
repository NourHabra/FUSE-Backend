const accountService = require('../services/accountService');
const { handleError } = require('./errorController');
const { makePayload } = require('../middleware/encryption');
const validate = require('./validateController');

async function index(req, res) {
  try {
    const allAccounts = await accountService.findAll();
    return res.json(await makePayload(allAccounts, req,user.id));
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
      return res.status(404).json(await makePayload({ code: "404", message: 'Account not found' }, req,user.id));
    }
    return res.json(await makePayload(account, req,user.id));

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
    return res.json(await makePayload(newAccount, req,user.id));
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
    res.json(await makePayload(updatedAccount, req,user.id));
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
      return res.status(404).json(await makePayload({ code:"404", message: 'Account not found' }, req,user.id));
    }
    return res.json(await makePayload({ message: 'Account deleted successfully' }, req,user.id));
  } catch (error) {
    await handleError(error, res);
  } finally {
    await accountService.disconnect();
  }
}

module.exports = { index, show, store, update, destroy };
