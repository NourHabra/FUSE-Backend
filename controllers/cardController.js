const cardService = require("../services/cardService");
const accountService = require("../services/accountService");
const { handleError } = require("./errorController");
const validate = require("./validateController");
const {
	makePayload,
	makePayloadMobile,
} = require("../middleware/encryptionMiddleware");

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
			error.meta = { code: "404", error: "Card not found" };
			throw error;
		}
		return res.json(await makePayloadMobile(card, req.user.id));
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
			error.meta = { code: "404", error: "Cards not found" };
			throw error;
		}

		return res.json(await makePayloadMobile(cards, req.user.id));
	} catch (error) {
		await handleError(error, res);
	}
}

async function showByUserId(req, res) {
	try {
		const cards = await cardService.findByUserId(req.user.id);

		if (!cards) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Cards not found" };
			throw error;
		}

		return res.json(await makePayloadMobile(cards, req.user.id));
	} catch (error) {
		await handleError(error, res);
	}
}

async function store(req, res) {
	try {
		const { cardName, balance, PIN } = req.body;
		console.log(cardName);
		console.log(balance);
		console.log(PIN);

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

		return res.json(await makePayloadMobile(newCard[0], req.user.id));
	} catch (error) {
		await handleError(error, res);
	}
}

async function update(req, res) {
	try {
		const id = await validate.checkEmpty(req.params.id, "id");

		const { cardName, accountNumber, expiryDate, physical } = req.body;

		const updatedCard = await cardService.updateById(id, {
			cardName,
			accountNumber,
			expiryDate,
			physical,
		});
		res.json(await makePayload(updatedCard, req.user.id));
	} catch (error) {
		await handleError(error, res);
	}
}

async function updatePIN(req, res) {
	try {
		const id = await validate.checkEmpty(req.params.id, "id");
		const { PIN } = req.body;

		const updatedCard = await cardService.updateById(id, { PIN });
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
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Card not found" };
			throw error;
		}
		return res.json(
			await makePayload(
				{ message: "Card deleted successfully" },
				req.user.id
			)
		);
	} catch (error) {
		await handleError(error, res);
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
};
