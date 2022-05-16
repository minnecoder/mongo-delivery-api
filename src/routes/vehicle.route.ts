import express from 'express';
import controller from '../controllers/vehicle.controller';

const router = express.Router();

router.route('/').get(controller.getVehicles).post(controller.addVehicle);

router.route('/:vehicleId').get(controller.getSingleVehicle).put(controller.updateVehicle).delete(controller.deleteVehicle);

module.exports = router;
