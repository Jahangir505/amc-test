import { NextResponse } from "next/server";

import AdminUsers from "@/models/user";
import connect from "@/libs/mongodb";

export const GET = async (request) => {
    try {
      // Connect to MongoDB
      await connect();
  
      // Fetch data from the database (replace this with your actual query)
      const users = await AdminUsers.find();
  
      // Return the fetched data as a JSON response
      return new NextResponse(JSON.stringify(users), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching users:", error);
  
      // Return an error response
      return new NextResponse(
        JSON.stringify({ error: "Error fetching users", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };

export const POST = async (request) => {
    try {
      // Connect to MongoDB
      await connect();
  
      // Extract data from the request body
      const { name, username, email, password } = await request.json();
  
      // Create a new user
      const newUser = new AdminUsers({ name, username, email, password });
      await newUser.save();
  
      // Return a success response
      return new NextResponse(
        JSON.stringify({ message: "User created successfully" }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Error creating user:", error);
  
      // Return an error response
      return new NextResponse(
        JSON.stringify({ error: "Error creating user", details: error }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  };
  