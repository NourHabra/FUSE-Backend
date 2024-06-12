const cardService = require('../services/cardService');
const { handleError } = require('./errorController');
const validate = require('./validateController');
const { makePayload } = require('../middleware/encryptionMiddleware');

async function index(req, res) {
  try {
    const allCards = await cardService.findAll();
    return res.json(await makePayload(allCards, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function show(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const card = await cardService.findById(id);

    if (!card) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Card not found' }, req.user.id));
    }
    return res.json(await makePayload(card, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function store(req, res) {
  try {
    const { accountNumber, PIN } = req.body;

    const newCard = await cardService.create(accountNumber, PIN);
    return res.json(await makePayload(newCard, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const { accountNumber, expiryDate, physical } = req.body;

    const updatedCard = await cardService.updateById(id, { accountNumber, expiryDate, physical });
    res.json(await makePayload(updatedCard, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function destroy(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const deletedCard = await cardService.deleteCard(id);

    if (!deletedCard) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Card not found' }, req.user.id));
    }
    return res.json(await makePayload({ message: 'Card deleted successfully' }, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, store, update, destroy };
