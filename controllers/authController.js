const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authService = require('../services/authService');
const userService = require('../services/userService');
const merchantService = require('../services/merchantService');
const customerService = require('../services/customerService');
const { handleError } = require('./errorController');
const validate = require('./validateController');

const secretKey = process.env.JWT_SECRET;
const maxAge = 60 * 60 * 1000;

async function register(req, res) {
  try {
    const salt = await bcrypt.genSalt();
    let { name, role, email, phone, birth, password, rPassword } = req.body;
    let { category, workPermit } = req.body;
    let { yearlyIncome } = req.body;

    role = await validate.isRole(role);
    email = await validate.isEmail(email);
    phone = await validate.isPhone(phone);
    birth = await validate.isDate(birth);
    name = await validate.checkEmpty(name, "name");
    password = await validate.matchPassword(password, rPassword);
    password = await bcrypt.hash(password, salt);

    if (role === "Merchant") {
      await validate.notEmpty(category, workPermit);
    } else if (role === "Customer") {
      await validate.notEmpty(yearlyIncome);
    }

    const newUser = await userService.create(name, role, email, phone, birth, password);

    if (role === "Merchant") {
      await merchantService.create(newUser.id, category, workPermit);
    } else if (role === "Customer") {
      await customerService.create(newUser.id, yearlyIncome);
    }

    const token = jwt.sign({ userId: newUser.id, role }, secretKey, { expiresIn: '1h' });
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    await handleError(error, res);
  } finally {
    await authService.disconnect();
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    await validate.isEmail(email);
    await validate.checkEmpty(password, "password");

    const user = await userService.findByEmail(email);

    if (!user) {
      return res.status(404).json({ code:"404",message: 'User not found' });
    } else if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '1h' });
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
      return res.json("success");
    } else {
      return res.status(409).json({ message: 'Wrong password' });
    }

  } catch (error) {
    await handleError(error, res);
  } finally {
    await authService.disconnect();
  }
}

async function logout(req, res) {
  res.cookie('jwt', '', { expiresIn: new Date(0) });
  res.json({ logout: "True" });
}

module.exports = { register, login, logout };
