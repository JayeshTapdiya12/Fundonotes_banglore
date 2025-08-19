import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    email: Joi.string().min(3).required(),
    password: Joi.string().min(8).pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
