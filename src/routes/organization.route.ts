import express from 'express';
import controller from '../controllers/organization.controller';

const router = express.Router();

router.route('/').get(controller.getOrganizations).post(controller.addOrganization);

router.route('/:organizationId').get(controller.getSingleOrganization).put(controller.updateOrganization).delete(controller.deleteOrganization);

module.exports = router;
