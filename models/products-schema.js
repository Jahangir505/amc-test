import mongoose, { Schema } from "mongoose";

const ProductsSchema = new Schema(
  {
    product_name: {
      type: String,
    },
    product_brand: {
      type: String,
    },
    product_class: {
      type: String,
    },
    product_category: {
      type: String,
    },
    product_subcategory: {
      type: String,
    },
    product_model: {
      type: String,
    },
    product_base: {
      type: String,
    },
    product_viscosity: {
      type: String,
    },
    product_api: {
      type: String,
    },
    product_applications: {
      type: String,
    },
    product_size: {
      type: String,
    },
    product_detail_file: {
      type: String,
    },
    product_safety_file: {
      type: String,
    },
    product_description: {
      type: String,
    },
    product_description_arabic: {
      type: String,
    },
    product_image: {
      type: String, // You may want to store the image URL or use GridFS for storing images in MongoDB.
    },
    product_sku: {
      type: String,
    },
    product_stock_quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Products =
  mongoose.models.Products || mongoose.model("Products", ProductsSchema);

export default Products;
