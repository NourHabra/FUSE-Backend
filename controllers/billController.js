import {
	findById,
	create,
	payBill,
	findByMerchantId,
} from "../services/billServices";
import { findCheckingById } from "../services/accountService";
import { findById as _findById } from "../services/merchantService";
import { findById as __findById } from "../services/cardService";
import { handleError } from "./errorController";
import { checkEmpty } from "./validateController";
import { makePayload } from "../middleware/encryptionMiddleware";

import { makePayloadMobile } from "../middleware/mobileEncryptionMiddleware";
import { logServer } from "./logController"; // Import the logServer function

import axios from "axios";

async function show(req, res) {
	try {
		const id = await checkEmpty(req.params.id, "id");
		const bill = await findById(id);
		if (!bill) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Bill not found" };
			throw error;
		}

		await logServer(req, res); // Call the logServer function before returning the response
		return res.json(await makePayloadMobile(bill, req.user.id));
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function store(req, res) {
	try {
		const { amount, details } = req.body;

		const user = await _findById(req.user.id);
		const dAccount = await findCheckingById(req.user.id);

		if (!dAccount) {
			let error = new Error("Not Found");
			error.meta = {
				code: "404",
				error: "Destination account not found",
			};
			throw error;
		} else if (dAccount.status !== "Active") {
			let error = new Error("Not Active");
			error.meta = {
				code: "409",
				error: `Destination account is not active (${dAccount.status})`,
			};
			throw error;
		} else if (amount <= 0) {
			let error = new Error("Wrong Amount");
			error.meta = {
				code: "409",
				error: "Amount must be greater than 0",
			};
			throw error;
		}

		const bill = await create(
			dAccount.id,
			amount,
			details ? details : null,
			user.merchant.categoryId
		);

		await logServer(req, res); // Call the logServer function before returning the response
		res.status(201).json(await makePayloadMobile({ bill }, req.user.id));
	} catch (error) {
		await handleError(error, res, req);
	}
}

const binaryMapping = {
	Utilities: "00001",
	Subscriptions: "00010",
	Clothing: "00011",
	"Personal Spending": "00100",
	"Travel & Entertainment": "00101",
	Services: "00110",
	Electronics: "00111",
	Transportation: "01000",
	Insurance: "01001",
	"Home Goods": "01010",
	Healthcare: "01011",
	Restaurants: "01100",
	"Beauty Products": "01101",
	"Food/Groceries": "01110",
	Pets: "01111",
	Childcard: "10000",
	"Rent/Mortgage": "10001",
};

async function pay(req, res) {
	try {
		const id = parseInt(await checkEmpty(req.params.id, "id"));
		const { cardId, cvv, month, year } = req.body;
		const bill = await findById(id);
		const card = await __findById(cardId);
		const expiryDate = new Date(card.expiryDate);

		const now = new Date();
		const transYear = now.getFullYear();
		const transMonth = now.getMonth() + 1;
		const transDay = now.getDate();
		const transHour = now.getHours();
		const transMinute = now.getMinutes();
		const amount = bill.amount;
		const index = bill.id;
		const categoryBinary = binaryMapping[bill.category];

		const response = await axios.post(process.env.FRAUD_URL, {
			id: index,
			year: transYear,
			month: transMonth,
			day: transDay,
			hour: transHour,
			minute: transMinute,
			amount: amount,
			category: categoryBinary,
		});
		const { prediction, is_fraud } = response.data;

		if (!bill) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Bill not found" };
			throw error;
		} else if (!card) {
			let error = new Error("Not Found");
			error.meta = { code: "404", error: "Card not found" };
			throw error;
		} else if (
			(card.cvv !== cvv,
			expiryDate.getMonth() + 1 !== parseInt(month),
			expiryDate.getFullYear() !== parseInt(year))
		) {
			let error = new Error("Invalid Card Details");
			error.meta = { code: "409", error: `Card details are invalid` };
			throw error;
		} else if (bill.status !== "Pending") {
			let error = new Error("Not Pending");
			error.meta = {
				code: "409",
				error: `Bill is not pending (${bill.status})`,
			};
			throw error;
		} else if (is_fraud) {
			let error = new Error("Fraudulent Transaction");
			error.meta = {
				code: "409",
				error: `Our System has flagged this transaction as fraudulent`,
			};
			throw error;
		}

		if (card.balance - bill.amount < 0) {
			let error = new Error("Insufficient Balance");
			error.meta = {
				code: "409",
				error: `Card has insufficient balance`,
			};
			throw error;
		}

		const payedBill = await payBill(
			id,
			cardId,
			bill.amount,
			bill.merchantAccountNumber
		);
		await logServer(req, res); // Call the logServer function before returning the response
		return res
			.status(201)
			.json(await makePayloadMobile({ payedBill }, req.user.id));
	} catch (error) {
		await handleError(error, res, req);
	}
}

async function showUnpaid(req, res) {
	try {
		const bills = await findByMerchantId(req.user.id);
		await logServer(req, res); // Call the logServer function before returning the response
		return res.json(await makePayloadMobile(bills, req.user.id));
	} catch (error) {
		await handleError(error, res, req);
	}
}

export default {
	store,
	pay,
	show,
	showUnpaid,
};
