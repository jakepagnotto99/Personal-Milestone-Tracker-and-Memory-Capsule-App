const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/milestoneTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

mongoose.set('debug', true);

const db = mongoose.connection;

module.exports = db;
