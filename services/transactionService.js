const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findAll() {
  return await prisma.transactions.findMany();
}

async function findById(id) {
  return await prisma.transactions.findUnique({ where: { id } });
}

async function findAllFromTo(sourceRole, destinationRole) {
  return await prisma.transactions.findMany({
    where: {
      sAccount: {
        user: {
          role: sourceRole
        }
      },
      dAccount: {
        user: {
          role: destinationRole
        }
      }
    }
  });
}

async function create(type, sourceAccount, destinationAccount, amount) {
  return await prisma.transactions.create({
    data: { type, sourceAccount, destinationAccount, amount }
  });
}

async function updateById(id, { data }) {
  return await prisma.transactions.update({ where: { id }, data });
}

async function makeTransfer(id,sourceAccount, destinationAccount, amount) {
  const transactions = [
    accountService.updateById(sourceAccount, { balance: sourceAccount.balance - amount }),
    accountService.updateById(destinationAccount, { balance: destinationAccount.balance + amount }),
    updateById(id, { status: "Completed" })
  ];

  return await prisma.$transaction(transactions);
}

async function deposit(id, sourceAccount, destinationAccount, amount) {
  const transactions = sourceAccount.user.role === "Vendor" ? [
    accountService.updateById(sourceAccount, { balance: sourceAccount.balance - amount }),
    accountService.updateById(destinationAccount, { balance: destinationAccount.balance + amount }),
    updateById(id, { status: "Completed" })
  ] : [
    accountService.updateById(destinationAccount, { balance: destinationAccount.balance + amount }),
    updateById(id, { status: "Completed" })
  ];

  return await prisma.$transaction(transactions);
}

async function withdraw(id, sourceAccount, destinationAccount, amount) {
  const transactions = destinationAccount.user.role === "Vendor" ? [
    accountService.updateById(sourceAccount, { balance: sourceAccount.balance - amount }),
    accountService.updateById(destinationAccount, { balance: destinationAccount.balance + amount }),
    updateById(id, { status: "Completed" })
  ] : [
    accountService.updateById(sourceAccount, { balance: sourceAccount.balance - amount }),
    updateById(id, { status: "Completed" })
  ]

  return await prisma.$transaction(transactions);
}

async function makeTransaction(transactions) {
  return await prisma.$transaction(transactions);
}

async function addTransactionDetails(id, details){
  return await prisma.transactionsDetails.create({
    date:{
      transactionId : id,
      details
    }
  })
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  makeTransaction,
  makeTransfer,
  deposit,
  withdraw,
  addTransactionDetails,
  findAllFromTo
};
