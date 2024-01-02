"use client";
import AdminLayout from "@/shared/layouts/admin-layout/AdminLayout";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSearchParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify';

const animatedComponents = makeAnimated();

export default function DashboardProductAdd() {
  const [uniqueParentCategories, setUniqueParentCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [submitMessage, setSubmitMessage] = useState(null);
  const [files, setFiles] = useState({
    product_image: null,
    product_detail_file: null,
    product_safety_file: null,
  });

const router=useRouter();
  const searchParams=useSearchParams();
const productId = searchParams.get("productid");



const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-product-categories");
        const data = await response.json();
        const nonEmptyParentcats = data.filter(
          (uniqueParentcat) => uniqueParentcat.product_cat_parent == ""
        );
        setUniqueParentCategories(nonEmptyParentcats);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const fetchSubcategories = async () => {
    if (selectedCategoryId) {
      try {
        const response = await fetch(
          `/api/product-subcategories/${selectedCategoryId}`
        );
        const subcategoriesData = await response.json();
        setSubcategories(subcategoriesData);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchSubcategories();
    }
  }, [selectedCategoryId, loading, productId]);

  console.log(selectedCategoryId);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (productId) {
        try {
          const response = await fetch(`/api/products/${productId}`);
          const productData = await response.json();

          // Update form data with product details
          setFormData((prevFormData) => ({
            ...prevFormData,
            ...productData,
          }));

          // Set the selected subcategory in the state
          const selectedSubcategory = JSON.parse(productData.product_subcategory);
          setSelectedCategoryId(selectedSubcategory ? JSON.parse(selectedSubcategory.product_cat_parent)._id : null);

          // Update selected options for the size dropdown
          const productSizeArray = productData.product_size
            .split(',')
            .map((size) => ({
              value: size.trim(),
              label: size.trim(),
            }));
          setSelectedoptions(productSizeArray);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }finally { setLoading(false);}
      }
    };

    fetchProductDetails();
  }, [productId]);




  const [brands, setBrands] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product-brand");
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchData();
  }, [productId]);

  const [classes, setClasses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product-class");
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error("Error fetching Classess:", error);
      }
    };

    fetchData();
  }, [productId]);

  const [sizes, setSizes] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product-size");
        const data = await response.json();
        setSizes(data);

        // Map sizes data to options format
        const mappedOptions = data.map((size) => ({
          value: size.product_size_name,
          label: size.product_size_name,
        }));
        setOptions(mappedOptions);
      } catch (error) {
        console.error("Error fetching Sizes:", error);
      }
    };

    fetchData();
  }, [productId]);
  const [selectedOptions, setSelectedoptions] = useState([]);
  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedoptions(selectedOptions);
  
    // Trigger onChange for product_size input field
    handleInputChange({
      target: {
        name: 'product_size',
        value: selectedOptions.map((option) => option.label).join(', '),
      },
    });
  };
  

  console.log(selectedOptions);
  console.log(options);
  // State variables to store form data
  const [formData, setFormData] = useState({
    product_name: "",
    product_brand: "",
    product_class: "",
    product_category: "",
    product_subcategory: "",
    product_model: "",
    product_base: "",
    product_viscosity: "",
    product_api: "",
    product_applications: "",
    product_size: "",
    product_detail_file: "",
    product_safety_file: "",
    product_description: "",
    product_description_arabic: "",
    product_image: null,
    product_sku: "",
    product_stock_quantity: 0, // Assuming a default value
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    if (name === "product_category") {
      setSelectedCategoryId(value === "" ? null : JSON.parse(value)._id);
      setSubcategories(value === "" ? null : subcategories);
    }



    let inputValue = value;

    if (e.target.type === "file") {
      const file = e.target.files[0];
      if (file) {
        inputValue = "/uploads/" + file.name;
        setFiles({
          ...files,
          [name]: file,
        });
      } else {
        // Handle the case where no file is selected
      }
    }


    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };
  console.log(formData);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Convert form data to JSON
      const jsonData = JSON.stringify(formData);
  
      // Create FormData object for file upload
      const formDataForUpload = new FormData();
  
      // Append each file to the FormData
      for (const key in files) {
        if (files[key]) {
          formDataForUpload.append(key, files[key]);
        }
      }
  
      // Determine whether to make a POST or PUT request
      const method = productId ? "PUT" : "POST";
      const url = productId ? `/api/products/${productId}` : "/api/products";
  
      // Send a POST or PUT request to your API endpoint for form data
      const response = await fetch(url, {
        method,
        body: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const action = productId ? "updated" : "created";
        console.log(`Product ${action} successfully`);
        setSubmitMessage(`Product ${action} successfully`);
        toast.success(`Product ${action} successfully`,{theme:"dark"});
        setFormData({
          product_name: "",
          product_brand: "",
          product_class: "",
          product_category: "",
          product_subcategory: "",
          product_model: "",
          product_base: "",
          product_viscosity: "",
          product_api: "",
          product_applications: "",
          product_size: "",
          product_detail_file: "",
          product_safety_file: "",
          product_description: "",
          product_description_arabic: "",
          product_image: null,
          product_sku: "",
          product_stock_quantity: 0, // Assuming a default value
        });
        if (productId) {
          router.push("/dashboard/products");
        }
        // If it's an update (PUT), send a POST request to your file upload API endpoint using FormData
        if (productId) {
          const responseUpload = await fetch(`/api/products/${productId}/upload`, {
            method: "POST",
            body: formDataForUpload,
          });
  
          if (!responseUpload.ok) {
            console.log("File upload failed", responseUpload.statusText);
          }
        } else {
          // If it's a new product (POST), send a POST request to your file upload API endpoint using FormData
          const responseUpload = await fetch("/api/products/upload", {
            method: "POST",
            body: formDataForUpload,
          });
  
          if (!responseUpload.ok) {
            console.log("File upload failed", responseUpload.statusText);
          }
        }
      } else {
        console.error(`Error ${productId ? "updating" : "creating"} product:`, response.statusText);
        setSubmitMessage(`Error ${productId ? "updating" : "creating"} product`);
      }
    } catch (error) {
      console.error(`Error ${productId ? "updating" : "creating"} product:`, error);
      setSubmitMessage(`Error ${productId ? "updating" : "creating"} product: ${error}`);
    }
  };
  




  return (
    <AdminLayout>
      <section className="m-5 text-white text-lg font-campton-normal">
        <div className="">
          <div className="">
            <div className="bg-slate-800 rounded p-7">
              <div className="flex justify-between align-middle items-center">
                <h1 className="font-campton-semibold text-2xl text-white mb-6">
                 {productId? "Update Product":"Add New Product"}
                </h1>
                <Link
                  href="/dashboard/products"
                  className="py-2 px-5 bg-amber-500 rounded text-white font-campton-medium text-xl"
                >
                  View Products List
                </Link>
              </div>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    htmlFor="product_name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="product_name"
                    placeholder="Name"
                    name="product_name"
                    onChange={handleInputChange}
                    value={formData.product_name}
                  />
                </div>

                <div className="flex gap-4">
                  <div className="basis-1/2">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_brand"
                    >
                      Brand
                    </label>

                    <select
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_brand"
                      placeholder="Brand"
                      name="product_brand"
                      onChange={handleInputChange}
                      value={formData.product_brand}
                    >
                      <option value="">Select a Brand</option>
                      {brands &&
                        brands.map((brand) => (
                          <option
                            key={brand._id}
                            value={brand.product_brand_name}
                          >
                            {brand.product_brand_name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="basis-1/2">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_class"
                    >
                      Class
                    </label>
                    <select
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_class"
                      placeholder="Class"
                      name="product_class"
                      onChange={handleInputChange}
                      value={formData.product_class}
                    >
                      <option value="">Select a Class</option>
                      {classes &&
                        classes.map((classs) => (
                          <option
                            key={classs._id}
                            value={classs.product_class_name}
                          >
                            {classs.product_class_name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="basis-1/2">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_category"
                    >
                      Category
                    </label>
                    <select
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_category"
                      name="product_category"
                      onChange={handleInputChange}
                      value={formData.product_category}
                    >
                      <option value="">Select a Category</option>
                      {uniqueParentCategories &&
                        uniqueParentCategories.map((parentCategory) => (
                          <option
                            key={parentCategory._id}
                            value={JSON.stringify(parentCategory)}
                          >
                            {parentCategory.product_cat_name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="basis-1/2">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_subcategory"
                    >
                      Subcategory
                    </label>
                    <select
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_subcategory"
                      name="product_subcategory"
                      onChange={handleInputChange}
                      value={formData.product_subcategory}
                    >
                      <option value="">Select a Subcategory</option>
                      {subcategories &&
                        subcategories.map((subcategory) => (
                          <option
                            key={subcategory._id}
                            value={JSON.stringify(subcategory)}
                          >
                            {subcategory.product_cat_name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="basis-1/3">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_model"
                    >
                      Model
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_model"
                      placeholder="Model"
                      name="product_model"
                      onChange={handleInputChange}
                      value={formData.product_model}
                    />
                  </div>

                  <div className="basis-1/3">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_base"
                    >
                      Base
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_base"
                      placeholder="Base"
                      name="product_base"
                      onChange={handleInputChange}
                      value={formData.product_base}
                    />
                  </div>

                  <div className="basis-1/3">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_viscosity"
                    >
                      Viscosity
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_viscosity"
                      placeholder="Viscosity"
                      name="product_viscosity"
                      onChange={handleInputChange}
                      value={formData.product_viscosity}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="basis-1/3">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_api"
                    >
                      API
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_api"
                      placeholder="API"
                      name="product_api"
                      onChange={handleInputChange}
                      value={formData.product_api}
                    />
                  </div>

                  <div className="basis-1/3">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_applications"
                    >
                      Applications
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_applications"
                      placeholder="Applications"
                      name="product_applications"
                      onChange={handleInputChange}
                      value={formData.product_applications}
                    />
                  </div>

                  <div className="basis-1/3">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_size"
                    >
                      Size
                    </label>
                    <input
                      type="text"
                      className="hidden bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_size"
                      placeholder="Size"
                      name="product_size"
                      onChange={handleInputChange}
                      value={formData.product_size}
                    />

                    <Select
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? "custom-class-multiselect"
                            : "custom-class-multiselect",
                        multiValue: (state) =>
                          state.isFocused
                            ? "custom-class-multiselect-value"
                            : "custom-class-multiselect-value",
                        menu: (state) =>
                          state.isFocused
                            ? "custom-class-multi-select-menu"
                            : "custom-class-multi-select-menu",
                        option: (state) =>
                          state.isFocused
                            ? "custom-class-multi-select-option"
                            : "custom-class-multi-select-option",
                      }}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={options}
                      value={selectedOptions}
                      onChange={handleMultiSelectChange}
                      defaultValue={formData.product_size
                        .split(",")
                        .map((size) => ({
                          value: size.trim(),
                          label: size.trim(),
                        }))}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="basis-1/2">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_sku"
                    >
                      SKU
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_sku"
                      placeholder="SKU"
                      name="product_sku"
                      onChange={handleInputChange}
                      value={formData.product_sku}
                    />
                  </div>

                  <div className="basis-1/2">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_stock_quantity"
                    >
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_stock_quantity"
                      placeholder="Stock Quantity"
                      name="product_stock_quantity"
                      onChange={handleInputChange}
                      value={formData.product_stock_quantity}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="basis-1/2">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_detail_file"
                    >
                      Detail File
                    </label>
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_detail_file"
                      placeholder="Detail File"
                      name="product_detail_file"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="basis-1/2">
                    <label
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                      htmlFor="product_safety_file"
                    >
                      Safety File
                    </label>
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="product_safety_file"
                      placeholder="Safety File"
                      name="product_safety_file"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    htmlFor="product_description"
                  >
                    Description
                  </label>
                  <textarea
                    type="file"
                    className="h-44 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="product_description"
                    name="product_description"
                    onChange={handleInputChange}
                    value={formData.product_description}
                  ></textarea>
                </div>

                <div>
                  <label
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    htmlFor="product_description_arabic"
                  >
                    Description Arabic
                  </label>
                  <textarea
                    type="file"
                    className="h-44 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="product_description_arabic"
                    name="product_description_arabic"
                    onChange={handleInputChange}
                    value={formData.product_description_arabic}
                  ></textarea>
                </div>

                <div>
                  <label
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    htmlFor="product_image"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="product_image"
                    name="product_image"
                    onChange={handleInputChange}
                  />
                </div>
                {submitMessage && (
                  <div className="bg-white text-black text-lg font-campton-normal">
                    {submitMessage}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full text-white bg-amber-500 hover:bg-amber-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                >
                  {productId? "Update Product":"Publish"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
