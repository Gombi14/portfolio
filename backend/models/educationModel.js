import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Education = mongoose.model('Education', educationSchema, 'education');

export default Education;
