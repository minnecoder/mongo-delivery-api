import express from 'express';
import controller from '../controllers/order.controller';

const router = express.Router();

router.route('/').get(controller.getOrders).post(controller.addOrder);

router.route('/:orderId').get(controller.getSingleOrder).put(controller.updateOrder).delete(controller.deleteOrder);

module.exports = router;
