const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['Like', 'Favorite'], required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  milestone_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Milestone', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Reaction', ReactionSchema);
