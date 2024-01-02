"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "@/shared/layouts/admin-layout/AdminLayout";
import { toast } from 'react-toastify';

export default function Page() {
  const [formData, setFormData] = useState({
    product_class_name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editClassId, setEditClassId] = useState(null);
  const [classes, setClasses] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  // Function to handle edit button click
  const handleEdit = (editId) => {
    setIsEditMode(true);
    setEditClassId(editId);
  };

  // Update submitHandler to handle both creation and updating
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let apiUrl = "/api/product-class";

      if (isEditMode && editClassId) {
        apiUrl = `/api/product-class/${editClassId}`;
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
          product_class_name: "",
        });
        if (isEditMode) {
          setIsEditMode(false);
          setIsSubmit(true);
          setEditClassId(null);
          console.log("Class updated successfully");
          setSuccessMessage("Class updated successfully");
          toast.success("Class updated successfully",{theme:"dark"});
        } else {
          console.log("Class created successfully");
          setSuccessMessage("Class created successfully");
          setIsSubmit(true);
          toast.success("Class created successfully",{theme:"dark"});
        }
      } else {
        console.error("Error:", response.statusText);
        setErrorMessage(`Error: ${isEditMode ? "Updating" : "Creating"} Class`);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(`Error: ${isEditMode ? "Updating" : "Creating"} Class`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product-class", {
          cache: "no-store",
        });
        const data = await response.json();
        setClasses(data);
        setIsSubmit(false);
      } catch (error) {
        console.error("Error fetching class:", error);
      }
    };

    // Check if in edit mode and set the form data
    if (isEditMode && editClassId) {
      const classToEdit = classes.find((classs) => classs._id === editClassId);
      if (classToEdit) {
        // Check if formData needs to be updated to avoid infinite loop
        if (formData.product_class_name !== classToEdit.product_class_name) {
          setFormData({
            product_class_name: classToEdit.product_class_name,
          });
        }
      }
    } else {
      // Not in edit mode, fetch data normally
      fetchData();
    }
  }, [deleteMessage, isEditMode, editClassId, isSubmit]);

  const handleDelete = async (deleteId) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete the class"
    );

    if (!userConfirmed) {
      // User clicked "Cancel"
      return;
    }

    try {
      const response = await fetch(`/api/product-class/${deleteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDeleteMessage(deleteId);
        toast.error("Class Deleted successfully",{theme:"dark"});
      }
    } catch (error) {
      console.error("Error Deleting Class:", error);
      alert("Error Deleting Class" + error);
    }
  };

  return (
    <AdminLayout>
      <section className="m-5 text-white text-lg font-campton-normal">
        <div className="flex gap-5">
          <div className="basis-1/3 ">
            <div className="bg-slate-800 rounded  p-7">
              <h1 className="text-2xl font-campton-semibold mb-5">
                {isEditMode ? "Update Class" : "Add New Class"}
              </h1>
              <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="product_class_name">Class Name</label>
                  <input
                    type="text"
                    className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30 px-4"
                    id="product_class_name"
                    name="product_class_name"
                    required
                    placeholder="Class Name"
                    onChange={handleInputChange}
                    value={formData.product_class_name}
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
                    {isEditMode ? "Update Class" : "Add New Class"}
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="basis-2/3 bg-slate-800 rounded border-slate-500 border">
            <div className="flex flex-col">
              <div className="flex justify-around">
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-3/4">
                  <h2>Class Name</h2>
                </div>
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/4">
                  <h2>Action</h2>
                </div>
              </div>

              {/* Render classs in the component */}
              {classes &&
                classes.map((classs) => {
                  return (
                    <div className="flex" key={classs._id}>
                      <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-3/4">
                        <p>{classs.product_class_name}</p>
                      </div>
                      <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/4 flex gap-3">
                        <button
                          onClick={() => handleEdit(classs._id)}
                          className="text-green-500 cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(classs._id)}
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
