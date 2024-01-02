import { NextResponse } from "next/server";

import ProductsSchema from "@/models/products-schema";
import connect from "@/libs/mongodb";

export const GET = async (request) => {
    try {
      await connect();
      const Products = await ProductsSchema.find();
  
      return new NextResponse(JSON.stringify(Products), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching Products:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error fetching Products", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };

export const POST = async (request) => {
    try {
      await connect();
      const {product_name, product_brand, product_class, product_category, product_subcategory, product_model, product_base, product_viscosity, product_api, product_applications, product_size, product_detail_file, product_safety_file, product_description, product_description_arabic ,product_image, product_sku, product_stock_quantity } = await request.json();
      const newProducts = new ProductsSchema({product_name, product_brand, product_class, product_category, product_subcategory, product_model, product_base, product_viscosity, product_api, product_applications, product_size, product_detail_file, product_safety_file, product_description, product_description_arabic ,product_image, product_sku, product_stock_quantity});
      await newProducts.save();
      return new NextResponse(
        JSON.stringify({ message: "Products created successfully" }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error creating Products:", error);
      return new NextResponse(
        JSON.stringify({ error: "Error creating Products", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  



  