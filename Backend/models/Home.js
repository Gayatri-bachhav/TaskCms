import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema({
  title: String,
  description: String,

}, { timestamps: true });

export default mongoose.model('Home', homeSchema);
