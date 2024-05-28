const beneficiarieService = require('../services/beneficiarieService');
const { handleError } = require('./errorController');
const validate = require('./validateController');

async function index(req, res) {
  try {
    const allBeneficiaries = await beneficiarieService.findAll();
    return res.json(allBeneficiaries);
  } catch (error) {
    await handleError(error, res);
  }
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));

    const beneficiaries = await beneficiarieService.findByUserId(id);

    if (beneficiaries.length <= 0) {
      return res.status(404).json({ code: "404", message: 'Beneficiaries not found' });
    }
    return res.json(beneficiaries);

  } catch (error) {
    await handleError(error, res);
  }
}

async function store(req, res) {
  try {
    let { acceptUser, requstUser } = req.body;
    acceptUser = await validate.isNumber(acceptUser, "acceptUser");
    requstUser = await validate.isNumber(requstUser, "requstUser");

    const beneficiaries = await beneficiarieService.find(requstUser, acceptUser);

    if (beneficiaries) {
      if (!beneficiaries.accepted && beneficiaries.acceptUser === requstUser) {
        await beneficiarieService.updateById(beneficiaries.id, { accepted: true });
        return res.status(201).json({ message: 'Beneficiaries true' });
      } else {
        return res.status(409).json({ message: 'Requset already sent' });
      }
    }

    await beneficiarieService.create(requstUser, acceptUser);
    return res.status(201).json({ message: 'sent' });

  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    let { id, accepted } = req.body;
    id = await validate.isNumber(id, "id");
    accepted = await validate.checkEmpty(accepted, "accepted");

    const beneficiarie = await beneficiarieService.findById(id);

    if (beneficiarie) {
      await beneficiarieService.updateById(id, { accepted });
    }

  } catch (error) {
    await handleError(error, res);
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const deletedBeneficiarie = await beneficiarieService.deleteById(id);

    if (!deletedBeneficiarie) {
      return res.status(404).json({ code: "404", message: 'Beneficiarie not found' });
    }
    return res.json({ message: 'Beneficiarie deleted successfully' });

  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, store, update, destroy };
