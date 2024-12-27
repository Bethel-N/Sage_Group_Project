// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios"; // Import axios correctly

// const addToCart = async () => {
//   try {
//     await axios.post("/api/cart/add", { productId: product._id, quantity: 1 });
//     alert("Item added to cart");
//   } catch (error) {
//     console.error("Error adding to cart", error);
//   }
// };
// const SingleProduct = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null); // Store the product details
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch the product details by ID
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:5000/api/products/${id}`
//         );
//         setProduct(data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching product details.");
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]); // Remove 'axios' from the dependency array

//   if (loading) {
//     return <p className="text-center">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-danger">{error}</p>;
//   }

//   return (
//     <div className="container py-4">
//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src={product.imageUrl || "https://via.placeholder.com/500"}
//             alt={product.name}
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-md-6">
//           <h2 className="text-primary">{product.name}</h2>
//           <p className="text-muted">{product.description}</p>
//           <p className="lead">${product.price}</p>
//           {/* <button className="btn btn-primary btn-lg" onClick={addToCart}>
//             Add to Cart
//           </button> */}
//           <button
//             onClick={() => addToCart(product._id)}
//             className="btn btn-primary"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;

//second

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const SingleProduct = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null); // Store the product details
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch the product details by ID
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:5000/api/products/${id}` // Ensure the URL is correct
//         );
//         setProduct(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError("Error fetching product details.");
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // Add to cart function
//   const addToCart = async (productId) => {
//     try {
//       await axios.post("http://localhost:5000/api/cart", {
//         productId,
//         quantity: 1,
//       });
//       alert("Item added to cart");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       alert("Failed to add item to cart");
//     }
//   };

//   if (loading) {
//     return <p className="text-center">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-danger">{error}</p>;
//   }

//   return (
//     <div className="container py-4">
//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src={product.imageUrl || "https://via.placeholder.com/500"}
//             alt={product.name}
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-md-6">
//           <h2 className="text-primary">{product.name}</h2>
//           <p className="text-muted">{product.description}</p>
//           <p className="lead">${product.price}</p>
//           <button
//             onClick={() => addToCart(product._id)} // Pass the product ID to addToCart
//             className="btn btn-primary btn-lg"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;

//third
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SingleProduct.css";
const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Error fetching product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage or another storage mechanism
      if (!token) {
        alert("You must be logged in to add items to the cart.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/cart",
        { productId, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      alert("Item added to cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (error.response && error.response.status === 401) {
        alert("Unauthorized. Please log in.");
      } else {
        alert("Failed to add item to cart.");
      }
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!product)
    return <p className="text-center text-warning">Product not found.</p>;

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl || "https://via.placeholder.com/500"}
            alt={product.name}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary">{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <p className="lead">${product.price}</p>
          <button
            onClick={() => addToCart(product._id)}
            className="btn btn-primary btn-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <SizeGuide />
    </div>
  );
};

const SizeGuide = () => (
  <div className="size-guide-page mt-5">
    <h1>Size Guide</h1>
    <p>Find the perfect fit for your Ethiopian traditional dresses.</p>

    <SizeTable
      title="Women's Size Guide"
      imageSrc="/path/to/womenss.jpg"
      sizes={[
        { size: "S", chest: "32-34", waist: "24-26", hips: "34-36" },
        { size: "M", chest: "36-38", waist: "28-30", hips: "38-40" },
        // Add more sizes...
      ]}
    />

    <SizeTable
      title="Men's Size Guide"
      imageSrc="/path/to/menss.jpg"
      sizes={[
        { size: "S", chest: "34-36", waist: "28-30", shoulder: "16-17" },
        { size: "M", chest: "38-40", waist: "32-34", shoulder: "17-18" },
        // Add more sizes...
      ]}
    />
  </div>
);

const SizeTable = ({ title, imageSrc, sizes }) => (
  <div className="size-guide-section">
    <h2>{title}</h2>
    <img src={imageSrc} alt={title} className="size-guide-image" />
    <table className="size-guide-table">
      <thead>
        <tr>
          {Object.keys(sizes[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizes.map((size, index) => (
          <tr key={index}>
            {Object.values(size).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SingleProduct;
