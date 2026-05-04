const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  longDescription: { type: String },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  colors: [{ type: String }],
  sizes: [{ type: Number }],
  materials: [{ type: String }],
  specs: { type: Map, of: String },
  stock: { type: Number, default: 10 },
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('Product', productSchema);
