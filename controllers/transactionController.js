const transactionService = require('../services/transactionService');
const merchantService = require('../services/merchantService');
const accountService = require('../services/accountService');
const { handleError } = require('./errorController');
const validate = require('./validateController');

async function index(req, res) {
  try {
    const allTransactions = await transactionService.findAll();
    return res.json(allTransactions);
  } catch (error) {
    await handleError(error, res);
  }
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));
    const transaction = await transactionService.findById(id);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    return res.json(transaction);
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeBill(req, res) {
  try {
    let { destinationAccount, amount } = req.body;
    destinationAccount = parseInt(await validate.isNumber(destinationAccount, "destinationAccount"));
    amount = parseFloat(await validate.isNumber(amount, "amount"));

    const dAccount = await merchantService.findById(destinationAccount);

    if (!dAccount) {
      return res.status(404).json({ message: 'Destination account not found' });
    } else if (dAccount.status !== "Active") {
      return res.status(409).json({ error: `Destination account is not active (${dAccount.status})` });
    } else if (amount <= 0) {
      return res.status(409).json({ error: 'Amount must be greater than 0' });
    }

    const transaction = await transactionService.create("Bill", null, destinationAccount, amount);

    res.status(201).json({ message: "Bill created", bill: transaction });
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeTransferer(req, res) {
  try {
    let { sourceAccount, destinationAccount, amount } = req.body;
    sourceAccount = parseInt(await validate.isNumber(sourceAccount, "sourceAccount"));
    destinationAccount = parseInt(await validate.isNumber(destinationAccount, "destinationAccount"));
    amount = parseFloat(await validate.isNumber(amount, "amount"));

    const dAccount = await accountService.getById(destinationAccount);
    const sAccount = await accountService.getById(sourceAccount);

    if (!dAccount) {
      return res.status(404).json({ message: 'Destination account not found' });
    } else if (!sAccount) {
      return res.status(404).json({ message: 'Source account not found' });
    } else if (amount <= 0) {
      return res.status(409).json({ error: 'Amount must be greater than 0' });
    }

    const transaction = await transactionService.create("Transferer", sourceAccount, destinationAccount, amount);

    if ((sAccount.balance - amount) < 0) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json({ error: 'Source account has insufficient balance' });
    }

    const transactions = await transactionService.makeTransaction([
      accountService.updateById(sourceAccount, { balance: sAccount.balance - amount }),
      accountService.updateById(destinationAccount, { balance: dAccount.balance + amount }),
      transactionService.updateById(transaction.id, { status: "Completed" })
    ]);

    if (!transactions) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json({ error: 'Failed to complete transaction' });
    }

    return res.status(201).json({ transactions });
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeDeposit(req, res) {
  try {
    let { sourceAccount, destinationAccount, amount } = req.body;
    sourceAccount = parseInt(await validate.isNumber(sourceAccount, "sourceAccount"));
    destinationAccount = parseInt(await validate.isNumber(destinationAccount, "destinationAccount"));
    amount = parseFloat(await validate.isNumber(amount, "amount"));

    const dAccount = await accountService.getById(destinationAccount);
    const sAccount = await accountService.getById(sourceAccount);

    if (!dAccount) {
      return res.status(404).json({ message: 'Destination account not found' });
    } else if (!sAccount) {
      return res.status(404).json({ message: 'Source account not found' });
    } else if (amount <= 0) {
      return res.status(409).json({ error: 'Amount must be greater than 0' });
    }

    if (!["Vendor", "Employee"].includes(sAccount.user.role)) {
      return res.status(409).json({ error: "Only Employee or Vendor can deposit" });
    }

    const transaction = await transactionService.create("Deposit", sourceAccount, destinationAccount, amount);

    if ((sAccount.balance - amount) < 0 && sAccount.user.role === "Vendor") {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json({ error: 'Vendor has insufficient balance' });
    }

    const transactions = await transactionService.makeTransaction(
      sAccount.user.role === "Vendor" ? [
        accountService.updateById(sourceAccount, { balance: sAccount.balance - amount }),
        accountService.updateById(destinationAccount, { balance: dAccount.balance + amount }),
        transactionService.updateById(transaction.id, { status: "Completed" })
      ] : [
        accountService.updateById(destinationAccount, { balance: dAccount.balance + amount }),
        transactionService.updateById(transaction.id, { status: "Completed" })
      ]
    );

    if (!transactions) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json({ error: 'Failed to complete transaction' });
    }

    return res.status(201).json({ transactions });
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeWithdraw(req, res) {
  try {
    let { sourceAccount, destinationAccount, amount } = req.body;
    sourceAccount = parseInt(await validate.isNumber(sourceAccount, "sourceAccount"));
    destinationAccount = parseInt(await validate.isNumber(destinationAccount, "destinationAccount"));
    amount = parseFloat(await validate.isNumber(amount, "amount"));

    const dAccount = await accountService.getById(destinationAccount);
    const sAccount = await accountService.getById(sourceAccount);

    if (!dAccount) {
      return res.status(404).json({ message: 'Destination account not found' });
    } else if (!sAccount) {
      return res.status(404).json({ message: 'Source account not found' });
    } else if (amount <= 0) {
      return res.status(409).json({ error: 'Amount must be greater than 0' });
    }

    if (!["Vendor", "Employee"].includes(dAccount.user.role)) {
      return res.status(409).json({ error: "Only Employee or Vendor can withdraw" });
    }

    const transaction = await transactionService.create("Withdraw", sourceAccount, destinationAccount, amount);

    if ((sAccount.balance - amount) < 0) {
      await transactionService.updateTransaction(transaction.id, "Failed");
      return res.status(409).json({ error: 'User has insufficient balance' });
    }

    const transactions = await transactionService.makeTransaction(
      dAccount.user.role === "Vendor" ? [
        accountService.updateById(sourceAccount, { balance: sAccount.balance - amount }),
        accountService.updateById(destinationAccount, { balance: dAccount.balance + amount }),
        transactionService.updateById(transaction.id, { status: "Completed" })
      ] : [
        accountService.updateById(sourceAccount, { balance: sAccount.balance - amount }),
        transactionService.updateById(transaction.id, { status: "Completed" })
      ]
    );

    if (!transactions) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json({ error: 'Failed to complete transaction' });
    }

    return res.status(201).json({ transactions });
  } catch (error) {
    await handleError(error, res);
  }
}

async function payBill(req, res) {
  try {
    let { sourceAccount, accepted } = req.body;
    const billId = parseInt(await validate.isNumber(req.params.id, "billId"));
    sourceAccount = parseInt(await validate.isNumber(sourceAccount, "sourceAccount"));
    accepted = (await validate.checkEmpty(accepted, "accepted")) === "true";

    const sAccount = await accountService.getById(sourceAccount);
    const bill = await transactionService.findById(billId);

    if (!sAccount) {
      return res.status(404).json({ error: "User account not found" });
    } else if (!bill) {
      return res.status(404).json({ error: "Bill not found" });
    } else if (bill.status !== "Pending") {
      return res.status(409).json({ error: "Bill status is not valid" });
    }

    const dAccount = await accountService.getById(bill.destinationAccount);

    if ((sAccount.balance - bill.amount) < 0) {
      return res.status(409).json({ error: "User has insufficient balance" });
    }

    if (accepted) {
      const transactions = await transactionService.makeTransaction([
        accountService.updateById(sourceAccount, { balance: sAccount.balance - bill.amount }),
        accountService.updateById(bill.destinationAccount, { balance: dAccount.balance + bill.amount }),
        transactionService.updateById(billId, { status: "Completed", sourceAccount })
      ]);

      if (!transactions) {
        await transactionService.updateById(billId, { status: "Failed", sourceAccount });
        return res.status(409).json({ error: 'Failed to pay bill' });
      }
      return res.status(201).json(transactions);
    } else {
      const transaction = await transactionService.updateById(billId, { status: "Declined", sourceAccount });
      return res.status(400).json(transaction);
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
  storeTransferer,
  storeDeposit,
  storeWithdraw,
  payBill,
  update,
  destroy
};
