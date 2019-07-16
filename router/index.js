const router = require('express').Router();

const handlers = require('./handlers');

router.get('/', handlers.getCars);
router.get('/:id', handlers.getCarById);
router.post('/', handlers.createCar);
router.put('/:id', handlers.updateCar);
router.delete('/:id', handlers.removeCar);

module.exports = router;
