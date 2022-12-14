const { validationResult } = require("express-validator");

const errorParser = (req, res, next) => {
  const { errors } = validationResult(req);

  const messages = {};
  if (errors.length > 0) {
    errors.forEach((error) => {
      if (!messages?.[error.param]) {
        messages[error.param] = error.msg;
      }
    });
  }

  if (Object.keys(messages).length > 0) {
    return res.status(400).json({
      status: 400,
      success: false,
      messages,
    });
  }

  next();
};

module.exports = {
  errorParser,
};
