import { NextResponse } from "next/server";

import ProductClass from "@/models/product-class-schema";
import connect from "@/libs/mongodb";

export const GET = async (request) => {
    try {
      await connect();
      const Productclasses = await ProductClass.find();
  
      return new NextResponse(JSON.stringify(Productclasses), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching Class:", error);
  
      return new NextResponse(
        JSON.stringify({ error: "Error fetching Class", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };

export const POST = async (request) => {
    try {
      await connect();
      const { product_class_name} = await request.json();
      const newProductClasses = new ProductClass({ product_class_name});
      await newProductClasses.save();
      return new NextResponse(
        JSON.stringify({ message: "Class created successfully" }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error creating Class:", error);
      return new NextResponse(
        JSON.stringify({ error: "Error creating Class", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  



  