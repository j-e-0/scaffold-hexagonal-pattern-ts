import * as Joi from 'joi';

export const userSchema = Joi.object({
    id: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});