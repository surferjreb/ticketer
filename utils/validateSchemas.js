const Joi = require('joi');

module.exports.companyValSchema = Joi.object({
    company: Joi.object({
        companyName: Joi.string()
            .alphanum()
            .min(2)
            .max(50)
            .required(),
        companyUrl: Joi.string()
        }).required()
    });

