// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Products from "./Products";
// // import Product from "../../../backend/models/Product";
// // import { Link } from "react-router-dom";

// // const AdminProducts = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffects(() => {
// //     const fetchProducts = async () => {
// //       const { data } = await axios.get("http://localhost:5000/api/products");
// //       setProducts(data);
// //     };
// //     fetchProducts();
// //   }, []);

// //   const deleteProduct = async (id) => {
// //     if (window.confirm("Are ou sure you want to delete this product?")) {
// //       await axios.delete("http://localhost:5000/api/admin/products/${id}");
// //       setProducts(products.filter((product) => product.id !== id));
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Manage Product</h2>
// //       <Link to="/admin/products/new">Add new Product</Link>
// //       <ul>
// //         {products.map((product) => (
// //           <li key={product._id}>
// //             {product.name}-${product.price}
// //             <Link to={"/admin/products/edit/${product._id}"}>Edit</Link>
// //             <button onClick={() => deleteProduct(product._id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default AdminProducts;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);

//   // Fetch products on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/products");
//         setProducts(data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       }
//     };
//     fetchProducts();
//   }, []);
//   //deleteproduct
//   const deleteProduct = async (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         const token = localStorage.getItem("token"); // Retrieve token from storage
//         await axios.delete(`http://localhost:5000/api/admin/products/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`, // Pass the token in the header
//           },
//         });
//         setProducts(products.filter((product) => product._id !== id)); // Update state
//       } catch (err) {
//         console.error(
//           "Error deleting product:",
//           err.response?.data || err.message
//         );
//         if (err.response?.status === 401) {
//           alert("Unauthorized: Please check your credentials.");
//         } else {
//           alert("Failed to delete the product. Please try again.");
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Manage Products</h2>
//       <Link to="/admin/products/new">Add New Product</Link>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             {product.name} - ${product.price}
//             <div>
//               <Link to={`/admin/products/edit/${product._id}`}>Edit</Link>
//               <button onClick={() => deleteProduct(product._id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminProducts;
//...............................................................................................
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminProduct.css"; // Import the external CSS

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Delete product
  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from storage
        await axios.delete(`http://localhost:5000/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the header
          },
        });
        setProducts(products.filter((product) => product._id !== id)); // Update state
      } catch (err) {
        console.error(
          "Error deleting product:",
          err.response?.data || err.message
        );
        alert("Failed to delete the product. Please try again.");
      }
    }
  };

  return (
    <div className="admin-products-container">
      <h2 className="header">Manage Products</h2>

      {/* Add Product Link */}
      <div className="add-product-btn">
        <Link to="/admin/products/new" className="btn add-btn">
          Add New Product
        </Link>
      </div>

      {/* Product List */}
      {products.length === 0 ? (
        <p className="no-products-msg">No products available</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              {/* Card Image */}
              <img
                src={product.image || "placeholder.jpg"}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h5 className="product-name">{product.name}</h5>
                <p className="product-price">${product.price}</p>
                <p className="product-category">{product.category}</p>

                {/* Action Buttons */}
                <div className="product-actions">
                  <Link
                    to={`/admin/products/edit/${product._id}`}
                    className="btn btn-edit"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
