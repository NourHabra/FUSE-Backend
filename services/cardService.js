const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findAll() {
  return await prisma.cards.findMany({
    orderBy: [{ expiryDate: "desc" }],
    select: {
      id: true,
      accountNumber: true,
      expiryDate: true,
    }
  });
}

async function findById(id) {
  return await prisma.cards.findUnique({
    where: { id },
  });
}

async function findByAccountId(id) {
  return await prisma.cards.findMany({
    where: { accountNumber: id },
    orderBy: [{ expiryDate: "desc" }],
  });
}

async function findByUserId(id) {
  return await prisma.cards.findMany({
    where: {
      account: {
        userId: id
      }
    }
  });
}

async function create(cardName ,accountNumber, PIN) {
  let id, checkID;
  do {
    let randomNumber = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    id = randomNumber.toString();

    checkID = await findById(id);
  } while (checkID);

  return await prisma.cards.create({
    data: {
      id,
      cardName,
      accountNumber: parseInt(accountNumber),
      cvv: Math.floor(Math.random() * 900) + 100,
      PIN
    }
  });
}

async function updateById(id, data) {
  if (data.expiryDate) data.expiryDate = new Date(data.expiryDate).toISOString();
  return await prisma.cards.update({
    where: { id },
    data
  });
}

async function deleteCard(id) {
  return await prisma.cards.delete({
    where: { id },
  });
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deleteCard,
  findByAccountId,
  findByUserId
};
