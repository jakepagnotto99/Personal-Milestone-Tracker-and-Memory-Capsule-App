const mongoose = require('mongoose');
const Reaction = require('../models/Reaction');

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

// Create Reaction
const createReaction = async (req, res) => {
  try {
    const reaction = new Reaction(req.body);
    await reaction.save();
    res.status(201).json(reaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Reactions
const getReactions = async (req, res) => {
  try {
    const reactions = await Reaction.find();
    res.json(reactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Reaction by ID
const getReactionById = async (req, res) => {
  try {
    const reaction = await Reaction.findById(req.params.id);
    if (!reaction) return res.status(404).json({ error: 'Reaction not found' });
    res.json(reaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Reaction
const updateReaction = async (req, res) => {
  try {
    const reaction = await Reaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reaction) return res.status(404).json({ error: 'Reaction not found' });
    res.json(reaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Reaction
const deleteReaction = async (req, res) => {
  try {
    const reaction = await Reaction.findByIdAndDelete(req.params.id);
    if (!reaction) return res.status(404).json({ error: 'Reaction not found' });
    res.json({ message: 'Reaction deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReaction,
  getReactions,
  getReactionById,
  updateReaction,
  deleteReaction
};
