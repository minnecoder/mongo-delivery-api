import express from 'express';
import controller from '../controllers/driverReport.controller';

const router = express.Router();

router.route('/').get(controller.getDriverReports).post(controller.addDriverReport);

router.route('/:driverReportId').get(controller.getSingleDriverReport).put(controller.updateDriverReport).delete(controller.deleteDriverReport);

module.exports = router;
