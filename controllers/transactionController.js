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
      return res.status(404).json({ code: "404", message: 'Transaction not found' });
    }
    return res.json(transaction);
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeBill(req, res) {
  try {
    const { destinationAccount, amount, details } = req.body;

    const dAccount = await accountService.findById(destinationAccount);

    if (!dAccount) {
      return res.status(404).json({ code: "404", message: 'Destination account not found' });
    } else if (dAccount.status !== "Active") {
      return res.status(409).json({ error: `Destination account is not active (${dAccount.status})` });
    } else if (amount <= 0) {
      return res.status(409).json({ error: 'Amount must be greater than 0' });
    }

    const transaction = await transactionService.create("Bill", null, destinationAccount, amount);
    if(details) transactionService.addTransactionDetails(transaction.id, details);

    res.status(201).json({ message: "Bill created", bill: transaction });
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
      return res.status(404).json({ code: "404", message: 'Destination account not found' });
    } else if (!sAccount) {
      return res.status(404).json({ code: "404", message: 'Source account not found' });
    } else if (amount <= 0) {
      return res.status(409).json({ error: 'Amount must be greater than 0' });
    }

    const transaction = await transactionService.create("Transferer", sourceAccount, destinationAccount, amount);
    if(details) transactionService.addTransactionDetails(transaction.id, details);

    if ((sAccount.balance - amount) < 0) {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json({ error: 'Source account has insufficient balance' });
    }

    const transactions = await transactionService.transfer(transaction.id, sourceAccount, destinationAccount, amount);

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
    const { sourceAccount, destinationAccount, amount, details } = req.body;

    const dAccount = await accountService.findById(destinationAccount);
    const sAccount = await accountService.findById(sourceAccount);

    if (!dAccount) {
      return res.status(404).json({ code: "404", message: 'Destination account not found' });
    } else if (!sAccount) {
      return res.status(404).json({ code: "404", message: 'Source account not found' });
    } else if (amount <= 0) {
      return res.status(409).json({ error: 'Amount must be greater than 0' });
    }

    if (!["Vendor", "Employee"].includes(sAccount.user.role)) {
      return res.status(409).json({ error: "Only Employee or Vendor can deposit" });
    }

    const transaction = await transactionService.create("Deposit", sourceAccount, destinationAccount, amount);
    if(details) transactionService.addTransactionDetails(transaction.id, details);

    if ((sAccount.balance - amount) < 0 && sAccount.user.role === "Vendor") {
      await transactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json({ error: 'Vendor has insufficient balance' });
    }

    const transactions = await transactionService.deposit(transaction.id, sAccount, dAccount, amount);

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
    const { sourceAccount, destinationAccount, amount, details } = req.body;

    const dAccount = await accountService.findById(destinationAccount);
    const sAccount = await accountService.findById(sourceAccount);

    if (!dAccount) {
      return res.status(404).json({ code: "404", message: 'Destination account not found' });
    } else if (!sAccount) {
      return res.status(404).json({ code: "404", message: 'Source account not found' });
    } else if (amount <= 0) {
      return res.status(409).json({ error: 'Amount must be greater than 0' });
    }

    if (!["Vendor", "Employee"].includes(dAccount.user.role)) {
      return res.status(409).json({ error: "Only Employee or Vendor can withdraw" });
    }

    const transaction = await transactionService.create("Withdraw", sourceAccount, destinationAccount, amount);
    if(details) transactionService.addTransactionDetails(transaction.id, details);

    if ((sAccount.balance - amount) < 0) {
      await transactionService.updateTransaction(transaction.id, "Failed");
      return res.status(409).json({ error: 'User has insufficient balance' });
    }

    const transactions = await transactionService.withdraw(transaction.id, sAccount, dAccount, amount);

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
    const billId = parseInt(await validate.isNumber(req.params.id, "Bill ID"));
    const { sourceAccount, accepted } = req.body;

    const sAccount = await accountService.findById(sourceAccount);
    const bill = await transactionService.findById(billId);

    if (!sAccount) {
      return res.status(404).json({ code: "404", message: "User account not found" });
    } else if (!bill) {
      return res.status(404).json({ code: "404", message: "Bill not found" });
    } else if (bill.status !== "Pending") {
      return res.status(409).json({ error: "Bill status is not valid" });
    }

    const dAccount = await accountService.findById(bill.destinationAccount);

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
  storeTransfer,
  storeDeposit,
  storeWithdraw,
  payBill,
  update,
  destroy
};