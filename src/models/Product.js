import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  price: Number,
  imageUrl: String,
});

export default new mongoose.model('Product', ProductSchema);
