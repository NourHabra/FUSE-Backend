const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const accountService = require('../services/accountService');

async function create(type, employee, account, amount) {
  let transaction = [];

  transaction.push(
    prisma.cashTransactions.create({
      data: { type, employee, account, amount }
    })
  );
  transaction.push(
    prisma.accounts.update({
      where: {
        id: account
      },
      data: {
        balance:
          type == "Withdraw" ? { decrement: amount } : { increment: amount }
      }
    })
  );
}

async function updateById(id, data) {
  return await prisma.cashTransactions.update({ where: { id }, data });
}

async function findAllTopUp() {
  return await prisma.cashTransactions.findMany({
    where: {
      type: 'Deposit'
    },
    include: {
      supervisor: {
        select: {
          name: true,
          role: true
        }
      },
      accountCustomer: {
        select: {
          user: {
            select: {
              name: true
            }
          }
        }
      }
    }
  });
}

module.exports = {
  create,
  updateById,
  findAllTopUp
};