import { NextResponse } from "next/server";
import ProductBrand from "@/models/product-brand-schema";
import connect from "@/libs/mongodb";

export const PUT = async (request, { params }) => {
    const productbrandid = params.productBrandID;
  
    try {
      await connect();
  
      // Find the existing category
      const existingBrand = await ProductBrand.findById(productbrandid);
  
      if (!existingBrand) {
        return new NextResponse(
          JSON.stringify({ error: "Brand not found", Success: false }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
  
      // Extract updated data from the request body
      const { product_brand_name} = await request.json();
  
      // Update the category with the new data
      existingBrand.product_brand_name = product_brand_name;
  
      await existingBrand.save();
  
      return new NextResponse(
        JSON.stringify({
          Message: "Brand updated successfully",
          Success: true,
          updatedBrand: existingBrand,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error Updating Brand:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error Updating Brand", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  
  


export const DELETE = async (request, { params }) => {
  const productbrandid = params.productBrandID;

  try {
    await connect();
    const brands = await ProductBrand.findById(productbrandid);

    if (!brands) {
      return new NextResponse(
        JSON.stringify({ error: "Brand not found", Success: false }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Delete the parent brand
    const resultBrand = await ProductBrand.deleteOne({ _id: productbrandid });

    return new NextResponse(
        JSON.stringify({
          Message: "Brand deleted successfully",
          Success: true,
          resultBrand,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
      
      
  } catch (error) {
    console.error("Error Deleting Brand:", error);

    return new NextResponse(
      JSON({ error: "Error Deleting Brand", details: error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
