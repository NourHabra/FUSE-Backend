const Joi = require('joi');
const { Role } = require('@prisma/client');

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  role: Joi.string().valid(Role).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).required(),
  birth: Joi.string().pattern(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/).required(),
  password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
  rPassword: Joi.ref('password'),
  category: Joi.string().valid('Food', 'Clothing', 'Electronics').when('role', { is: 'Merchant', then: Joi.required() }),
  workPermit: Joi.string().when('role', { is: 'Merchant', then: Joi.required() }),
  yearlyIncome: Joi.number().when('role', { is: 'Customer', then: Joi.required() }),
});

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});


module.exports = {
  signUpSchema,
  signInSchema
};
