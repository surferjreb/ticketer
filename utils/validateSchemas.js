const Joi = require('joi');

module.exports.companyValSchema = Joi.object({
    comp: Joi.object({
        companyName: Joi.string()
            .alphanum()
            .min(2)
            .max(50)
            .required(),
        companyUrl: Joi.string(),
        }).required()
    });

module.exports.customerValSchema = Joi.object({
    cust: Joi.object({
        firstName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        lastName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email()
    }).required()
});

module.exports.ticketValSchema = Joi.object({
    ticket: Joi.object({
        title: Joi.string()
            .alphanum()
            .min(1)
            .max(50)
            .required(),
        description: Joi.string()
            .alphanum()
            .min(3)
            .required()
    }).required()
});