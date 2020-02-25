const Joi = require('@hapi/joi');

const EmailAndFullNameSchema = Joi.object({
    fullName: Joi.string()
        .alphanum()
        .min(1)
        .max(12)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
});

const EmailSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
});

const UpdatedNameAndFullNameSchema = Joi.object({
    fullName: Joi.string()
        .alphanum()
        .min(1)
        .max(12)
        .required(),
    updatedName: Joi.string()
        .alphanum()
        .min(1)
        .max(12)
        .required()
});


module.exports = {
    /**
     * @exports
     * @method validateEmailAndFullName
     * @param {}
     * @summary validate email and fullName
     * @returns
     */
    validateEmailAndFullName(userEmail, userFullName) {
        return EmailAndFullNameSchema.validate({
            email: userEmail,
            fullName: userFullName
        },
        { allowUnknown: true });
    },

    /**
     * @exports
     * @method validateEmail
     * @param {}
     * @summary validate email
     * @returns
     */
    validateEmail(userEmail) {
        return EmailSchema.validate({ email: userEmail });
    },

    /**
     * @exports
     * @method validateFullNameAndUpdatedName
     * @param {}
     * @summary validatee fullName and updated name
     * @returns
     */
    validateFullNameAndUpdatedName(userFullName, userUpdatedName) {
        return UpdatedNameAndFullNameSchema.validate({
            fullName: userFullName,
            updatedName: userUpdatedName
        });
    }
};
