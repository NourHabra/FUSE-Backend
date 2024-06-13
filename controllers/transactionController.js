const transactionService = require('../services/transactionService');
const merchantService = require('../services/merchantService');
const accountService = require('../services/accountService');
const { handleError } = require('./errorController');
const validate = require('./validateController');
const { makePayload } = require('../middleware/encryptionMiddleware');

async function index(req, res) {
  try {
    const allTransactions = await transactionService.findAll();
    return res.json(await makePayload(allTransactions, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const transaction = await transactionService.findById(id);

    if (!transaction) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Transaction not found' }, req.user.id));
    }
    return res.json(await makePayload(transaction, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function showTransactionsFromTo(req, res) {
  try {
    const { sourceRole, distinationRole } = req.body;
    const transactions = await transactionService.findAllFromTo(sourceRole, distinationRole);

    if (!transactions) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Transactions not found' }, req.user.id));
    }
    return res.json(await makePayload(transactions, req.user.id));

  } catch (error) {
    await handleError(error, res);
  }
}

async function storeBill(req, res) {
  try {
    const { destinationAccount, amount, details } = req.body;

    const dAccount = await accountService.findById(destinationAccount);

    if (!dAccount) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Destination account not found' }, req.user.id));
    } else if (dAccount.status !== "Active") {
      return res.status(409).json(await makePayload({ error: `Destination account is not active (${dAccount.status})` }, req.user.id));
    } else if (amount <= 0) {
      return res.status(409).json(await makePayload({ error: 'Amount must be greater than 0' }, req.user.id));
    }

    const transaction = await transactionService.create("Bill", null, destinationAccount, amount);
    if (details) transactionService.addTransactionDetails(transaction.id, details);

    res.status(201).json(await makePayload({ message: "Bill created", bill: transaction }, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeTransfer(req, res) {
  try {
    const { sourceAccount, destinationAccount, amount, details } = req.body;

    const dAccount = await accountService.findById(destinationAccount);
    const sAccount = await accountService.findById(sourceAccount);

    if (!dAccount) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Destination account not found' }, req.user.id));
    } else if (!sAccount) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Source account not found' }, req.user.id));
    } else if (amount <= 0) {
      return res.status(409).json(await makePayload({ error: 'Amount must be greater than 0' }, req.user.id));
    }

    const transaction = await transactionService.create("Transferer", sourceAccount, destinationAccount, amount);
    if (details) transactionService.addTransactionDetails(transaction.id, details);

    if ((sAccount.balance - amount) < 0) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json(await makePayload({ error: 'Source account has insufficient balance' }, req.user.id));
    }

    const transactions = await transactionService.transfer(transaction.id, sourceAccount, destinationAccount, amount);

    if (!transactions) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json(await makePayload({ error: 'Failed to complete transaction' }, req.user.id));
    }

    return res.status(201).json(await makePayload({ transactions }, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeDeposit(req, res) {
  try {
    const { destinationAccount, amount, details } = req.body;

    const dAccount = await accountService.findById(destinationAccount);
    const sAccount = await accountService.findByUserId(req.user.id);

    if (!dAccount) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Destination account not found' }, req.user.id));
    } else if (!sAccount) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Source account not found' }, req.user.id));
    } else if (amount <= 0) {
      return res.status(409).json(await makePayload({ error: 'Amount must be greater than 0' }, req.user.id));
    }

    if (!["Vendor", "Employee", "Admin"].includes(sAccount.user.role)) {
      return res.status(409).json(await makePayload({ error: "Only Admin, Employee or Vendor can deposit" }, req.user.id));
    }

    const transaction = await transactionService.create("Deposit", sourceAccount, destinationAccount, amount);
    if (details) transactionService.addTransactionDetails(transaction.id, details);

    if ((sAccount.balance - amount) < 0 && sAccount.user.role === "Vendor") {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json(await makePayload({ error: 'Vendor has insufficient balance' }, req.user.id));
    }

    const transactions = await transactionService.deposit(transaction.id, sAccount, dAccount, amount);

    if (!transactions) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json(await makePayload({ error: 'Failed to complete transaction' }, req.user.id));
    }

    return res.status(201).json(await makePayload({ transactions }, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeWithdraw(req, res) {
  try {
    const { sourceAccount, destinationAccount, amount, details } = req.body;

    const dAccount = await accountService.findById(destinationAccount);
    const sAccount = await accountService.findById(sourceAccount);

    if (!dAccount) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Destination account not found' }, req.user.id));
    } else if (!sAccount) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Source account not found' }, req.user.id));
    } else if (amount <= 0) {
      return res.status(409).json(await makePayload({ error: 'Amount must be greater than 0' }, req.user.id));
    }

    if (!["Vendor", "Employee"].includes(dAccount.user.role)) {
      return res.status(409).json(await makePayload({ error: "Only Employee or Vendor can withdraw" }, req.user.id));
    }

    const transaction = await transactionService.create("Withdraw", sourceAccount, destinationAccount, amount);
    if (details) transactionService.addTransactionDetails(transaction.id, details);

    if ((sAccount.balance - amount) < 0) {
      await transactionService.updateTransaction(transaction.id, "Failed");
      return res.status(409).json(await makePayload({ error: 'User has insufficient balance' }, req.user.id));
    }

    const transactions = await transactionService.withdraw(transaction.id, sAccount, dAccount, amount);

    if (!transactions) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json(await makePayload({ error: 'Failed to complete transaction' }, req.user.id));
    }

    return res.status(201).json(await makePayload({ transactions }, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function payBill(req, res) {
  try {
    const billId = parseInt(await validate.isNumber(req.params.id, "Bill ID"));
    const { sourceAccount, accepted } = req.body;

    const sAccount = await accountService.findById(sourceAccount);
    const bill = await transactionService.findById(billId);

    if (bill.sourceAccount) {
      if (bill.sourceAccount !== sourceAccount) {
        return res.status(409).json(await makePayload({ error: "Source account does not match bill source account" }, req.user.id));
      }
    }else{
      await transactionService.updateById(billId, { sourceAccount });
    }

    if (!sAccount) {
      return res.status(404).json(await makePayload({ code: "404", message: "User account not found" }, req.user.id));
    } else if (!bill) {
      return res.status(404).json(await makePayload({ code: "404", message: "Bill not found" }, req.user.id));
    } else if (bill.status !== "Pending") {
      return res.status(409).json(await makePayload({ error: "Bill status is not valid" }, req.user.id));
    }

    const dAccount = await accountService.findById(bill.destinationAccount);

    if ((sAccount.balance - bill.amount) < 0) {
      return res.status(409).json(await makePayload({ error: "User has insufficient balance" }, req.user.id));
    }

    if (accepted) {
      const transactions = await transactionService.makeTransaction([
        accountService.updateById(sourceAccount, { balance: sAccount.balance - bill.amount }),
        accountService.updateById(bill.destinationAccount, { balance: dAccount.balance + bill.amount }),
        transactionService.updateById(billId, { status: "Completed" })
      ]);

      if (!transactions) {
        await transactionService.updateById(billId, { status: "Failed" });
        return res.status(409).json(await makePayload({ error: 'Failed to pay bill' }, req.user.id));
      }
      return res.status(201).json(await makePayload(transactions, req.user.id));
    } else {
      const transaction = await transactionService.updateById(billId, { status: "Declined" });
      return res.status(400).json(await makePayload(transaction, req.user.id));
    }
  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  // Implementation of the update function
}

async function destroy(req, res) {
  // Implementation of the destroy function
}

module.exports = {
  index,
  show,
  storeBill,
  storeTransfer,
  storeDeposit,
  storeWithdraw,
  payBill,
  update,
  destroy,
  showTransactionsFromTo
};
