import express from 'express';
import controller from '../controllers/customer.controller';

const router = express.Router();

router.route('/').get(controller.getCustomers).post(controller.addCustomer);

router.route('/:customerId').get(controller.getSingleCustomer).put(controller.updateCustomer).delete(controller.deleteCustomer);

module.exports = router;
