import { NextResponse } from "next/server";

import ProductsCat from "@/models/product-categories-schema";
import connect from "@/libs/mongodb";

export const GET = async (request) => {
    try {
      await connect();
      const productsCats = await ProductsCat.find();
  
      return new NextResponse(JSON.stringify(productsCats), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching Category:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error fetching Category", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };

  export const POST = async (request) => {
    try {
      await connect();
      const { product_cat_name, product_cat_slug, product_cat_parent } = await request.json();
      const newProductsCats = new ProductsCat({ product_cat_name, product_cat_slug, product_cat_parent});
      await newProductsCats.save();
      return new NextResponse(
        JSON.stringify({ message: "Category created successfully" }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error creating Category:", error);
      return new NextResponse(
        JSON.stringify({ error: "Error creating Category", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  