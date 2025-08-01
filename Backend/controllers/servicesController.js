import Services from '../models/Services.js';

export const getServices = async (req, res) => {
  const data = await Services.find();
  res.json(data);
};

export const addServices = async (req, res) => {
  const data = new Services(req.body);
  await data.save();
  res.status(201).json(data);
};

export const updateServices = async (req, res) => {
  const updated = await Services.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteServices = async (req, res) => {
  await Services.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
