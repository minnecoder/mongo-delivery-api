import express from 'express';
import controller from '../controllers/stop.controller';

const router = express.Router();

router.route('/').get(controller.getStops).post(controller.addStop);

router.route('/:stopId').get(controller.getSingleStop).put(controller.updateStop).delete(controller.deleteStop);

module.exports = router;
