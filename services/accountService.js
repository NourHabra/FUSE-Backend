const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAll() {
  return await prisma.accounts.findMany({
    select: {
      id: true,
      userId: true,
      name: true,
      type: true,
      createdAt: true
    }
  });
}

async function getById(id) {
  return await prisma.accounts.findUnique({
    where: {
      id: parseInt(id),
    }
  });
}

async function create(userId, balance, type) {
  return await prisma.accounts.create({
    data: {
      userId: parseInt(userId),
      balance: parseFloat(balance),
      type,
      name: `${type}_${userId}_FUSE`
    }
  });
}

async function updateById(id, { data }) {
  return await prisma.accounts.update({
    where: {
      id: parseInt(id)
    },
    data
  });
}

async function disconnect() {
  await prisma.$disconnect();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  disconnect,
};
