const billService = require('../services/billServices');
const accountService = require('../services/accountService');
const merchantService = require('../services/merchantService');
const cardService = require('../services/cardService');
const { handleError } = require('./errorController');
const validate = require('./validateController');
const { makePayload, makePayloadMobile } = require('../middleware/encryptionMiddleware');

async function store(req, res) {
  try {
    const { amount, details } = req.body;

    const user = await merchantService.findById()
    const dAccount = await merchantService.findById(req.user.id);

    if (!dAccount) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Destination account not found' };
      throw error;
    } else if (dAccount.status !== "Active") {
      let error = new Error("Not Active");
      error.meta = { code: "409", error: `Destination account is not active (${dAccount.status})` };
      throw error;
    } else if (amount <= 0) {
      let error = new Error("Wrong Amount");
      error.meta = { code: "409", error: "Amount must be greater than 0" };
      throw error;
    }

    const bill = await billService.create(dAccount.id , amount, details | null, user.merchant.category);

    res.status(201).json(await makePayloadMobile({ bill }, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function pay(req, res) {
  try {
    const id = req.params.id;
    const { cardId, cvv, month, year } = req.body;
    const bill = await billService.findById(id);
    const card = await cardService.findById(cardId);
    const expiryDate = new Date(card.expiryDate);

    if (!bill) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Bill not found' };
      throw error;
    } else if (!card) {
      let error = new Error("Not Found");
      error.meta = { code: "404", error: 'Card not found' };
      throw error;
    } else if (card.cvv !== cvv, expiryDate.getMonth() + 1 !== month, expiryDate.getFullYear() !== year) {
      let error = new Error("Invalid Card Details");
      error.meta = { code: "409", error: `Card details are invalid` };
      throw error;
    } else if (bill.status!== "Pending") {
      let error = new Error("Not Pending");
      error.meta = { code: "409", error: `Bill is not pending (${bill.status})` };
      throw error;
    }

    if(card.balance - bill.amount < 0) {
      let error = new Error("Insufficient Balance");
      error.meta = { code: "409", error: `Card has insufficient balance` };
      throw error;
    }

    const payedBill = await billService.pay(id, cardId, bill.amount, card.merchantAccountNumber);
    return res.status(201).json(await makePayloadMobile({ payedBill }, req.user.id));

  }catch (error) {
    await handleError(error, res);
  }
}

module.exports = {
  store,
  pay
};