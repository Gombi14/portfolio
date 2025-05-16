import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  empresa: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model('Experience', experienceSchema, 'experience');

export default Experience;
