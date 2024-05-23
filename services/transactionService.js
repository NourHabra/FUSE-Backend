const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findAll() {
  return await prisma.transactions.findMany();
}

async function findById(id) {
  return await prisma.transactions.findUnique({ where: { id } });
}

async function create(type, sourceAccount, destinationAccount, amount) {
  return await prisma.transactions.create({
    data: { type, sourceAccount, destinationAccount, amount }
  });
}

async function updateById(id, { data }) {
  return await prisma.transactions.update({ where: { id }, data });
}

async function makeTransaction(transactions) {
  return await prisma.$transaction(transactions);
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  makeTransaction
};
