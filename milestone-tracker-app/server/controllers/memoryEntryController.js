const mongoose = require('mongoose');
const MemoryEntry = require('../models/MemoryEntry');

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

// Create Memory Entry
const createMemoryEntry = async (req, res) => {
  try {
    const memoryEntry = new MemoryEntry(req.body);
    await memoryEntry.save();
    res.status(201).json(memoryEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Memory Entries
const getMemoryEntries = async (req, res) => {
  try {
    const memoryEntries = await MemoryEntry.find();
    res.json(memoryEntries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Memory Entry by ID
const getMemoryEntryById = async (req, res) => {
  try {
    const memoryEntry = await MemoryEntry.findById(req.params.id);
    if (!memoryEntry) return res.status(404).json({ error: 'Memory Entry not found' });
    res.json(memoryEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Memory Entry
const updateMemoryEntry = async (req, res) => {
  try {
    const memoryEntry = await MemoryEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!memoryEntry) return res.status(404).json({ error: 'Memory Entry not found' });
    res.json(memoryEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Memory Entry
const deleteMemoryEntry = async (req, res) => {
  try {
    const memoryEntry = await MemoryEntry.findByIdAndDelete(req.params.id);
    if (!memoryEntry) return res.status(404).json({ error: 'Memory Entry not found' });
    res.json({ message: 'Memory Entry deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMemoryEntry,
  getMemoryEntries,
  getMemoryEntryById,
  updateMemoryEntry,
  deleteMemoryEntry
};
