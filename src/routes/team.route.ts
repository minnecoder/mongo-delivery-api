import express from 'express';
import controller from '../controllers/team.controller';

const router = express.Router();

router.route('/').get(controller.getTeams).post(controller.addTeam);

router.route('/:teamId').get(controller.getSingleTeam).put(controller.updateTeam).delete(controller.deleteTeam);

module.exports = router;
