// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]); // All products from backend
//   const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
//   const [priceRange, setPriceRange] = useState(""); // Selected price range
//   const [categories, setCategories] = useState([]); // Available categories
//   const [selectedCategory, setSelectedCategory] = useState(""); // Selected category

//   // Fetch products from the backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/products");
//         setProducts(data);
//         setFilteredProducts(data); // Initialize with all products

//         // Extract unique categories
//         const uniqueCategories = [
//           ...new Set(data.map((product) => product.category)),
//         ];
//         setCategories(uniqueCategories);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products based on selected filters
//   const handleFilter = () => {
//     let filtered = [...products];

//     // Filter by category
//     if (selectedCategory) {
//       filtered = filtered.filter(
//         (product) => product.category === selectedCategory
//       );
//     }

//     // Filter by price range
//     if (priceRange) {
//       const [minPrice, maxPrice] = priceRange.split("-").map(Number);
//       filtered = filtered.filter(
//         (product) => product.price >= minPrice && product.price <= maxPrice
//       );
//     }

//     setFilteredProducts(filtered);
//   };

//   // Apply filters when filters change
//   useEffect(() => {
//     handleFilter();
//   }, [selectedCategory, priceRange]);

//   return (
//     <div className="container py-4">
//       <h2 className="text-center mb-4">Product List</h2>

//       {/* Filters Section */}
//       <div className="row mb-4 border rounded p-3 bg-light">
//         {/* Category Filter */}
//         <div className="col-md-6 mb-3 mb-md-0">
//           <label className="form-label fw-bold">Category:</label>
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="form-select border-primary shadow-sm"
//           >
//             <option value="">All Categories</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price Range Filter */}
//         <div className="col-md-6">
//           <label className="form-label fw-bold">Price Range:</label>
//           <select
//             value={priceRange}
//             onChange={(e) => setPriceRange(e.target.value)}
//             className="form-select border-primary shadow-sm"
//           >
//             <option value="">All</option>
//             <option value="0-50">0-50</option>
//             <option value="51-100">51-100</option>
//             <option value="101-200">101-200</option>
//           </select>
//         </div>
//       </div>

//       {/* Products List */}
//       <div className="row">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product._id}>
//               <div className="card h-100 border-primary shadow-sm">
//                 <div className="card-body text-center">
//                   <h5 className="card-title text-primary">{product.name}</h5>
//                   <p className="card-text text-muted">{product.description}</p>
//                   <p className="card-text text-muted">${product.price}</p>
//                   <p className="card-text text-muted">
//                     <Link
//                       to={`/product/${product._id}`}
//                       className="btn btn-outline-primary btn-sm"
//                     >
//                       {" "}
//                       View Product
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-danger fw-bold">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]); // All products from backend
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [priceRange, setPriceRange] = useState(""); // Selected price range
  const [categories, setCategories] = useState([]); // Available categories
  const [selectedCategory, setSelectedCategory] = useState(""); // Selected category

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
        setFilteredProducts(data); // Initialize with all products

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected filters
  const handleFilter = useCallback(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      filtered = filtered.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange]);

  // Apply filters when dependencies change
  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(#f9f1f7, #c53775)", // Correct gradient syntax
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 className="text-center mb-4" style={{ color: "#ff69b4" }}>
        Products
      </h2>

      {/* Filters Section */}
      <div
        className="row mb-4 border rounded p-3"
        style={{ background: "#fff" }}
      >
        {/* Category Filter */}
        <div className="col-md-6 mb-3 mb-md-0">
          <label className="form-label fw-bold" style={{ color: "#ff69b4" }}>
            Category:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-select shadow-sm"
            style={{ borderColor: "#ff69b4" }}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="col-md-6">
          <label className="form-label fw-bold" style={{ color: "#ff69b4" }}>
            Price Range:
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-select shadow-sm"
            style={{ borderColor: "#ff69b4" }}
          >
            <option value="">All</option>
            <option value="0-50">0-50</option>
            <option value="51-100">51-100</option>
            <option value="101-200">101-200</option>
            <option value="201-500">201-500</option>
            <option value="500-1000">500-1000</option>
            <option value="1000-10000">1000+</option>
          </select>
        </div>
      </div>

      {/* Products List */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product._id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "#ff69b4" }}>
                    {product.name}
                  </h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="card-text text-muted">${product.price}</p>
                  <div className="d-flex justify-content-center gap-2">
                    <Link
                      to={`/product/${product._id}`}
                      className="btn btn-outline-secondary btn-sm"
                      style={{ borderColor: "#ff69b4", color: "#ff69b4" }}
                    >
                      View Product
                    </Link>
                    {/* <button
                      onClick={() => addToCart(product._id)}
                      className="btn btn-secondary btn-sm"
                    >
                      Add to Cart
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center fw-bold" style={{ color: "#ff69b4" }}>
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
