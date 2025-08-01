import mongoose from 'mongoose';

const servicesSchema = new mongoose.Schema({
  title: String,
  description: String,
}, { timestamps: true });

export default mongoose.model('Services', servicesSchema);
