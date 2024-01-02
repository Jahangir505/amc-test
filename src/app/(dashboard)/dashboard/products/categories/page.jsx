"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "@/shared/layouts/admin-layout/AdminLayout";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    product_cat_name: "",
    product_cat_slug: "",
    product_cat_parent: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteMessage,setDeleteMessage]=useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the form data
    setFormData({
      ...formData,
      [name]: value,

      // If the changed field is "product_cat_name", update the "product_cat_slug"
      ...(name === "product_cat_name" && {
        product_cat_slug: value.toLowerCase().replace(/\s+/g, "-"),
      }),
    });
  };

  // console.log(formData);


  // Function to handle edit button click
  const handleEdit = (editId) => {
    setIsEditMode(true);
    setEditCategoryId(editId);
  };


// Update submitHandler to handle both creation and updating
const submitHandler = async (e) => {
  e.preventDefault();

  try {
    let apiUrl = "/api/product-categories";

    if (isEditMode && editCategoryId) {
      apiUrl = `/api/product-categories/${editCategoryId}`;
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
        product_cat_name: "",
        product_cat_slug: "",
        product_cat_parent: "",
      });
      if (isEditMode) {
        setIsEditMode(false);
        setIsSubmit(true);
        setEditCategoryId(null);
        console.log("Category updated successfully");
        setSuccessMessage("Category updated successfully");
        toast.success("Category updated successfully",{theme: "dark"});
      } else {
        console.log("Category created successfully");
        setSuccessMessage("Category created successfully");
        setIsSubmit(true);
        toast.success("Category created successfully",{theme: "dark"});
      }
    } else {
      console.error("Error:", response.statusText);
      setErrorMessage(`Error: ${isEditMode ? "Updating" : "Creating"} Category`);
    }
  } catch (error) {
    console.error("Error:", error);
    setErrorMessage(`Error: ${isEditMode ? "Updating" : "Creating"} Category`);
  }
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/product-categories", { cache: "no-store" });
      const data = await response.json();
      setCategories(data);
      setIsSubmit(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Check if in edit mode and set the form data
  if (isEditMode && editCategoryId) {
    const categoryToEdit = categories.find((category) => category._id === editCategoryId);
    if (categoryToEdit) {
      // Check if formData needs to be updated to avoid infinite loop
      if (
        formData.product_cat_name !== categoryToEdit.product_cat_name ||
        formData.product_cat_slug !== categoryToEdit.product_cat_slug ||
        formData.product_cat_parent !== categoryToEdit.product_cat_parent
      ) {
        setFormData({
          product_cat_name: categoryToEdit.product_cat_name,
          product_cat_slug: categoryToEdit.product_cat_slug,
          product_cat_parent: categoryToEdit.product_cat_parent,
        });
      }
    }
  } else {
    // Not in edit mode, fetch data normally
    fetchData();
  }
}, [deleteMessage, isEditMode, editCategoryId, isSubmit]);



  const handleDelete = async (deleteId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete the category");
  
    if (!userConfirmed) {
      // User clicked "Cancel"
      return;
    }
  
    try {
      const response = await fetch(`/api/product-categories/${deleteId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        setDeleteMessage(deleteId);
        // alert("Category deleted successfully");
        toast.error("Category deleted successfully",{theme:"dark"});
      }
    } catch (error) {
      console.error("Error Deleting Category:", error);
      alert("Error Deleting Category" + error);
    }
  };
  

  return (
    <AdminLayout>
      <section className="m-5 text-white text-lg font-campton-normal">
        <div className="flex gap-5">
          <div className="basis-1/3 ">
            <div className="bg-slate-800 rounded  p-7">
              <h1 className="text-2xl font-campton-semibold mb-5">
                Add A New Category
              </h1>
              <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="product_cat_name">Category Name</label>
                  <input
                    type="text"
                    className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30 px-4"
                    id="product_cat_name"
                    name="product_cat_name"
                    required
                    placeholder="Category Name"
                    onChange={handleInputChange}
                    value={formData.product_cat_name}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="product_cat_slug">Slug</label>
                  <input
                    type="text"
                    className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30 px-4"
                    id="product_cat_slug"
                    name="product_cat_slug"
                    required
                    placeholder="Slug"
                    onChange={handleInputChange}
                    value={formData.product_cat_slug}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="product_cat_parent">Parent Category</label>
                  <select
                    className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30 text-gray-400 px-4"
                    id="product_cat_parent"
                    name="product_cat_parent"
                    onChange={handleInputChange}
                    value={formData.product_cat_parent}
                  >
                    <option value="">Choose Parent Category</option>
                    {categories &&
                      categories.map((category) => (
                        <option
                          key={category._id}
                          value={JSON.stringify(category)}
                        >
                          {category.product_cat_name}
                        </option>
                      ))}
                  </select>
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
                    Add New Category
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="basis-2/3 bg-slate-800 rounded border-slate-500 border">
            <div className="flex flex-col">
              <div className="flex justify-around">
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/3">
                  <h2>Category</h2>
                </div>
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/3">
                  <h2>Slug</h2>
                </div>
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/3">
                  <h2>Parent</h2>
                </div>
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/3">
                  <h2>Action</h2>
                </div>
              </div>

              {/* Render categories in the component */}
              {categories &&
                categories.map((category) => {
                  // Find the parent category
                  return (
                    <div className="flex" key={category._id}>
                      <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/4">
                        <p>{category.product_cat_name}</p>
                      </div>
                      <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/4">
                        <p>{category.product_cat_slug}</p>
                      </div>
                      <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/4">
                        <p>
                          {category.product_cat_parent &&
                            JSON.parse(category.product_cat_parent)
                              .product_cat_name}
                        </p>
                      </div>
                      <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/4 flex gap-3">
                        <button onClick={() => handleEdit(category._id)} className="text-green-500 cursor-pointer">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(category._id)}
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
