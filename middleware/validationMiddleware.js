const Joi = require('joi');
const { signUpSchema, signInSchema } = require('../validationSchemas');

const validateSignUp = (req, res, next) => {
  const { error } = signUpSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateSignIn = (req, res, next) => {
  const { error } = signInSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};


module.exports = {
  validateSignUp,
  validateSignIn
};
