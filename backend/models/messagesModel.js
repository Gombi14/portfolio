import mongoose from 'mongoose';

const messagesSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  }
});

const Messages = mongoose.model('Messages', messagesSchema, 'messages');

export default Messages;
