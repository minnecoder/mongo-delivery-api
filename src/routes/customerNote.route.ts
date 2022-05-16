import express from 'express';
import controller from '../controllers/customerNote.controller';

const router = express.Router();

router.route('/').get(controller.getCustomerNotes).post(controller.addCustomerNote);

router.route('/:customerNoteId').get(controller.getSingleCustomerNote).put(controller.updateCustomerNote).delete(controller.deleteCustomerNote);

module.exports = router;
