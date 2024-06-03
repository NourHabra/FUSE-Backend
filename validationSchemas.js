const Joi = require('joi');
const { Role, AccountType, AccountStatus, MerchantCategory, userStatus } = require('@prisma/client');

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  role: Joi.string().valid(...Object.values(Role)).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).required(),
  birth: Joi.string().pattern(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/).required(),
  password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
  rPassword: Joi.ref('password'),
  category: Joi.string().valid(...Object.values(MerchantCategory)).when('role', { is: 'Merchant', then: Joi.required() }),
  workPermit: Joi.string().when('role', { is: 'Merchant', then: Joi.required() }),
  yearlyIncome: Joi.number().when('role', { is: 'Customer', then: Joi.required() }),
});

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createAccountSchema = Joi.object({
  userId: Joi.number().integer().required(),
  balance: Joi.number().required(),
  type: Joi.string().valid(...Object.values(AccountType)).required(),
});

const updateAccountSchema = Joi.object({
  userId: Joi.number().integer(),
  balance: Joi.number(),
  type: Joi.string().valid(...Object.values(AccountType)),
  status: Joi.string().valid(...Object.values(AccountStatus)),
  name: Joi.string(),
});

const createBeneficiarySchema = Joi.object({
  acceptUser: Joi.number().integer().required(),
  requstUser: Joi.number().integer().required(),
});

const updateBeneficiarySchema = Joi.object({
  id: Joi.number().integer().required(),
  accepted: Joi.boolean().required(),
});

const createCardSchema = Joi.object({
  accountNumber: Joi.number().integer().required(),
});

const updateCardSchema = Joi.object({
  accountNumber: Joi.number().integer(),
  expiryDate: Joi.date().iso().required(),
  physical: Joi.boolean().required(),
});

const updateMerchantSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).required(),
  birth: Joi.string().pattern(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/).required(),
  status: Joi.string().valid(...Object.values(userStatus)).required(),
  category: Joi.string().valid(...Object.values(MerchantCategory)).required(),
  workPermit: Joi.string().required(),
});

const createBillSchema = Joi.object({
  destinationAccount: Joi.number().integer().required(),
  amount: Joi.number().positive().required(),
  details: Joi.string(),
});

const createTransferSchema = Joi.object({
  sourceAccount: Joi.number().integer().required(),
  destinationAccount: Joi.number().integer().required(),
  amount: Joi.number().positive().required(),
  details: Joi.string(),
});

const createDepositSchema = Joi.object({
  sourceAccount: Joi.number().integer().required(),
  destinationAccount: Joi.number().integer().required(),
  amount: Joi.number().positive().required(),
  details: Joi.string(),
});

const createWithdrawSchema = Joi.object({
  sourceAccount: Joi.number().integer().required(),
  destinationAccount: Joi.number().integer().required(),
  amount: Joi.number().positive().required(),
  details: Joi.string(),
});

const payBillSchema = Joi.object({
  sourceAccount: Joi.number().integer().required(),
  accepted: Joi.boolean().required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).required(),
  birth: Joi.string().pattern(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/).required(),
  status: Joi.string().valid(...Object.values(userStatus)).required(),
});


module.exports = {
  signUpSchema,
  signInSchema,
  createAccountSchema,
  updateAccountSchema,
  createBeneficiarySchema,
  updateBeneficiarySchema,
  createCardSchema,
  updateCardSchema,
  updateMerchantSchema,
  createBillSchema,
  createTransferSchema,
  createDepositSchema,
  createWithdrawSchema,
  payBillSchema,
  updateUserSchema
};
