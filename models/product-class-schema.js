import mongoose, {Schema} from "mongoose";
const ProductClassSchema = new Schema(
    {
        product_class_name: String,
    },
    {
        timestamps: true,
    }
);
const ProductClass= mongoose.models.ProductClass || mongoose.model("ProductClass",ProductClassSchema)
export default ProductClass;