const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { handleError } = require('./errorController');
const validate = require('./validateController');

async function index(req, res) {
  const allTransactions = await prisma.transactions.findMany();
  return res.json(allTransactions);
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id, "id"));

    const transaction = await prisma.transactions.findUnique({
      where: {
        id,
      },
    });

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
    const dAccount = await prisma.accounts.findUnique({
      where: {
        id: destinationAccount,
        user: {
          role: "Merchant"
        }
      },
    });

    if (!dAccount) {
      return res.status(404).json({ message: 'destinationAccount not found' });
    } else if (dAccount.status != "Active") {
      return res.status(409).json({ error: `destinationAccount is not Active (${dAccount.status})` });
    } else if (amount <= 0) {
      return res.status(409).json({ error: `amount cant be <= 0` });
    }

    const transaction = await prisma.transactions.create({
      data: {
        destinationAccount: parseInt(destinationAccount),
        amount: parseFloat(amount),
        type: "Bill"
      }
    });

    res.status(201).json({ message: "Bill created", bill: transaction });

  } catch (error) {
    await handleError(error, res);
  }
}

async function storeTransferer(req, res) {
  let { sourceAccount, destinationAccount, amount } = req.body;
  sourceAccount = parseInt(await validate.isNumber(sourceAccount, "sourceAccount"));
  destinationAccount = parseInt(await validate.isNumber(destinationAccount, "destinationAccount"));
  amount = parseFloat(await validate.isNumber(amount, "amount"));

  const dAccount = await prisma.accounts.findUnique({
    where: { id: destinationAccount }
  });
  const sAccount = await prisma.accounts.findUnique({
    where: { id: sourceAccount }
  });

  if (!dAccount) {
    return res.status(404).json({ message: 'destinationAccount not found' });
  } else if (!sAccount) {
    return res.status(404).json({ message: 'sourceAccount not found' });
  } else if (amount <= 0) {
    return res.status(409).json({ error: `amount cant be <= 0` });
  }

  const transaction = await prisma.transactions.create({
    data: {
      sourceAccount,
      destinationAccount,
      amount,
      type: "Transferer",
    }
  });

  if ((sAccount.balance - amount) < 0) {
    const upTransaction = await prisma.transactions.update({
      where: { id: transaction.id },
      data: {
        status: "Failed"
      }
    })
    return res.status(409).json({ error: 'sourceAccount low balance', upTransaction });
  }

  const transactions = await prisma.$transaction([
    prisma.accounts.update({
      where: { id: sourceAccount },
      data: {
        balance: sAccount.balance - amount,
      }
    }),
    prisma.accounts.update({
      where: { id: destinationAccount },
      data: {
        balance: dAccount.balance + amount
      }
    }),
    prisma.transactions.update({
      where: { id: transaction.id },
      data: { status: "Completed" }
    })
  ]);
  if (!transactions) {
    const upTransaction = await prisma.transactions.update({
      where: { id: transaction.id },
      data: {
        status: "Failed"
      }
    });
    return res.status(409).json({ error: 'Falid to make transaction', upTransaction });
  }

  return res.status(201).json({ transactions });

}

async function storeDeposit(req, res) {
  let { sourceAccount, destinationAccount, amount } = req.body;
  sourceAccount = parseInt(await validate.isNumber(sourceAccount, "sourceAccount"));
  destinationAccount = parseInt(await validate.isNumber(destinationAccount, "destinationAccount"));
  amount = parseFloat(await validate.isNumber(amount, "amount"));

  const dAccount = await prisma.accounts.findUnique({
    where: { id: destinationAccount }
  });
  const sAccount = await prisma.accounts.findUnique({
    where: { id: sourceAccount },
    select: {
      balance: true,
      user: {
        select: {
          role: true
        }
      }
    }
  });

  if (!dAccount) {
    return res.status(404).json({ message: 'destinationAccount not found' });
  } else if (!sAccount) {
    return res.status(404).json({ message: 'sourceAccount not found' });
  } else if (amount <= 0) {
    return res.status(409).json({ error: `amount cant be <= 0` });
  }

  if (!(sAccount.user.role in { "Vendor": "Vendor", "Employee": "Employee" })) {
    return res.status(409).json({ error: "Only Employee or Vendor can deposit" });
  }

  const transaction = await prisma.transactions.create({
    data: {
      sourceAccount,
      destinationAccount,
      amount,
      type: "Deposit",
    }
  });

  if ((sAccount.balance - amount) < 0 && sAccount.user.role === "Vendor") {
    const upTransaction = await prisma.transactions.update({
      where: { id: transaction.id },
      data: {
        status: "Failed"
      }
    })
    return res.status(409).json({ error: 'Vendor low balance', upTransaction });
  }

  if (sAccount.user.role === "Vendor") {
    const transactions = await prisma.$transaction([
      prisma.accounts.update({
        where: { id: sourceAccount },
        data: {
          balance: sAccount.balance - amount,
        }
      }),
      prisma.accounts.update({
        where: { id: destinationAccount },
        data: {
          balance: dAccount.balance + amount
        }
      }),
      prisma.transactions.update({
        where: { id: transaction.id },
        data: { status: "Completed" }
      })
    ]);

    if (!transactions) {
      const upTransaction = await prisma.transactions.update({
        where: { id: transaction.id },
        data: {
          status: "Failed"
        }
      });
      return res.status(409).json({ error: 'Falid to make transaction', upTransaction });
    }
    return res.status(201).json({ transactions });

  } else if (sAccount.user.role === "Employee") {
    const transactions = await prisma.$transaction([
      prisma.accounts.update({
        where: { id: destinationAccount },
        data: {
          balance: dAccount.balance + amount
        }
      }),
      prisma.transactions.update({
        where: { id: transaction.id },
        data: { status: "Completed" }
      })
    ]);

    if (!transactions) {
      const upTransaction = await prisma.transactions.update({
        where: { id: transaction.id },
        data: {
          status: "Failed"
        }
      });
      return res.status(409).json({ error: 'Falid to make transaction', upTransaction });
    }
    return res.status(201).json({ transactions });
  }

}

