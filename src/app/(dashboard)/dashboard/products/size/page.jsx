"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "@/shared/layouts/admin-layout/AdminLayout";
import { toast } from 'react-toastify';

export default function Page() {
  const [formData, setFormData] = useState({
    product_size_name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteMessage,setDeleteMessage]=useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editSizeId, setEditSizeId] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Function to handle edit button click
  const handleEdit = (editId) => {
    setIsEditMode(true);
    setEditSizeId(editId);
  };


// Update submitHandler to handle both creation and updating
const submitHandler = async (e) => {
  e.preventDefault();

  try {
    let apiUrl = "/api/product-size";

    if (isEditMode && editSizeId) {
      apiUrl = `/api/product-size/${editSizeId}`;
    }

    const response = await fetch(apiUrl, {
      method: isEditMode ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({
        product_size_name: "",
      });
      if (isEditMode) {
        setIsEditMode(false);
        setIsSubmit(true);
        setEditSizeId(null);
        console.log("Size updated successfully");
        setSuccessMessage("Size updated successfully");
        toast.success("Size updated successfully",{theme:"dark"});
      } else {
        console.log("Size created successfully");
        setSuccessMessage("Size created successfully");
        setIsSubmit(true);
        toast.success("Size created successfully",{theme:"dark"});
      }
    } else {
      console.error("Error:", response.statusText);
      setErrorMessage(`Error: ${isEditMode ? "Updating" : "Creating"} Size`);
    }
  } catch (error) {
    console.error("Error:", error);
    setErrorMessage(`Error: ${isEditMode ? "Updating" : "Creating"} Size`);
  }
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/product-size", { cache: "no-store" });
      const data = await response.json();
      setSizes(data);
      setIsSubmit(false);
    } catch (error) {
      console.error("Error fetching size:", error);
    }
  };

  // Check if in edit mode and set the form data
  if (isEditMode && editSizeId) {
    const sizeToEdit = sizes.find((size) => size._id === editSizeId);
    if (sizeToEdit) {
      // Check if formData needs to be updated to avoid infinite loop
      if (formData.product_size_name !== sizeToEdit.product_size_name) {
        setFormData({
          product_size_name: sizeToEdit.product_size_name,
        });
      }
    }
  } else {
    // Not in edit mode, fetch data normally
    fetchData();
  }
}, [deleteMessage, isEditMode, editSizeId, isSubmit]);



  const handleDelete = async (deleteId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete the size");
  
    if (!userConfirmed) {
      // User clicked "Cancel"
      return;
    }
  
    try {
      const response = await fetch(`/api/product-size/${deleteId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        setDeleteMessage(deleteId);
        toast.error("Size Deleted successfully",{theme:"dark"});
        
      }
    } catch (error) {
      console.error("Error Deleting size:", error);
      alert("Error Deleting size" + error);
    }
  };
  

  return (
    <AdminLayout>
      <section className="m-5 text-white text-lg font-campton-normal">
        <div className="flex gap-5">
          <div className="basis-1/3 ">
            <div className="bg-slate-800 rounded  p-7">
              <h1 className="text-2xl font-campton-semibold mb-5">
              {isEditMode? "Update Size": "Add New Size"}
              </h1>
              <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="product_size_name">Size Name</label>
                  <input
                    type="text"
                    className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30 px-4"
                    id="product_size_name"
                    name="product_size_name"
                    required
                    placeholder="Size Name"
                    onChange={handleInputChange}
                    value={formData.product_size_name}
                  />
                </div>
                {errorMessage && (
                  <span className="text-white bg-red-500 text-lg font-campton-normal w-full text-center p-1">
                    {errorMessage}
                  </span>
                )}
                {successMessage && (
                  <span className="text-white bg-green-600 text-lg font-campton-normal w-full text-center p-1">
                    {successMessage}
                  </span>
                )}
                <button
                  type="submit"
                  className="p-1 mt-4 rounded-sm bg-amber-500 shadow border border-opacity-25 border-white flex-col justify-center items-center gap-3 inline-flex"
                >
                  <span className="text-neutral-900 text-xl font-medium font-campton-medium tracking-wider">
                    {isEditMode? "Update Size": "Add New Size"}
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="basis-2/3 bg-slate-800 rounded border-slate-500 border">
            <div className="flex flex-col">
              <div className="flex justify-around">
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-3/4">
                  <h2>Size Name</h2>
                </div>
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/4">
                  <h2>Action</h2>
                </div>
              </div>

              {/* Render Sizes in the component */}
              {sizes &&
                sizes.map((size) => {
                  return (
                    <div className="flex" key={size._id}>
                      <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-3/4">
                        <p>{size.product_size_name}</p>
                      </div>
                      <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/4 flex gap-3">
                        <button onClick={() => handleEdit(size._id)} className="text-green-500 cursor-pointer">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(size._id)}
                          className="text-red-600 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
