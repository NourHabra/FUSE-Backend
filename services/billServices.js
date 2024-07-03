const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function findById(id) {
  return await prisma.bills.findUnique({
    where: {
      id: parseInt(id)  
    },
    include: {
      merchantAccount: {
        include: {
          user: {
            include: {
              name: true,
            }
          }
        }
      }
    }
  })
}

async function create(merchantAccount,  amount, details, categoryId) {
  const category = await prisma.merchantCategory.findUnique({
    where: {
      id: categoryId
    }
  })

  return await prisma.bills.create({
    data: {
      merchantAccountNumber: merchantAccount,
      amount: amount,
      details: details? details : "",
      category: category.name
    }
  })
}

async function pay(id, cardId, amount, merchantAccount) {
  let transaction = [];

  transaction.push(
    prisma.bills.update({
      where: {
        id: id
      },
      data: {
        status: "Paid",
        cardId,
        payedAt: new Date()
      }
    })
  );

  transaction.push(
    prisma.cards.update({
      where: {
        id: cardId
      },
      data: {
        balance: { decrement: amount}
      }
    })
  );

  transaction.push(
    prisma.accounts.update({
      where: {
        id: merchantAccount
      },
      data: {
        balance: { increment: amount}
      }
    })
  )

  return await prisma.$transaction(transaction);
}

module.exports = {
  create,
  findById,
  pay
}