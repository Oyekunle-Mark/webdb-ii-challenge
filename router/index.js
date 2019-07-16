const router = require('express').Router();

const handlers = require('./handlers');
const middleware = require('../middleware');

router.get('/', handlers.getCars);
router.get('/:id', middleware.verifyId, handlers.getCarById);
router.post('/', middleware.verifyCar, handlers.createCar);
router.put(
  '/:id',
  middleware.verifyId,
  middleware.verifyCar,
  handlers.updateCar,
);
router.delete('/:id', middleware.verifyId, handlers.removeCar);

module.exports = router;
