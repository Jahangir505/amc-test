"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ... (other imports)

export default function ProductsMegaMenu() {
  const router = useRouter();
  const [uniqueParentCategories, setUniqueParentCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [hoveredParentCategory, setHoveredParentCategory] = useState(null);
  const [hoveredParentCategoryname, setHoveredParentCategoryname] =
    useState(null);
  const [loadingSubcategories, setLoadingSubcategories] = useState(false);
  const [loadingViscosity, setLoadingViscosity] = useState(false);
  const [subCatAfterClick, setSubCatAfterClick] = useState();
  const [viscosity, setViscosity] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingSubcategories(true);
        const response = await fetch("/api/get-product-categories", { cache: 'no-store' });
        const data = await response.json();
        const nonEmptyParentcats = data.filter(
          (uniqueParentcat) => uniqueParentcat.product_cat_parent == ""
        );
        setUniqueParentCategories(nonEmptyParentcats);
        // Set the first parent category as the default hovered category
        if (nonEmptyParentcats.length > 0) {
          setHoveredParentCategory(nonEmptyParentcats[0]);
          setHoveredParentCategoryname(nonEmptyParentcats[0]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingSubcategories(false);
      }
    };

    fetchData();
  }, [router]);

  useEffect(() => {
    // Fetch subcategories based on the hovered parent category
    const fetchSubcategories = async () => {
      if (hoveredParentCategory) {
        try {
          setLoadingSubcategories(true);
          const response = await fetch(
            `/api/product-subcategories/${hoveredParentCategory._id}`
            , { cache: 'no-store' });
          const subcategoriesData = await response.json();
          setSubcategories(subcategoriesData);
          setSubCatAfterClick(subcategoriesData[0]._id);
        } catch (error) {
          console.error("Error fetching categories:", error);
        } finally {
          setLoadingSubcategories(false);
        }
      }
    };

    fetchSubcategories();
  }, [hoveredParentCategory,router]);

  const handleParentCategoryHover = (parentCategory) => {
    setHoveredParentCategory(parentCategory);
    setHoveredParentCategoryname(parentCategory);
  };

  useEffect(() => {
    // Fetch subcategories based on the hovered parent category
    const fetchSubcategories = async () => {
      if (subCatAfterClick) {
        try {
          setLoadingViscosity(true);
          const response = await fetch(`/api/get-products`, { cache: 'no-store' });
          const productsData = await response.json();
          const getProductsData = productsData.filter(
            (product) =>
              JSON.parse(product.product_subcategory)._id == subCatAfterClick
          );
          setViscosity(getProductsData);
        } catch (error) {
          console.error("Error fetching categories:", error);
        } finally {
          setLoadingViscosity(false);
        }
      }
    };

    fetchSubcategories();
  }, [subCatAfterClick,router]);

  const handleSubCatClick = (subcatId) => {
    setSubCatAfterClick(subcatId);
  };

  const handleParentCategoryLeave = () => {
    // No need to set hoveredParentCategory to null on leave
    // to keep the active background on the active item
  };

  return (
    <div className="absolute top-8 pt-12 left-0 invisible w-full h-screen opacity-0 group-hover:opacity-100 group-hover:h-full group-hover:visible">
      <div className="container bg-slate-900 rounded-sm mx-auto border border-slate-600 relative hidden group-hover:block">
        <div className="flex flex-row flex-wrap">
          <div className="w-2/6 bg-neutral-950 sm:w-full">
            {/* parent categoris start */}
            <ul className="font-campton-semibold text-xs text-white">
              {uniqueParentCategories &&
                uniqueParentCategories.map((parentCategory) => (
                  <li
                    key={parentCategory._id}
                    className={`${
                      hoveredParentCategory === parentCategory
                        ? "bg-amber-500 text-black"
                        : ""
                    }`}
                  >
                    <Link
                      className="block py-7 px-7 text-white border-b border-slate-600"
                      href={`#${parentCategory._id}`}
                      onMouseEnter={() =>
                        handleParentCategoryHover(parentCategory)
                      }
                      onMouseLeave={handleParentCategoryLeave}
                    >
                      {parentCategory.product_cat_name}
                    </Link>
                  </li>
                ))}
            </ul>
            {/* parent categoris end */}
          </div>
          <div className="w-3/6 bg-zinc-800 px-5 py-5 sm:w-full relative">
            <div className="text-amber-500 text-sm font-semibold font-campton-semibold leading-7 mb-4">
              {hoveredParentCategoryname &&
                hoveredParentCategoryname.product_cat_name}
            </div>
            {/* sub categoris start */}
            <ul className="text-white text-xs font-medium font-campton-medium capitalize leading-[36.4px]">
              {/* Show subcategories based on the hovered parent category */}
              {subcategories &&
                subcategories.map((subcategory) => (
                  <li key={subcategory._id}>
                    <button className="hover:font-campton-bold hover:scale-110 transition-all duration-150" onClick={() => handleSubCatClick(subcategory._id)}>
                      {subcategory.product_cat_name}
                    </button>
                  </li>
                ))}
            </ul>
            {/* sub categoris end */}

            
          </div>
          <div className="w-1/6 bg-neutral-600 text-center sm:w-full relative">
            <ul className="text-white text-sm font-bold font-campton-medium capitalize leading-[18px]">
              <li>
                <a
                  className=" block py-5 px-5 border-b border-slate-400 hover:bg-neutral-700"
                  href="#"
                >
                  VISCOSITY
                </a>
              </li>
              {viscosity &&
                viscosity.map((visco) => (
                  <li key={visco._id}>
                    <a
                      className=" block py-5 px-5 border-b border-slate-400 hover:bg-neutral-700"
                      href={`/products/${
                        JSON.parse(visco.product_category).product_cat_slug
                      }/${
                        JSON.parse(visco.product_subcategory).product_cat_slug
                      }/${visco.product_viscosity
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {visco.product_viscosity}
                    </a>
                  </li>
                ))}
              {/* ... (other list items remain the same) */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
