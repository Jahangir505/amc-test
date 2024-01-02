import mongoose, {Schema} from "mongoose";
const ProductBrandSchema = new Schema(
    {
        product_brand_name: String,
    },
    {
        timestamps: true,
    }
);
const ProductBrand= mongoose.models.ProductBrand || mongoose.model("ProductBrand",ProductBrandSchema)
export default ProductBrand;