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
    where: { role: controllerRole, status: { not: "Deleted" } },
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
        status: {not: "Deleted"}
      },
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
    let { name, email, phone, birth, status, category, workPermit } = req.body;
    name = await validate.checkEmpty(name, "name");
    workPermit = await validate.checkEmpty(workPermit, "workPermit");
    email = await validate.isEmail(email);
    phone = await validate.isPhone(phone);
    birth = await validate.isDate(birth);
    category = await validate.isMerchantCategory(category);
    status = await validate.isUserStatus(status);

    const oldMerchant = await prisma.users.findUnique({ where: { id, role: controllerRole } });
    if (!oldMerchant) {
      return res.status(404).json({ message: 'Merchant not found' });
    }

    const updateMerchant = await prisma.users.update({
      where: {
        id,
        role: controllerRole
      },
      data: {
        name,
        email,
        phone,
        birth: new Date(birth).toISOString(),
        status,
        merchant: {
          update: {
            category,
            workPermit
          }
        }
      },
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

    return res.status(200).json(updateMerchant);

  } catch (error) {
    await handleError(error, res);
  }

}

async function destroy(req, res) {
  try {
    const deletedMerchant = await prisma.users.update({
      where: {
        id: parseInt(req.params.id),
        role: controllerRole,
      },
      data:{
        status: "Deleted"
      }
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
