const router = require('express').Router();

const handlers = require('./handlers');

router.get('/', handlers.getCars);
router.get('/:id', handlers.getCarById);
router.post('/', handlers.createCar);

module.exports = router;
