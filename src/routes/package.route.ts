import express from 'express';
import controller from '../controllers/package.controller';

const router = express.Router();

router.route('/').get(controller.getPackages).post(controller.addPackage);

router.route('/:packageId').get(controller.getSinglePackage).put(controller.updatePackage).delete(controller.deletePackage);

module.exports = router;
