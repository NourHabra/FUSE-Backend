const transactionService = require('../services/transactionService');
const cashTransactionService = require('../services/cashTransactionService');
const merchantService = require('../services/merchantService');
const accountService = require('../services/accountService');
const { handleError } = require('./errorController');
const validate = require('./validateController');
const { makePayload } = require('../middleware/encryptionMiddleware');

async function index(req, res) {
  try {
    const allTransactions = await transactionService.findAll();
    console.log("sending all transactions");
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
    const { sourceRole, destinationRole } = req.body;
    const transactions = await transactionService.findAllFromTo(sourceRole, destinationRole);

    if (!transactions) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Transactions not found' }, req.user.id));
    }
    console.log("transactions from ", sourceRole, " to ", destinationRole, " are going to be returned");
    return res.json(await makePayload(transactions, req.user.id));

  } catch (error) {
    await handleError(error, res);
  }
}

async function showTopUp(req, res) {
  try {
    transactions = await cashTransactionService.findAllTopUp();
    if (!transactions) {
      return res.status(404).json(await makePayload({ code: "404", message: 'TopUp not found/Empty' }, req.user.id));
    }
    console.log("TopUp is ready to be sent");
    return res.status(201).json(await makePayload(transactions, req.user.id));
  } catch (error) {
    await handleError(error, res)
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
    const { account, amount } = req.body;

    const Account = await accountService.findById(account);
    const empID = req.user.id;

    if (!Account) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Destination account not found' }, req.user.id));
    } else if (amount <= 0) {
      return res.status(409).json(await makePayload({ error: 'Amount must be greater than 0' }, req.user.id));
    }

    let transaction = await cashTransactionService.create("Deposit", empID, account, amount);
    //if (details) transactionService.addTransactionDetails(transaction.id, details);

    const deposit = await accountService.updateById(account, { balance: {increment: amount} });
    if(!deposit){
      transaction = await cashTransactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json(await makePayload({ error: 'Failed to complete deposit' }, req.user.id));
    }
    
    transaction = await cashTransactionService.updateById(transaction.id, { status: "Completed" });

    return res.status(201).json(await makePayload({ transaction }, req.user.id));
  } catch (error) {
    await handleError(error, res);
  }
}

async function storeWithdraw(req, res) {
  try {
    const { account, amount } = req.body;

    const Account = await accountService.findById(account);
    const empID = req.user.id;

    if (!Account) {
      return res.status(404).json(await makePayload({ code: "404", message: 'Destination account not found' }, req.user.id));
    } else if (amount <= 0) {
      return res.status(409).json(await makePayload({ error: 'Amount must be greater than 0' }, req.user.id));
    } else if ((Account.balance - amount) < 0) {
      return res.status(409).json(await makePayload({ error: 'Account has insufficient balance' }, req.user.id));
    }

    let transaction = await cashTransactionService.create("Withdraw", empID, account, amount);
    //if (details) transactionService.addTransactionDetails(transaction.id, details);

    const withdraw = await accountService.updateById(account, { balance: {decrement: amount} });
    if(!withdraw){
      transaction = await cashTransactionService.updateById(transaction.id, { status: "Failed" });
      return res.status(409).json(await makePayload({ error: 'Failed to complete withdraw' }, req.user.id));
    }
    
    transaction = await cashTransactionService.updateById(transaction.id, { status: "Completed" });

    return res.status(201).json(await makePayload({ transaction }, req.user.id));
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
    } else {
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
  const id = parseInt(await validate.isNumber(req.params.id, "id"));
  const { sourceAccount, destinationAccount, amount } = req.body;

  const oldTransaction = await transactionService.findById(id);
  let result = "";

  const oldSourceAccount = await accountService.findById(oldTransaction.sourceAccount);
  const oldDestinationAccount = await accountService.findById(oldTransaction.destinationAccount);

  if (sourceAccount != oldTransaction.sourceAccount) {
    const newSourceAccount = await accountService.findById(sourceAccount);

    if (newSourceAccount.balance - amount < 0) {
      return res.status(409).json(await makePayload({ error: 'New Source has insufficient balance' }, req.user.id));
    }
    const transactions = await transactionService.changeSourceAccount(id, oldSourceAccount, newSourceAccount, oldTransaction.amount, amount);
    if (transactions) {
      result += "Source account changed from " + oldSourceAccount.id + " to " + newSourceAccount.id + "\n";
    }
  }

  if (destinationAccount != oldTransaction.destinationAccount) {
    const newDestinationAccount = await accountService.findById(destinationAccount);

    if (oldDestinationAccount.balance - oldTransaction.amount < 0) {
      return res.status(409).json(await makePayload({ error: 'Old Destination has insufficient balance' }, req.user.id));
    }
    const transactions = await transactionService.changeDestinationAccount(id, oldDestinationAccount, newDestinationAccount, oldTransaction.amount, amount);
    if (transactions) {
      result += "Destination account changed from " + oldDestinationAccount.id + " to " + newDestinationAccount.id + "\n";
    }
  }

  if (result === "" && amount != oldTransaction.amount) {
    if (oldSourceAccount.balance - (amount - oldTransaction.amount) < 0) {
      return res.status(409).json(await makePayload({ error: 'Source Account has insufficient balance' }, req.user.id));
    }

    const transactions = await transactionService.changeAmount(id, amount, oldTransaction.amount);
    result += "Amount changed from " + oldTransaction.amount + " to " + amount + "\n";
  }
  if (result === "") { result = "Nothing changed" }
  console.log(result);

  return res.status(200).json(await makePayload(result, req.user.id));

}

async function patchDeposit(req, res) {

}

async function patchWithdraw(req, res) {

}

async function destroy(req, res) {
  const id = parseInt(await validate.isNumber(req.params.id, "id"));
  const oldTransaction = await transactionService.deleteById(id);

  if (!oldTransaction) {
    return res.status(404).json(await makePayload({ code: "404", message: "Transaction not found" }, req.user.id));
  } else {
    return res.status(200).json(await makePayload("Transaction deleted", req.user.id));
  }
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
  showTransactionsFromTo,
  showTopUp,
  patchDeposit,
  patchWithdraw
};
