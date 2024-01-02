import mongoose, {Schema} from "mongoose";
const ProductCatSchema = new Schema(
    {
        product_cat_name: String,
        product_cat_slug: String,
        product_cat_parent: String,
    },
    {
        timestamps: true,
    }
);
const ProductsCat= mongoose.models.ProductsCat || mongoose.model("ProductsCat",ProductCatSchema)
export default ProductsCat;