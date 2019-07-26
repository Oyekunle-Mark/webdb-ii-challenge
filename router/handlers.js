const Cars = require('../model');

const getCars = (req, res) => {
  Cars.get()
    .then(cars =>
      res.status(200).json({
        status: 200,
        message: cars,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Unable to get cars.',
      }),
    );
};

const getCarById = (req, res) => {
  const { id } = req.params;

  Cars.get(id)
    .then(car =>
      res.status(200).json({
        status: 200,
        message: car,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Unable to get car.',
      }),
    );
};

const createCar = (req, res) => {
  const { VIN, make, model, mileage, status, transmission } = req.body;

  Cars.create({ VIN, make, model, mileage, status, transmission })
    .then(car =>
      res.status(201).json({
        status: 201,
        message: {
          id: car[0],
          VIN,
          make,
          model,
          mileage,
          status,
          transmission,
        },
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Unable to register car.',
      }),
    );
};

const updateCar = (req, res) => {
  const { id } = req.params;
  const { VIN, make, model, mileage, status, transmission } = req.body;

  Cars.update(id, { VIN, make, model, mileage, status, transmission })
    .then(car =>
      res.status(200).json({
        status: 200,
        message: car,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Error updating record',
      }),
    );
};

const removeCar = (req, res) => {
  const { id } = req.params;

  Cars.remove(id)
    .then(num =>
      res.status(200).json({
        status: 200,
        message: `${num} car deleted`,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Error deleting record',
      }),
    );
};

module.exports = {
  getCars,
  getCarById,
  createCar,
  updateCar,
  removeCar,
};
