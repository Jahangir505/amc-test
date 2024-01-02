
import { NextRequest, NextResponse } from "next/server";

import ProductsSchema from "@/models/products-schema"
import connect from "@/libs/mongodb";

export const GET = async (request, { params }) => {
    const { catslug, subcatslug, viscosity } = params;
  
    try {
      await connect();
  
      const allProducts = await ProductsSchema.find().lean();
  
      const productData = allProducts.filter((product) => {
        try {
          const parsedProductCat = JSON.parse(product.product_category);
          const parsedProductSubCat = JSON.parse(product.product_subcategory);
          const parsedProductViscosity = product.product_viscosity;
  
          const normalizedViscosity = parsedProductViscosity.toLowerCase().replace(/\s+/g, "-");
  
          return (
            parsedProductCat.product_cat_slug.toLowerCase() === catslug &&
            parsedProductSubCat.product_cat_slug.toLowerCase() === subcatslug &&
            normalizedViscosity === viscosity.toLowerCase()
          );
        } catch (error) {
          console.error("Error parsing JSON:", error);
          return false;
        }
      });
  
      return new NextResponse(JSON.stringify(productData), {
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
  