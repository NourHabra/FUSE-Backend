const cardService = require("../services/cardService");
const accountService = require("../services/accountService");
const { handleError } = require("./errorController");
const validate = require("./validateController");
const {
	makePayload,
} = require("../middleware/encryptionMiddleware");
const { makePayloadMobile } = require('../middleware/mobileEncryptionMiddleware');

async function index(req, res, next) {
	try {
		const allCards = await cardService.findAll();
		return res.json(await makePayload(allCards, req.user.id)).next();
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function show(req, res, next) {
	try {
		const id = await validate.checkEmpty(req.params.id, "id");

		const card = await cardService.findById(id);

		if (!card) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Card not found" };
			throw error;
		}
		return res.json(await makePayloadMobile(card, req.user.id)).next();
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function showByAccountId(req, res, next) {
	try {
		const id = await validate.checkEmpty(req.params.id, "id");

		const cards = await cardService.findByAccountId(id);

		if (!cards) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Cards not found" };
			throw error;
		}

		return res.json(await makePayloadMobile(cards, req.user.id)).next();
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function showByUserId(req, res, next) {
	try {
		const cards = await cardService.findByUserId(req.user.id);

		if (!cards) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Cards not found" };
			throw error;
		}

		return res.json(await makePayloadMobile(cards, req.user.id)).next();
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function store(req, res, next) {
	try {
		const { cardName, balance, PIN } = req.body;

		const checkingAccount = await accountService.findCheckingById(
			req.user.id
		);

		if (!checkingAccount) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "No User Checking Account" };
			throw error;
		}

		if (checkingAccount.balance - balance < 0) {
			let error = new Error("Insufficient Balance");
			error.meta = {
				code: "409",
				error: "Checking Account has insufficient balance",
			};
			throw error;
		}

		const newCard = await cardService.create(
			cardName,
			checkingAccount.id,
			PIN,
			balance
		);

		return res.json(await makePayloadMobile(newCard[0], req.user.id)).next();
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function update(req, res, next) {
	try {
		const id = await validate.checkEmpty(req.params.id, "id");

		const { cardName, accountNumber, expiryDate, physical } = req.body;

		const updatedCard = await cardService.updateById(id, {
			cardName,
			accountNumber,
			expiryDate,
			physical,
		});
		res.json(await makePayload(updatedCard, req.user.id)).next();
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function updateBalance(req, res, next) {
	try {
		const id = await validate.checkEmpty(req.params.id, "id");
		const { amount, type } = req.body;

		if(type === "Deposit") {
			const checkingAccount = await accountService.findCheckingById(
				req.user.id
			);
			if(checkingAccount.balance - amount < 0) {
				let error = new Error("Insufficient Balance");
				error.meta = {
					code: "409",
					error: "Checking Account has insufficient balance",
				};
				throw error;
			}
		}else {
			const card = await cardService.findById(id);
			if(card.balance - amount < 0) {
				let error = new Error("Insufficient Balance");
				error.meta = {
					code: "409",
					error: "Card has insufficient balance",
				};
				throw error;
			}
		}

		const updatedCard = await cardService.updateBalance(
			id,
			amount,
			type,
		);

		if (!updatedCard) {
			let error = new Error("Failed");
			error.meta = { code: "409", error: "Failed to update balance" };
			throw error;
		}
		return res.json(await makePayloadMobile(updatedCard[0], req.user.id)).next();

	} catch (error) {
		await handleError(error, res, req);
	}
}

async function updatePIN(req, res, next) {
	try {
		const id = await validate.checkEmpty(req.params.id, "id");
		const { PIN } = req.body;

		const updatedCard = await cardService.updateById(id, { PIN });
		res.json(await makePayloadMobile(updatedCard, req.user.id)).next();
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function destroy(req, res, next) {
	try {
		const id = await validate.checkEmpty(req.params.id, "id");

		const deletedCard = await cardService.deleteCard(id, req.user.id);

		if (!deletedCard) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Card not found" };
			throw error;
		}
		return res.json(
			await makePayloadMobile(
				{ message: "Card deleted successfully" },
				req.user.id
			)
		).next();
	} catch (error) {
		await handleError(error, res, req);
	}
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
	updatePIN,
	showByAccountId,
	showByUserId,
	updateBalance
};
