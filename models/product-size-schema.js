import mongoose, {Schema} from "mongoose";
const ProductSizeSchema = new Schema(
    {
        product_size_name: String,
    },
    {
        timestamps: true,
    }
);
const ProductSize= mongoose.models.ProductSize || mongoose.model("ProductSize",ProductSizeSchema)
export default ProductSize;