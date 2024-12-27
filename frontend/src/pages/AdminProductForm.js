import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // Added `useParams`

const AdminProductsForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Destructure `id` from `useParams`

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:5000/api/products/${id}`
          );
          setProduct(data);
        } catch (err) {
          console.error("Error fetching product:", err);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      if (id) {
        // Update product
        const response = await axios.put(
          `http://localhost:5000/api/products/${id}`,
          product,
          config
        );
        console.log("Product updated:", response.data);
      } else {
        // Create new product
        const response = await axios.post(
          "http://localhost:5000/api/products/create",
          product,
          config
        );
        console.log("Product created:", response.data);
      }
      navigate("/admin/products");
    } catch (err) {
      console.error("Error saving product:", err.response?.data || err);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">
              {id ? "Edit Product" : "Add Product"}
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Product Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product Name"
                  value={product.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {/* Product Description */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Product Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Product Description"
                  value={product.description}
                  onChange={handleChange}
                  className="form-control"
                  required
                ></textarea>
              </div>

              {/* Product Price */}
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Product Price"
                  value={product.price}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {/* Product Stock */}
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  placeholder="Product Stock"
                  value={product.stock}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {/* Product Category */}
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Product Category"
                  value={product.category}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  {id ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsForm;
