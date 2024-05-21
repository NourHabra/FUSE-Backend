const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { handleError } = require('./errorController');
const validate = require('./validateController');


async function index(req, res) {
  const allCards = await prisma.cards.findMany({
    orderBy: [{expiryDate: "desc"}],
    select: {
      id: true,
      accountNumber: true,
      expiryDate: true,
    }
  });
  return res.json(allCards);
}

async function show(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const card = await prisma.cards.findUnique({
      where: {
        id: id,
      }
    });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    return res.json(card);

  } catch (error) {
    await handleError(error, res);
  }
}

async function store(req, res) {
  try {
    let { accountNumber } = req.body;
    accountNumber = await validate.isNumber(accountNumber, "accountNumber");

    let id, checkID;
    do{
    let randomNumber = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    id = randomNumber.toString();
    
    checkID = await prisma.cards.findUnique({
      where: {id}
    });

    }while(checkID);


    const newCard = await prisma.cards.create({
      data: {
        id,
        accountNumber: parseInt(accountNumber),
        cvv: Math.floor(Math.random() * 900) + 100,
      }
    })
    return res.json(newCard);
  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try{
    const id = await validate.checkEmpty(req.params.id, "id");

    let {accountNumber, expiryDate, physical} = req.body;
    accountNumber = await validate.isNumber();
    expiryDate = await validate.isDate();
    physical = await validate.checkEmpty(physical, "physical");

    const newCard = await prisma.cards.update({
      where: {
        id: parseInt(id)
      },
      data: {
        accountNumber: parseInt(accountNumber),
        expiryDate: new Date(expiryDate).toISOString(),
        physical
      }
    })
    res.json(newCard);
  }catch(error){
    await handleError(error, res);
  }
}

async function destroy(req, res) {
  try {
    const id = await validate.checkEmpty(req.params.id, "id");

    const deletedCard = await prisma.cards.delete({
      where: {
        id: parseInt(id),
      },
    });
    if (!deletedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }
    return res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, store, update, destroy };