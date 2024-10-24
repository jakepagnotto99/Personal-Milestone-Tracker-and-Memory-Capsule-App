const express = require('express');
const {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment
} = require('../controllers/commentController');

const router = express.Router();

// Define Comment Routes
router.post('/', createComment);           // Create Comment
router.get('/', getComments);              // Get All Comments
router.get('/:id', getCommentById);        // Get Comment by ID
router.put('/:id', updateComment);         // Update Comment
router.delete('/:id', deleteComment);      // Delete Comment

module.exports = router;
