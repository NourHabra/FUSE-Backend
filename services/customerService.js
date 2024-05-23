const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function create(userId, yearlyIncome) {
  return await prisma.customer.create({
    data: { userId, yearlyIncome }
  });
}

module.exports = {
  create
}