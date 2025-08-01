

import Home from '../models/Home.js';

// Create
export const addHome = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const data = new Home({ title, description, image });
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
export const updateHome = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const updateFields = { title, description };
    if (image) updateFields.image = image;

    const updated = await Home.findByIdAndUpdate(req.params.id, updateFields, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All
export const getHome = async (req, res) => {
  const data = await Home.find();
  res.json(data);
};

// Delete
export const deleteHome = async (req, res) => {
  await Home.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
