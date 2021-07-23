const Joi = require('joi');

const listRecords = Joi.object({
  startDate: Joi.date(),
  endDate: Joi.date(),
  minCount: Joi.number().required().min(0),
  maxCount: Joi.number().required().min(0),
});

module.exports.validateListRecords = () => (req, res, next) => {
  const { error } = listRecords.validate(req.body);
  if (error) {
    return res.status(400).json({
      code: 1,
      message: 'failed',
      description: error.details[0].message,
    });
  }
  next();
};
