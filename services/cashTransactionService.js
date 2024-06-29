const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const accountService = require('../services/accountService');

async function create(type, employee, account, amount) {
  return await prisma.cashTransactions.create({
    data: { type, employee, account, amount }
  });
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
          name: true
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