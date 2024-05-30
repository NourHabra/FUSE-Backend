const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authService = require('../services/authService');
const userService = require('../services/userService');
const merchantService = require('../services/merchantService');
const customerService = require('../services/customerService');
const { handleError } = require('./errorController');
const { revokedTokens } = require('../middleware/authMiddleware');
const validate = require('./validateController');

const secretKey = process.env.JWT_SECRET;
const maxAge = 30 * 60 * 1000;

async function register(req, res) {
  try {
    const salt = await bcrypt.genSalt();
    const { name, role, email, phone, birth, password } = req.body;
    const { category, workPermit } = req.body;
    const { yearlyIncome } = req.body;

    const newUser = await userService.create(name, role, email, phone, birth, await bcrypt.hash(password, salt));

    if (role === "Merchant") {
      await merchantService.create(newUser.id, category, workPermit);
    } else if (role === "Customer") {
      await customerService.create(newUser.id, yearlyIncome);
    }

    const token = jwt.sign({ userId: newUser.id, role }, secretKey, { expiresIn: '30m' });
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    await handleError(error, res);
  } finally {
    await authService.disconnect();
  }
}

async function registerMerchant(req, res) {
  try {
    const salt = await bcrypt.genSalt();
    let { name, email, phone, birth, password, rPassword, category, workPermit } = req.body;

    email = await validate.isEmail(email);
    phone = await validate.isPhone(phone);
    birth = await validate.isDate(birth);
    name = await validate.checkEmpty(name, "name");
    password = await validate.matchPassword(password, rPassword);
    password = await bcrypt.hash(password, salt);
    workPermit = await validate.checkEmpty(workPermit, "workPermit");
    category = await validate.isMerchantCategory(category);

    const newUser = await userService.create(name, "Merchant", email, phone, birth, password);
    await merchantService.create(newUser.id, category, workPermit);

    const token = jwt.sign({ userId: newUser.id, role: "Merchant" }, secretKey, { expiresIn: '30m' });
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ message: 'Merchant created successfully' });

  } catch (error) {
    await handleError(error, res);
  } finally {
    await authService.disconnect();
  }
}

async function registerCustomer(req, res) {
  try {
    const salt = await bcrypt.genSalt();
    let { name, email, phone, birth, password, rPassword, yearlyIncome } = req.body;

    email = await validate.isEmail(email);
    phone = await validate.isPhone(phone);
    birth = await validate.isDate(birth);
    name = await validate.checkEmpty(name, "name");
    password = await validate.matchPassword(password, rPassword);
    password = await bcrypt.hash(password, salt);
    yearlyIncome = parseFloat(await validate.isNumber(yearlyIncome));

    const newUser = await userService.create(name, "Customer", email, phone, birth, password);
    await customerService.create(newUser.id, yearlyIncome);

    const token = jwt.sign({ userId: newUser.id, role: "Customer" }, secretKey, { expiresIn: '30m' });
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ message: 'Customer created successfully' });

  } catch (error) {
    await handleError(error, res);
  } finally {
    await authService.disconnect();
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userService.findByEmail(email);

    if (!user) {
      return res.status(404).json({ code:"404",message: 'User not found' });
    } else if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '30m' });
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
  try {
    const token = req.body.jwt;

    revokedTokens.add(token);

    res.clearCookie('jwt');
    res.json({ message: 'Logout successful' });
  } catch (error) {
    await handleError(error, res);
  }
}

module.exports = { register, login, logout };
