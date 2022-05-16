import express from 'express';
import controller from '../controllers/driver.controller';

const router = express.Router();

router.route('/').get(controller.getDrivers).post(controller.addDriver);

router.route('/:driverId').get(controller.getSingleDriver).put(controller.updateDriver).delete(controller.deleteDriver);

module.exports = router;
