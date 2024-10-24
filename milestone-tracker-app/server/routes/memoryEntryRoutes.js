const express = require('express');
const {
  createMemoryEntry,
  getMemoryEntries,
  getMemoryEntryById,
  updateMemoryEntry,
  deleteMemoryEntry
} = require('../controllers/memoryEntryController');

const router = express.Router();

// Define Memory Entry Routes
router.post('/', createMemoryEntry);       // Create Memory Entry
router.get('/', getMemoryEntries);        // Get All Memory Entries
router.get('/:id', getMemoryEntryById);  // Get Memory Entry by ID
router.put('/:id', updateMemoryEntry);  // Update Memory Entry
router.delete('/:id', deleteMemoryEntry); // Delete Memory Entry

module.exports = router;
