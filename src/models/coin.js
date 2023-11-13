

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://crosiderm:crosider123@cluster0.5ovqlka.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema, model } = require('mongoose');

const coinSchema = new Schema({
  userID: { type: String, required: true },
  coins: { type: Number, default: 0 },
});

module.exports = model('Coin', coinSchema);