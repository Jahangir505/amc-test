import { NextResponse } from "next/server";
import ProductsCat from "@/models/product-categories-schema";
import connect from "@/libs/mongodb";

export const PUT = async (request, { params }) => {
  const productcatid = params.productCatID;

  try {
    await connect();

    // Find the existing category
    const existingCategory = await ProductsCat.findById(productcatid);

    if (!existingCategory) {
      return new NextResponse(
        JSON.stringify({ error: "Category not found", Success: false }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Extract updated data from the request body
    const { product_cat_name, product_cat_slug, product_cat_parent } = await request.json();

    // Update the category with the new data
    existingCategory.product_cat_name = product_cat_name;
    existingCategory.product_cat_slug = product_cat_slug;
    existingCategory.product_cat_parent = product_cat_parent;

    await existingCategory.save();

    const allCategory = await ProductsCat.find().lean();
    // Find all subcategories with the specified parent category ID
    const subcategories = allCategory.filter((cat) => {
      // Check if product_cat_parent is not empty
      const parentCatId = cat.product_cat_parent ? JSON.parse(cat.product_cat_parent)._id : null;
      return parentCatId === productcatid;
    });

    for (const subcategory of subcategories) {
      // Update existing subcategories
      const subcategoryModel = await ProductsCat.findById(subcategory._id);

      if (subcategoryModel) {
        subcategoryModel.product_cat_parent = JSON.stringify(existingCategory);
        await subcategoryModel.save();
      }
    }

    return new NextResponse(
      JSON.stringify({
        Message: "Category and associated subcategories updated successfully",
        Success: true,
        updatedCategory: existingCategory,
        updatedSubcategories: subcategories,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error Updating Category:", error);

    return new NextResponse(
      JSON.stringify({ error: "Error Updating Category", details: error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};




export const DELETE = async (request, { params }) => {
  const productcatid = params.productCatID;

  try {
    await connect();

    // Find the parent category
    const parentCategory = await ProductsCat.findById(productcatid);
    const allCategory = await ProductsCat.find().lean();

    if (!parentCategory) {
      return new NextResponse(
        JSON.stringify({ error: "Category not found", Success: false }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Find all subcategories with the specified parent category ID
    const allSelectSubCat = allCategory.filter((cat) => {
      // Check if product_cat_parent is not empty
      const parentCatId = cat.product_cat_parent ? JSON.parse(cat.product_cat_parent)._id : null;
      return parentCatId === productcatid;
    });

    // Delete the parent category
    const resultParent = await ProductsCat.deleteOne({ _id: productcatid });

    // Delete associated subcategories
    const resultSubcategories = await ProductsCat.deleteMany({
      _id: { $in: allSelectSubCat.map((subCat) => subCat._id) },
    });

    return new NextResponse(
        JSON.stringify({
          Message: "Category and associated subcategories deleted successfully",
          Success: true,
          resultParent,
          resultSubcategories,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
      
      
  } catch (error) {
    console.error("Error Deleting Category:", error);

    return new NextResponse(
      JSON({ error: "Error Deleting Category", details: error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
