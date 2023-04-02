const Joi = require("joi");

const dataValidate = (data) => {
  const shema = Jio.object({
    fileName: Joi.string().required(),
    content: Joi.string().required(),
  });

  return shema.validate(data);
};

module.exports = dataValidate;
