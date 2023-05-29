const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  listOfImages: {
    type: [String], // list of images url format
    default: [],
  },
  options: {
    type: [String],
    default: [],
  },
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  _id: {
    type: String,
    default: '',
  },
  productId: {
    type: String,
    default: '',
  },
  quantity: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5], // Only allows the specified values
  },
  brandName: {
    type: String,
    default: '',
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
