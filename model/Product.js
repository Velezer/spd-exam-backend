const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: false },
    quantity: { type: Number, default: 0 },
    description: { type: String, required: false },
    imgUrl: { type: String },
    videoUrl: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
