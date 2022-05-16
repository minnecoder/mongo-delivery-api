import express from 'express';
import controller from '../controllers/address.controller';

const router = express.Router();

router.route('/').get(controller.getAddresses).post(controller.addAddress);

router.route('/:addressId').get(controller.getSingleAddress).put(controller.updateAddress).delete(controller.deleteAddress);

module.exports = router;
