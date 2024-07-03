import * as Joi from 'joi';

export const productSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required()
});
