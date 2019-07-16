const Account = require('../model');

const badUrl = (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Take a good look at the URL!',
  });

const verifyId = (req, res, next) => {
  const { id } = req.params;

  if (!/^\d+$/.test(id))
    return res.status(400).json({
      status: 400,
      message: 'Request parameter must be an integer.',
    });

  Account.get(id).then(car => {
    if (!car.length)
      return res.status(404).json({
        status: 404,
        message: 'No account matches that Id.',
      });

    next();
  });
};

const verifyCar = (req, res, next) => {
  const { VIN, make, model, mileage, status, transmission } = req.body;

  if (!VIN || !make || !model || !mileage || !status || !transmission)
    return res.status(400).json({
      status: 400,
      message:
        'Request body must contain  VIN, make, model, mileage, status and transmission fields.',
    });

  next();
};

module.exports = {
  badUrl,
  verifyId,
  verifyCar,
};
