import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  section: { type: String, required: true, enum: ['home', 'about', 'services', 'contact'] },
  title: String,
  
  description: String,
}, { timestamps: true });

export default mongoose.model("Content", contentSchema);
