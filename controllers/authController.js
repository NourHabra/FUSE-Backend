const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

const { handleError } = require('./errorController');
const validate = require('./validateController');

const secretKey = process.env.JWT_SECRET;
const maxAge = 60 * 60 * 1000;

async function register(req, res) {
  try {
    let { name, role, email, phone, birth, password, rPassword } = req.body;
    let { category, workPermit } = req.body;
    let { yearlyIncome } = req.body;
    
    role = await validate.isRole(role);
    email = await validate.isEmail(email);
    phone = await validate.isPhone(phone);
    birth = await validate.isDate(birth);
    name = await validate.checkEmpty(name, "name");
    password = await validate.matchPassword(password, rPassword);

    if (role === "Merchant") {
      await validate.notEmpty(category, workPermit);
    } else if (role === "Customer") {
      await validate.notEmpty(yearlyIncome);
    }

    const newUser = await prisma.users.create({
      data: {
        name,
        role,
        email,
        phone,
        birth: new Date(birth).toISOString(),
        password
      },
    });

    if (role === "Merchant") {
      const newMerchant = await prisma.merchant.create({
        data: {
          userId: newUser.id,
          category,
          workPermit
        }
      })
    } else if (role === "Customer") {
      const newCustomer = await prisma.customer.create({
        data: {
          userId: newUser.id,
          yearlyIncome
        }
      })
    }

    const token = jwt.sign({ userId: newUser.id, role: role }, secretKey, { expiresIn: '1h' });
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    await handleError(error, res);
  }
}
const isEMail = require("isemail");


async function login(req, res) {
  try {
    const { email, password } = req.body;
    await validate.isEmail(email);
    await validate.notEmpty(password);

    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } else if (user.password === password) {
      const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '1h' });
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
      return res.json("success");
    } else {
      return res.status(409).json({ message: 'wronge password' });
    }

  } catch (error) {
    await handleError(error, res);
  }
}

async function logout(req, res) {
  res.cookie('jwt', '', { expiresIn: new Date(0) });
  res.json({ logout: "True" });
}

module.exports = { register, login, logout };
