const merchantService = require('../services/merchantService');
const { handleError } = require('./errorController');
const validate = require('./validateController');

async function index(req, res) {
  try {
    const allMerchants = await merchantService.findAll();
    return res.json(allMerchants);
  } catch (error) {
    await handleError(error, res);
  }
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id));

    const merchant = await merchantService.findById(id);

    if (!merchant) {
      return res.status(404).json({ code:"404", message: 'Merchant not found' });
    }
    return res.json(merchant);
  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id));
    let { name, email, phone, birth, status, category, workPermit } = req.body;
    name = await validate.checkEmpty(name, "name");
    workPermit = await validate.checkEmpty(workPermit, "workPermit");
    email = await validate.isEmail(email);
    phone = await validate.isPhone(phone);
    birth = await validate.isDate(birth);
    category = await validate.isMerchantCategory(category);
    status = await validate.isUserStatus(status);

    const oldMerchant = await merchantService.findById(id);
    if (!oldMerchant) {
      return res.status(404).json({ code:"404", message: 'Merchant not found' });
    }

    const updatedMerchant = await merchantService.updateById(id, { name, email, phone, birth, status, category, workPermit });
    return res.status(200).json(updatedMerchant);
  } catch (error) {
    await handleError(error, res);
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id));

    const deletedMerchant = await merchantService.deleteMerchant(id);
    if (!deletedMerchant) {
      return res.status(404).json({ code:"404", message: 'Merchant not found' });
    }
    return res.json({ message: 'Merchant deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, update, destroy };
