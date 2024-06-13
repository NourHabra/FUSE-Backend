const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findAll() {
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

async function findById(id) {
  return await prisma.accounts.findUnique({
    where: {
      id: parseInt(id),
    }
  });
}

async function findByUserId(id){
  return await prisma.accounts.findFirst({
    where: {
      userId: parseInt(id),
      type: "Checking"
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
  findAll,
  findById,
  create,
  updateById,
  disconnect,
  findByUserId
};
