const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { handleError } = require('./errorController');
const validate = require('./validateController');



async function index(req, res) {
  const allAccounts = await prisma.accounts.findMany({
      select: {
          id: true,
          userId: true,
          name: true,
          type: true,
          createdAt: true
      }
  });
  return res.json(allAccounts);
}

async function show(req, res){
  try{
    const id = await validate.isNumber(req.params.id, "id");

    const account = await prisma.accounts.findUnique({
      where: {
        id: parseInt(id),
      }
    });

    if(!account){
      return res.status(404).json({ message: 'Account not found' });
    }
    return res.json(account);

  }catch(error){
    await handleError(error, res);
  }
}

async function store(req, res){
  try{
    let {userId, balance, type} = req.body;
    userId = await validate.isNumber(userId, "userId");
    balance = await validate.isNumber(balance, "balance");
    type = await validate.isAccountType(type);

    const newAccount = await prisma.accounts.create({
      data: {
        userId,
        balance,
        type,
        name: `${type}_${userId}_FUSE`
      }
    })
  }catch(error){
    await handleError(error, res);
  }
}

async function update(req, res){
  try{
    const id = await validate.isNumber(req.params.id, "id");

    let {userId, balance, type, status, name} = req.body;
    userId = await validate.isNumber(userId, "userId");
    balance = await validate.isNumber(balance, "balance");
    type = await validate.isAccountType(type);
    status = await validate.isAccountStatus(status);
    name = await validate.checkEmpty(name, "name");

    const newAccount = await prisma.accounts.update({
      where: {
        id: parseInt(id)
      },
      data: {
        userId,
        balance,
        type,
        name,
        status
      }
    })
  }catch(error){
    await handleError(error, res);
  }
}

async function destroy(req, res){
  try {
    const id = await validate.isNumber(req.params.id, "id");

    const deletedUser = await prisma.accounts.update({
      where: {
        id: parseInt(id),
      },
      data: {
        status: "Inactive"
      }
    });
    if (!deletedUser) {
      return res.status(404).json({ message: 'Account not found' });
    }
    return res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, store, update, destroy };
