const beneficiarieService = require('../services/beneficiarieService');
const { handleError } = require('./errorController');
const validate = require('./validateController');
const { makePayload } = require('../middleware/encryption');

async function index(req, res) {
  try {
    const allBeneficiaries = await beneficiarieService.findAll();
    return res.json(await makePayload(allBeneficiaries, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));

    const beneficiaries = await beneficiarieService.findByUserId(id);

    if (beneficiaries.length <= 0) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Beneficiaries not found' }, req.user.id));
    }
    return res.json(await makePayload(beneficiaries, req.user.id));

  } catch (error) {
    await handleError(error, res);
  }
}

async function store(req, res) {
  try {
    const { acceptUser, requstUser } = req.body;

    const beneficiaries = await beneficiarieService.find(requstUser, acceptUser);

    if (beneficiaries) {
      if (!beneficiaries.accepted && beneficiaries.acceptUser === requstUser) {
        await beneficiarieService.updateById(beneficiaries.id, { accepted: true });
        return res.status(201).json(await makePayload({ message: 'Beneficiaries true' }, req.user.id));
      } else {
        return res.status(409).json(await makePayload({ message: 'Requset already sent' }, req.user.id));
      }
    }

    await beneficiarieService.create(requstUser, acceptUser);
    return res.status(201).json(await makePayload({ message: 'sent' }, req.user.id));

  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    const { id, accepted } = req.body;

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
      return res.status(404).json(await makePayload({ code: "404", message: 'Beneficiarie not found' }, req.user.id));
    }
    return res.json(await makePayload({ message: 'Beneficiarie deleted successfully' }, req.user.id));

  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, store, update, destroy };
