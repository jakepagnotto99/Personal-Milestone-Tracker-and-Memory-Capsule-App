const express = require('express');
const {
  createReaction,
  getReactions,
  getReactionById,
  updateReaction,
  deleteReaction
} = require('../controllers/reactionController');

const router = express.Router();

// Define Reaction Routes
router.post('/', createReaction);          // Create Reaction
router.get('/', getReactions);             // Get All Reactions
router.get('/:id', getReactionById);       // Get Reaction by ID
router.put('/:id', updateReaction);        // Update Reaction
router.delete('/:id', deleteReaction);     // Delete Reaction

module.exports = router;

