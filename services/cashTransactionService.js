const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const accountService = require('../services/accountService');

async function create(type, employee, account, amount, supervisorId) {
  return await prisma.cashTransactions.create({
    data: { type, employee, accountNumber: account, amount, supervisorId }
  })
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
      account: {
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