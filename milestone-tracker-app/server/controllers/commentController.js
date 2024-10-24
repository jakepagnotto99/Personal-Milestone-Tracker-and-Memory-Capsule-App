const mongoose = require('mongoose');
const Comment = require('../models/Comment');

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/milestoneTracker')
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

mongoose.set('debug', true);

// Create Comment
const createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Comments
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Comment by ID
const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Comment
const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Comment
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment
};