async function storeWithdraw(req, res) {
  let { sourceAccount, destinationAccount, amount } = req.body;
  sourceAccount = parseInt(await validate.isNumber(sourceAccount, "sourceAccount"));
  destinationAccount = parseInt(await validate.isNumber(destinationAccount, "destinationAccount"));
  amount = parseFloat(await validate.isNumber(amount, "amount"));

  const dAccount = await prisma.accounts.findUnique({
    where: { id: destinationAccount },
    select: {
      balance: true,
      user: {
        select: {
          role: true
        }
      }
    }
  });
  const sAccount = await prisma.accounts.findUnique({
    where: { id: sourceAccount },
    
  });

  if (!dAccount) {
    return res.status(404).json({ message: 'destinationAccount not found' });
  } else if (!sAccount) {
    return res.status(404).json({ message: 'sourceAccount not found' });
  } else if (amount <= 0) {
    return res.status(409).json({ error: `amount cant be <= 0` });
  }

  if (!(dAccount.user.role in { "Vendor": "Vendor", "Employee": "Employee" })) {
    return res.status(409).json({ error: "Only Employee or Vendor can deposit" });
  }

  const transaction = await prisma.transactions.create({
    data: {
      sourceAccount,
      destinationAccount,
      amount,
      type: "Withdraw",
    }
  });

  if ((sAccount.balance - amount) < 0) {
    const upTransaction = await prisma.transactions.update({
      where: { id: transaction.id },
      data: {
        status: "Failed"
      }
    })
    return res.status(409).json({ error: 'User low balance', upTransaction });
  }

  if (dAccount.user.role === "Vendor") {
    const transactions = await prisma.$transaction([
      prisma.accounts.update({
        where: { id: sourceAccount },
        data: {
          balance: sAccount.balance - amount,
        }
      }),
      prisma.accounts.update({
        where: { id: destinationAccount },
        data: {
          balance: dAccount.balance + amount
        }
      }),
      prisma.transactions.update({
        where: { id: transaction.id },
        data: { status: "Completed" }
      })
    ]);

    if (!transactions) {
      const upTransaction = await prisma.transactions.update({
        where: { id: transaction.id },
        data: {
          status: "Failed"
        }
      });
      return res.status(409).json({ error: 'Falid to make transaction', upTransaction });
    }
    return res.status(201).json({ transactions });

  } else if (sAccount.user.role === "Employee") {
    const transactions = await prisma.$transaction([
      prisma.accounts.update({
        where: { id: sourceAccount },
        data: {
          balance: sAccount.balance - amount
        }
      }),
      prisma.transactions.update({
        where: { id: transaction.id },
        data: { status: "Completed" }
      })
    ]);

    if (!transactions) {
      const upTransaction = await prisma.transactions.update({
        where: { id: transaction.id },
        data: {
          status: "Failed"
        }
      });
      return res.status(409).json({ error: 'Falid to make transaction', upTransaction });
    }
    return res.status(201).json({ transactions });
  }

}

async function update(req, res) {

}

async function destroy(req, res) {

}

module.exports = { index, show, storeBill, storeTransferer, storeDeposit, storeWithdraw, update, destroy };
