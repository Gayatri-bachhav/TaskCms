import Content from '../models/Content.js';

export const createContent = async (req, res) => {
  const content = new Content(req.body);
  await content.save();
  res.status(201).json(content);
};

export const getContent = async (req, res) => {
  const data = await Content.find({ section: req.params.section });
  res.json(data);
};

export const updateContent = async (req, res) => {
  const updated = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteContent = async (req, res) => {
  await Content.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
