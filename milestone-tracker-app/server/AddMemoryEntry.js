import React, { useState } from 'react';
import axios from 'axios';

const AddMemoryEntry = ({ milestoneId, onAddMemory }) => {
  const [textEntry, setTextEntry] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const newMemory = { text_entry: textEntry, media_url: mediaUrl, milestone_id: milestoneId };
      const res = await axios.post('/api/memoryEntries', newMemory, config);
      onAddMemory(res.data);
      setTextEntry('');
      setMediaUrl('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={textEntry}
        onChange={(e) => setTextEntry(e.target.value)}
        placeholder="Add a memory entry"
        required
      />
      <input
        type="text"
        value={mediaUrl}
        onChange={(e) => setMediaUrl(e.target.value)}
        placeholder="Media URL"
      />
      <button type="submit">Add Memory</button>
    </form>
  );
};

export default AddMemoryEntry;
