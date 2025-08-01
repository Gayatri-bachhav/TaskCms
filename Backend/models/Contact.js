import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  title: String,
  description: String,
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
