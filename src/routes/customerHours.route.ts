import express from 'express';
import controller from '../controllers/customerHours.controller';

const router = express.Router();

router.route('/').get(controller.getCustomerHours).post(controller.addCustomerHours);

router.route('/:customerHoursId').get(controller.getSingleCustomerHours).put(controller.updateCustomerHours).delete(controller.deleteCustomerHours);

module.exports = router;
