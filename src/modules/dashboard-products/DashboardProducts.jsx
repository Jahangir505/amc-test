"use client";
import React from "react";
import AdminLayout from "@/shared/layouts/admin-layout/AdminLayout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export default function DashboardProducts() {
  const [products, setProducts] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, [deleteMessage]);


  const handleDelete = async(deleteId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete the product?");
  
    if (!userConfirmed) {
      // User clicked "Cancel"
      return;
    }
    try {
      const response = await fetch(`/api/products/${deleteId}`, {
        method: "DELETE",
      });
      if (response.ok){
        setDeleteMessage(deleteId);
        // alert("Product deleted successfully");
        toast.error("Product deleted successfully",{
          theme: "dark",
        });
        
      }
    } catch (error) {
      console.error("Error Deleting Product:", error);
      alert("Error Deleting Product");
    }
  }

  return (
    <AdminLayout>
      <div className="bg-slate-800 rounded border-slate-500 border m-5 p-5 flex gap-4 justify-between items-center align-middle">
        <h1 className="text-2xl font-campton-medium">Products List</h1>
        <Link
          href="/dashboard/products/add"
          className="py-2 px-5 bg-amber-500 rounded text-white font-campton-medium text-xl"
        >
          Add New Product
        </Link>
      </div>
      <div className="bg-slate-800 rounded border-slate-500 border m-5">
        <div className="flex flex-col">
          <div className="flex justify-around">
            <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/12">
              <h2>Image</h2>
            </div>
            <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-3/12">
              <h2>Name</h2>
            </div>
            <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-3/12">
              <h2>Category</h2>
            </div>
            <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-3/12">
              <h2>SubCategory</h2>
            </div>
            <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-2/12">
              <h2>Action</h2>
            </div>
          </div>

          {products &&
            products.map((product) => (
              <div className="flex justify-around" key={product._id}>
                <div className="text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/12">
                  {product.product_image &&
                  <Image src={product.product_image} alt="product image" width={250} height={390} className="w-full h-full max-w-full block"/>}
                </div>
                <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-3/12">
                  <p>{product.product_name}</p>
                </div>
                <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-3/12">
                  <p>{product.product_category && JSON.parse(product.product_category).product_cat_name}</p>
                </div>
                <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-3/12">
                  <p>{product.product_subcategory && JSON.parse(product.product_subcategory).product_cat_name}</p>
                </div>
                <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-2/12 flex gap-3 align-top items-start">
                  <Link href={`/dashboard/products/add?productid=${product._id}`}  className="text-green-500 cursor-pointer">
                    Edit
                  </Link>
                  <button onClick={()=>handleDelete(product._id)} className="text-red-600 cursor-pointer">
                    Delete
                  </button>
                </div>
              </div>
            ))}


        </div>
      </div>
    </AdminLayout>
  );
}
