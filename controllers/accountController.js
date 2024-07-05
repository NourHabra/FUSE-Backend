const accountService = require('../services/accountService');
const { handleError } = require('./errorController');
const { makePayload } = require('../middleware/encryptionMiddleware');
const { makePayloadMobile } = require('../middleware/mobileEncryptionMiddleware');
const validate = require('./validateController');

async function index(req, res, next) {
  try {
    const allAccounts = await accountService.findAll();
    return res.json(await makePayload(allAccounts, req,user.id)).next();
  } catch (error) {
    await handleError(error, res, req);
  } finally {
    await accountService.disconnect();
  }
}

async function show(req, res, next) {
  try {
    const id = await validate.isNumber(req.params.id, "id");

    const account = await accountService.findById(id);

    if (!account) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Account not found' };
      throw error;
    }
    return res.json(await makePayloadMobile(account, req,user.id)).next();

  } catch (error) {
    await handleError(error, res, req);
  } finally {
    await accountService.disconnect();
  }
}

async function showUserAccounts(req, res, next) {
  try {
    const accounts = await accountService.findByUserId(req.user.id);

    if(!accounts){
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Accounts not found' };
      throw error;
    }

    return res.json(await makePayloadMobile(accounts, req.user.id)).next();

  }catch(error){
    await handleError(error, res, req);
  }
}

async function showByUserId(req, res, next) {
  try {
    const accounts = await accountService.findUserById(req.params.id);

    if(!accounts){
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Accounts not found' };
      throw error;
    }

    return res.json(await makePayloadMobile(accounts, req.user.id)).next();

  }catch(error){
    await handleError(error, res, req);
  }
}

async function store(req, res, next) {
  try {
    const { userId, balance, type } = req.body;

    const newAccount = await accountService.create(userId, balance, type);
    return res.json(await makePayload(newAccount, req,user.id)).next();
  } catch (error) {
    await handleError(error, res, req);
  } finally {
    await accountService.disconnect();
  }
}

async function update(req, res, next) {
  try {
    const id = await validate.isNumber(req.params.id, "id");
    const { userId, balance, type, status, name } = req.body;

    const updatedAccount = await accountService.updateById(id, { userId, balance, type, status, name });
    res.json(await makePayload(updatedAccount, req,user.id)).next();
  } catch (error) {
    await handleError(error, res, req);
  } finally {
    await accountService.disconnect();
  }
}

async function destroy(req, res, next) {
  try {
    const id = await validate.isNumber(req.params.id, "id");

    const deletedAccount = await accountService.updateById(id, { status: "Inactive" });
    if (!deletedAccount) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Account not found' };
      throw error;
    }
    return res.json(await makePayload({ message: 'Account deleted successfully' }, req,user.id)).next();
  } catch (error) {
    await handleError(error, res, req);
  } finally {
    await accountService.disconnect();
  }
}

module.exports = { index, show, store, update, destroy, showByUserId, showUserAccounts };
