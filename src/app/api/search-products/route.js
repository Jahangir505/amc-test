import { NextResponse } from "next/server";

import ProductsSchema from "@/models/products-schema";
import connect from "@/libs/mongodb";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    try {
      await connect();
      const Products = await ProductsSchema.find();

      const filteredProducts = Products.filter((product) => {
        return product.product_name.toLowerCase().includes(query.toLowerCase()) || product.product_brand.toLowerCase().includes(query.toLowerCase()) || product.product_class.toLowerCase().includes(query.toLowerCase()) || product.product_model.toLowerCase().includes(query.toLowerCase()) || product.product_base.toLowerCase().includes(query.toLowerCase()) || product.product_viscosity.toLowerCase().includes(query.toLowerCase()) || product.product_sku.toLowerCase().includes(query.toLowerCase())
    })
  
      return new NextResponse(JSON.stringify(filteredProducts), {
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