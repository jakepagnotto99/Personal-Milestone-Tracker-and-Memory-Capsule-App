const express = require('express');
const {
  createMilestone,
  getMilestones,
  getMilestoneById,
  updateMilestone,
  deleteMilestone
} = require('../controllers/milestoneController');

const router = express.Router();

router.post('/', createMilestone);
router.get('/', getMilestones);
router.get('/:id', getMilestoneById);
router.put('/:id', updateMilestone);
router.delete('/:id', deleteMilestone);

module.exports = router;

