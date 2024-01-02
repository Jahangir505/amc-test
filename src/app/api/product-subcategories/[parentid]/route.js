// pages/api/subcategories/[parentid].js
import { NextRequest, NextResponse } from "next/server";

import ProductsCat from "@/models/product-categories-schema";
import connect from "@/libs/mongodb";

export const GET = async (request, { params }) => {
    const { parentid } = params;

  try {
    await connect();

    // Fetch subcategories based on the parent category's ID
    const allCategories = await ProductsCat.find().lean(); // Use lean to get plain JavaScript objects
    if(params){
    const subcategories = allCategories.filter(category => {
      try {
        const parsedParent = JSON.parse(category.product_cat_parent);
        return parsedParent._id === parentid;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return false; // Ignore this category if parsing fails
      }
    });
    

    return new NextResponse(JSON.stringify(subcategories), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  } catch (error) {
    console.error("Error fetching Subcategories:", error);

    return new NextResponse(
      JSON.stringify({ error: "Error fetching Subcategories", details: error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
