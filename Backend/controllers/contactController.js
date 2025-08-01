import Contact from '../models/Contact.js';

export const getContact = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};

export const addContact = async (req, res) => {
  const data = new Contact(req.body);
  await data.save();
  res.status(201).json(data);
};

export const updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
