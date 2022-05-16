import express from 'express';
import controller from '../controllers/hub.controller';

const router = express.Router();

router.route('/').get(controller.getHubs).post(controller.addHub);

router.route('/:hubId').get(controller.getSingleHub).put(controller.updateHub).delete(controller.deleteHub);

module.exports = router;
