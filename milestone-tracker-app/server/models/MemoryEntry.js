const mongoose = require('mongoose');

const MemoryEntrySchema = new mongoose.Schema({
  text_entry: String,
  media_url: String,
  milestone_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Milestone', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('MemoryEntry', MemoryEntrySchema);
