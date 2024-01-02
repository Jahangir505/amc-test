import { NextResponse } from "next/server";

import ProductsSchema from "@/models/products-schema";
import connect from "@/libs/mongodb";

export const GET = async (request, { params }) => {
    const productid = params.productID;
  
    try {
      await connect();
  
      const product = await ProductsSchema.findOne({_id : productid});

  
      return new NextResponse(JSON.stringify(product), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching product:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error fetching product", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  

  export const PUT = async (request,{ params }) => {
    const productid = params.productID;
    try {
      await connect();
      
      const {
        product_name,
        product_brand,
        product_class,
        product_category,
        product_subcategory,
        product_model,
        product_base,
        product_viscosity,
        product_api,
        product_applications,
        product_size,
        product_detail_file,
        product_safety_file,
        product_description,
        product_description_arabic,
        product_image,
        product_sku,
        product_stock_quantity,
      } = await request.json();
  
  
      // Find the existing product by ID
      const existingProduct = await ProductsSchema.findById(productid);
  
      if (!existingProduct) {
        return new NextResponse(
          JSON.stringify({ error: "Product not found" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
  
      // Update the existing product with the new data
      existingProduct.product_name = product_name;
      existingProduct.product_brand = product_brand;
      existingProduct.product_class = product_class;
      existingProduct.product_category = product_category;
      existingProduct.product_subcategory = product_subcategory;
      existingProduct.product_model = product_model;
      existingProduct.product_base = product_base;
      existingProduct.product_viscosity = product_viscosity;
      existingProduct.product_api = product_api;
      existingProduct.product_applications = product_applications;
      existingProduct.product_size = product_size;
      existingProduct.product_detail_file = product_detail_file;
      existingProduct.product_safety_file = product_safety_file;
      existingProduct.product_description = product_description;
      existingProduct.product_description_arabic = product_description_arabic;
      existingProduct.product_image = product_image;
      existingProduct.product_sku = product_sku;
      existingProduct.product_stock_quantity = product_stock_quantity;
  
      await existingProduct.save();
  
      return new NextResponse(
        JSON.stringify({ message: "Product updated successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error updating product:", error);
      return new NextResponse(
        JSON.stringify({ error: "Error updating product", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  

export const DELETE = async (request, { params }) => {
  const productid = params.productID;

  try {
    await connect();
    const result = await ProductsSchema.deleteOne({ _id: productid });
    return new NextResponse(
      JSON.stringify({
        Message: "Product deleted successfully done",
        success: true,
        result,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching Products:", error);

    return new NextResponse(
      JSON.stringify({ error: "Error fetching Products", details: error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
