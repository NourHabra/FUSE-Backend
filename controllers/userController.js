const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const validate = require('./validateController');
const { handleError } = require("./errorController");

const dotenv = require('dotenv');
const e = require('express');
dotenv.config();

async function index(req, res) {
  const allUsers = await prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birth: true,
      role: true
    }
  });
  return res.json(allUsers);
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id));

    const user = await prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        birth: true,
        role: true
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);

  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id));
    let { name, email, phone, birth } = req.body;
    name = await validate.checkEmpty(name, "name");
    email = await validate.isEmail(email);
    phone = await validate.isPhone(phone);
    birth = await validate.isDate(birth);

    const oldUser = await prisma.users.findUnique({where:{id}});
    if(!oldUser){
      return res.status(404).json({ message: 'User not found' });
    }

    const updateUser = await prisma.users.update({
      where: {
        id
      },
      data: {
        name,
        email,
        phone,
        birth: new Date(birth).toISOString(),
      }, 
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        birth: true,
        role: true
      }
    });

    return res.status(200).json(updateUser);

  }catch(error){
    await handleError(error, res);
  }

}

async function destroy(req, res) {
  try {
    const deletedUser = await prisma.users.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, update, destroy };
