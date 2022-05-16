import express from 'express';
import controller from '../controllers/product.controller';

const router = express.Router();

router.route('/').get(controller.getProducts).post(controller.addProduct);

router.route('/:productId').get(controller.getSingleProduct).put(controller.updateProduct).delete(controller.deleteProduct);

module.exports = router;
