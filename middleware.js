export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard","/dashboard/products/categories","/dashboard/products","/dashboard/products/add","/api/product-categories","/api/product-subcategories","/api/products","/dashboard/products/brand","/dashboard/products/class"] };