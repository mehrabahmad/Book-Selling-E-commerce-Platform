const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  auther: {
    type: String,
    required: true
  },
  ISBN: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
