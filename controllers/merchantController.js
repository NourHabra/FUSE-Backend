const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const validate = require('./validateController');
const { handleError } = require("./errorController");

const dotenv = require('dotenv');
const e = require('express');
dotenv.config();

const controllerRole = "Merchant";

async function index(req, res) {
  const allMerchants = await prisma.users.findMany({
    where: {role: controllerRole},
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birth: true,
      role: true,
      merchant: {
        select: {
          category: true,
          workPermit: true
        }
      }
    }
  });
  return res.json(allMerchants);
}

async function show(req, res) {
  try {
    const id = parseInt(await validate.isNumber(req.params.id));

    const merchant = await prisma.users.findUnique({
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

    if (!merchant) {
      return res.status(404).json({ message: 'Merchant not found' });
    }
    return res.json(merchant);

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

    const oldMerchant = await prisma.users.findUnique({where:{id}});
    if(!oldMerchant){
      return res.status(404).json({ message: 'Merchant not found' });
    }

    const updateMerchant = await prisma.users.update({
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

    return res.status(200).json(updateMerchant);

  }catch(error){
    await handleError(error, res);
  }

}

async function destroy(req, res) {
  try {
    const deletedMerchant = await prisma.users.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!deletedMerchant) {
      return res.status(404).json({ message: 'Merchant not found' });
    }
    return res.json({ message: 'Merchant deleted successfully' });
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { index, show, update, destroy };
