const cardService = require('../services/cardService');
const { handleError } = require('./errorController');
const validate = require('./validateController');
const { makePayload, makePayloadMobile } = require('../middleware/encryptionMiddleware');

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
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Card not found' };
      throw error;
    }
    return res.json(await makePayload(card, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function showByAccountId(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const cards = await cardService.findByAccountId(id);

    if (!cards) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Cards not found' };
      throw error;
    }

    return res.json(await makePayloadMobile(cards, req.user.id));
  }catch (error) {
    await handleError(error, res);
  }
}

async function showByUserId(req, res) {
  try {
    const cards = await cardService.findByUserId(req.user.id);

    if(!cards) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Cards not found' };
      throw error;
    }

    return res.json(await makePayloadMobile(cards, req.user.id));
  }catch (error) {
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

async function updatePIN(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");
    const { PIN } = req.body;

    const updatedCard = await cardService.updateById(id, {PIN});
    res.json(await makePayload(updatedCard, req.user.id));
  } catch (error) {
    await handleError(error, res)
  }
}

async function destroy(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const deletedCard = await cardService.deleteCard(id);

    if (!deletedCard) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Card not found' };
      throw error;
    }
    return res.json(await makePayload({ message: 'Card deleted successfully' }, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, store, update, destroy, updatePIN, showByAccountId, showByUserId };
