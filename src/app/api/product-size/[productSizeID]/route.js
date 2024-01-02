import { NextResponse } from "next/server";
import ProductSize from "@/models/product-size-schema";
import connect from "@/libs/mongodb";

export const PUT = async (request, { params }) => {
    const productsizeid = params.productSizeID;
  
    try {
      await connect();
  
      // Find the existing category
      const existingSize = await ProductSize.findById(productsizeid);
  
      if (!existingSize) {
        return new NextResponse(
          JSON.stringify({ error: "Size not found", Success: false }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
  
      // Extract updated data from the request body
      const { product_size_name} = await request.json();
  
      // Update the category with the new data
      existingSize.product_size_name = product_size_name;
  
      await existingSize.save();
  
      return new NextResponse(
        JSON.stringify({
          Message: "Size updated successfully",
          Success: true,
          updatedSize: existingSize,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error Updating Size:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error Updating Size", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  
  


export const DELETE = async (request, { params }) => {
  const productsizeid = params.productSizeID;

  try {
    await connect();
    const sizes = await ProductSize.findById(productsizeid);

    if (!sizes) {
      return new NextResponse(
        JSON.stringify({ error: "Size not found", Success: false }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Delete the parent Size
    const resultSize = await ProductSize.deleteOne({ _id: productsizeid });

    return new NextResponse(
        JSON.stringify({
          Message: "Size deleted successfully",
          Success: true,
          resultSize,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
      
      
  } catch (error) {
    console.error("Error Deleting Size:", error);

    return new NextResponse(
      JSON({ error: "Error Deleting Size", details: error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
