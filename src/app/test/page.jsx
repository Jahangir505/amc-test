"use client";
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [uniqueParentCategories, setUniqueParentCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/product-categories');
        const data = await response.json();
        const uniqueParents = [...new Set(data.map((category) => category.product_cat_parent))];
        const uniqueParentNames = uniqueParents.map((parentId) => {
          const parentCategory = data.find((category) => category._id === parentId);
          return parentCategory ? parentCategory.product_cat_name : "";
        });
        const nonEmptyParentNames = uniqueParentNames.filter(name => name !== "");
        setUniqueParentCategories(nonEmptyParentNames);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="m-5 text-white text-lg font-campton-normal">
      <div className="flex gap-5">
        <div className="basis-1/3 bg-slate-800 rounded p-7">
          <h1 className="text-2xl font-campton-semibold mb-5">
            Add A New Category
          </h1>
        </div>
        <div className="basis-2/3 bg-slate-800 rounded border-slate-500 border">
          <div className="flex flex-col">
            <div className="text-xl font-campton-medium border-b border-slate-500 p-7">
              <h2>Unique Parent Categories</h2>
            </div>
            {uniqueParentCategories.map((parentCategory) => (
              <div key={parentCategory} className="text-base text-gray-300 font-campton-normal border-b border-slate-500 p-7">
                <p>{parentCategory}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
