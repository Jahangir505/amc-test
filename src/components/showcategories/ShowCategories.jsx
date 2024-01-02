import React, { useEffect, useState } from 'react';
export default function ShowCategories() {
      // State to store the categories
  const [categories, setCategories] = useState([]);
  // Fetch categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories from the API route
        const response = await fetch('/api/product-categories');
        const data = await response.json();

        // Update the state with the fetched categories
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    
    <div className="flex flex-col">
              <div className="flex justify-around">
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/3">
                  <h2>Category Name</h2>
                </div>
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/3">
                  <h2>Slug</h2>
                </div>
                <div className="text-xl font-campton-medium border-b border-slate-500 p-7 basis-1/3">
                  <h2>Action</h2>
                </div>
              </div>

              {/* Render categories in the component */}
              {categories.map((category) => (
                <div className="flex justify-around flex-wrap" key={category._id}>
                  <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/3">
                    <p>{category.product_cat_name}</p>
                  </div>
                  <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/3">
                    <p>{category.product_cat_slug}</p>
                  </div>
                  <div className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7 basis-1/3 flex gap-3">
                    <button className="text-green-500 cursor-pointer">Edit</button>
                    <button className="text-red-600 cursor-pointer">Delete</button>
                  </div>
                </div>
              ))}
            </div>
  )
}
