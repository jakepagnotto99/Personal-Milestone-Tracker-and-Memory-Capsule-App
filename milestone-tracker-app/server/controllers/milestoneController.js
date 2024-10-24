const Milestone = require('../models/Milestone');

// Create Milestone
const createMilestone = async (req, res) => {
  try {
    const milestone = new Milestone(req.body);
    await milestone.save();
    res.status(201).json(milestone);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Milestones
const getMilestones = async (req, res) => {
  try {
    const milestones = await Milestone.find();
    res.json(milestones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Milestone by ID
const getMilestoneById = async (req, res) => {
  try {
    const milestone = await Milestone.findById(req.params.id);
    if (!milestone) return res.status(404).json({ error: 'Milestone not found' });
    res.json(milestone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Milestone
const updateMilestone = async (req, res) => {
  try {
    const milestone = await Milestone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!milestone) return res.status(404).json({ error: 'Milestone not found' });
    res.json(milestone);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Milestone
const deleteMilestone = async (req, res) => {
  try {
    const milestone = await Milestone.findByIdAndDelete(req.params.id);
    if (!milestone) return res.status(404).json({ error: 'Milestone not found' });
    res.json({ message: 'Milestone deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMilestone,
  getMilestones,
  getMilestoneById,
  updateMilestone,
  deleteMilestone
};
