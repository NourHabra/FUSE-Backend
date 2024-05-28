const cardService = require('../services/cardService');
const { handleError } = require('./errorController');
const validate = require('./validateController');

async function index(req, res) {
  try {
    const allCards = await cardService.findAll();
    return res.json(allCards);
  } catch (error) {
    await handleError(error, res);
  }
}

async function show(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const card = await cardService.findById(id);

    if (!card) {
      return res.status(404).json({ code:"404",message: 'Card not found' });
    }
    return res.json(card);
  } catch (error) {
    await handleError(error, res);
  }
}

async function store(req, res) {
  try {
    let { accountNumber } = req.body;
    accountNumber = await validate.isNumber(accountNumber, "accountNumber");

    const newCard = await cardService.create(accountNumber);
    return res.json(newCard);
  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    let { accountNumber, expiryDate, physical } = req.body;
    accountNumber = parseInt(await validate.isNumber(accountNumber, "accountNumber"));
    expiryDate = await validate.isDate(expiryDate, "expiryDate");
    physical = (await validate.checkEmpty(physical, "physical")) === "true" ? true : false;

    const updatedCard = await cardService.updateById(id, { accountNumber, expiryDate, physical });
    res.json(updatedCard);
  } catch (error) {
    await handleError(error, res);
  }
}

async function destroy(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const deletedCard = await cardService.deleteCard(id);

    if (!deletedCard) {
      return res.status(404).json({ code:"404",message: 'Card not found' });
    }
    return res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, store, update, destroy };
