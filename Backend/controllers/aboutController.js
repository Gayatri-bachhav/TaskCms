import About from '../models/About.js';

export const getAbout = async (req, res) => {
  const data = await About.find();
  res.json(data);
};

export const addAbout = async (req, res) => {
  const data = new About(req.body);
  await data.save();
  res.status(201).json(data);
};

export const updateAbout = async (req, res) => {
  const updated = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteAbout = async (req, res) => {
  await About.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
