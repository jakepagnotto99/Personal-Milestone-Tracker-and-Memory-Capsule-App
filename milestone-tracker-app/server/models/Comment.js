const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  milestone_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Milestone', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);
