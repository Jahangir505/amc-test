import { NextResponse } from "next/server";
import ProductClass from "@/models/product-class-schema";
import connect from "@/libs/mongodb";

export const PUT = async (request, { params }) => {
    const productclassdid = params.productClassID;
  
    try {
      await connect();
  
      // Find the existing category
      const existingClass = await ProductClass.findById(productclassdid);
  
      if (!existingClass) {
        return new NextResponse(
          JSON.stringify({ error: "Class not found", Success: false }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
  
      // Extract updated data from the request body
      const { product_class_name} = await request.json();
  
      // Update the category with the new data
      existingClass.product_class_name = product_class_name;
  
      await existingClass.save();
  
      return new NextResponse(
        JSON.stringify({
          Message: "Class updated successfully",
          Success: true,
          updatedBrand: existingClass,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error Updating Class:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error Updating Class", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  
  


export const DELETE = async (request, { params }) => {
  const productclassid = params.productClassID;

  try {
    await connect();
    const classes = await ProductClass.findById(productclassid);

    if (!classes) {
      return new NextResponse(
        JSON.stringify({ error: "Class not found", Success: false }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Delete the parent Class
    const resultClass = await ProductClass.deleteOne({ _id: productclassid });

    return new NextResponse(
        JSON.stringify({
          Message: "Class deleted successfully",
          Success: true,
          resultClass,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
      
      
  } catch (error) {
    console.error("Error Deleting Class:", error);

    return new NextResponse(
      JSON({ error: "Error Deleting Class", details: error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
