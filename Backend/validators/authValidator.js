import Joi from 'joi';

export const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required().label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match password' })
});


export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
