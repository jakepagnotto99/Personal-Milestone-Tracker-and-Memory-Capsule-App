const mongoose = require('mongoose');

const MilestoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['In Progress', 'Completed'], default: 'In Progress' },
  progress: { type: Number, default: 0 },
  due_date: { type: Date },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Milestone', MilestoneSchema);

