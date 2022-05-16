import express from 'express';
import controller from '../controllers/orderItem.controller';

const router = express.Router();

router.route('/').get(controller.getOrderItems).post(controller.addOrderItem);

router.route('/:orderItemId').get(controller.getSingleOrderItem).put(controller.updateOrderItem).delete(controller.deleteOrderItem);

module.exports = router;
