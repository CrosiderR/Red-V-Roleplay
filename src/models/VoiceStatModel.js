const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://crosiderm:crosider123@cluster0.5ovqlka.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const VoiceStatSchema = mongoose.Schema({
  userId: { type: String, required: true },
  duration: { type: Number, default: 0 },
});

module.exports = model('VoiceStatModel', VoiceStatSchema);
