const express = require('express');
const cors = require('cors');
const db = require('./db');
// Import routes
const userRoutes = require('./routes/userRoutes');
const milestoneRoutes = require('./routes/milestoneRoutes');
const memoryEntryRoutes = require('./routes/memoryEntryRoutes');
const commentRoutes = require('./routes/commentRoutes');
const reactionRoutes = require('./routes/reactionRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/milestones', milestoneRoutes);
app.use('/api/memoryEntries', memoryEntryRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/reactions', reactionRoutes);


// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
