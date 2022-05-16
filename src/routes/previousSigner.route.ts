import express from 'express';
import controller from '../controllers/previousSigner.controller';

const router = express.Router();

router.route('/').get(controller.getPreviousSigners).post(controller.addPreviousSigner);

router.route('/:previousSignerId').get(controller.getSinglePreviousSigner).put(controller.updatePreviousSigner).delete(controller.deletePreviousSigner);

module.exports = router;
