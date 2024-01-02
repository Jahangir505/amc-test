import { NextResponse } from "next/server";

import ProductSize from "@/models/product-size-schema";
import connect from "@/libs/mongodb";

export const GET = async (request) => {
    try {
      await connect();
      const ProductSizes = await ProductSize.find();
  
      return new NextResponse(JSON.stringify(ProductSizes), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching Size:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error fetching Size", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };

export const POST = async (request) => {
    try {
      await connect();
      const { product_size_name} = await request.json();
      const newProductSizes = new ProductSize({ product_size_name});
      await newProductSizes.save();
      return new NextResponse(
        JSON.stringify({ message: "Size created successfully" }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error creating Size:", error);
      return new NextResponse(
        JSON.stringify({ error: "Error creating Size", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  



  