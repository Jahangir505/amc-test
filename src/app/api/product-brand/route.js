import { NextResponse } from "next/server";

import ProductBrand from "@/models/product-brand-schema";
import connect from "@/libs/mongodb";

export const GET = async (request) => {
    try {
      await connect();
      const ProductBrands = await ProductBrand.find();
  
      return new NextResponse(JSON.stringify(ProductBrands), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching Brand:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error fetching Brand", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };

export const POST = async (request) => {
    try {
      await connect();
      const { product_brand_name} = await request.json();
      const newProductBrands = new ProductBrand({ product_brand_name});
      await newProductBrands.save();
      return new NextResponse(
        JSON.stringify({ message: "Brand created successfully" }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error creating Brand:", error);
      return new NextResponse(
        JSON.stringify({ error: "Error creating Brand", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  



  