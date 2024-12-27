// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [total, setTotal] = useState(0);
//   const navigate = useNavigate();

//   // Fetch cart items
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/cart");
//         setCartItems(response.data);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };
//     fetchCart();
//   }, []);

//   // Calculate total
//   useEffect(() => {
//     const calculateTotal = () => {
//       const totalAmount = cartItems.reduce(
//         (acc, item) => acc + item.product.price * item.quantity,
//         0
//       );
//       setTotal(totalAmount);
//     };
//     calculateTotal();
//   }, [cartItems]);

//   // Remove an item
//   const removeItem = async (itemId) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`);
//       setCartItems((prevItems) =>
//         prevItems.filter((item) => item._id !== itemId)
//       );
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   // Update quantity
//   const updateQuantity = async (itemId, quantity) => {
//     if (quantity < 1) return;

//     try {
//       await axios.put(`http://localhost:5000/api/cart/${itemId}`, { quantity });
//       setCartItems((prevItems) =>
//         prevItems.map((item) =>
//           item._id === itemId ? { ...item, quantity } : item
//         )
//       );
//     } catch (error) {
//       console.error("Error updating item quantity:", error);
//     }
//   };

//   // Navigate to checkout
//   const handleCheckout = () => {
//     navigate(`/checkout`);
//   };

//   return (
//     <div
//       className="container"
//       style={{
//         background: "linear-gradient(to bottom, #f9f1f7, #c53775)",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       <h2 className="text-center text-white mb-4">Your Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-white">Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="d-flex justify-content-between align-items-center p-3 mb-3 border rounded shadow-sm bg-white"
//             >
//               <div className="d-flex align-items-center">
//                 <img
//                   src={item.product.image}
//                   alt={item.product.name}
//                   style={{ width: "80px", height: "80px", marginRight: "15px" }}
//                   className="rounded"
//                 />
//                 <div>
//                   <h5>{item.product.name}</h5>
//                   <p className="text-muted">${item.product.price.toFixed(2)}</p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center gap-2">
//                 <button
//                   className="btn btn-outline-danger btn-sm"
//                   onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   className="btn btn-outline-success btn-sm"
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => removeItem(item._id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="text-center mt-4">
//             <h4 className="text-white">Total: ${total.toFixed(2)}</h4>
//             <button className="btn btn-success mt-2" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart");
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
      setTotal(totalAmount);
    };
    calculateTotal();
  }, [cartItems]);

  const removeItem = async (itemId) => {
    try {
      console.log("Attempting to remove item with ID:", itemId);
      const response = await axios.delete(
        `http://localhost:5000/api/cart/${itemId}`
      );
      console.log("Remove Item Response:", response.data);

      // Update state
      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemId)
      );
    } catch (error) {
      console.error("Error removing item from cart:", error.response || error);
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/cart/${itemId}`, {
        quantity: newQuantity,
      });

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item._id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating item quantity:", error.response || error);
    }
  };

  const handleCheckout = () => {
    navigate(`/checkout`);
  };

  return (
    <div
      className="container"
      style={{
        background: "linear-gradient(to bottom, #f9f1f7, #c53775)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 className="text-center text-white mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-white">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="d-flex justify-content-between align-items-center p-3 mb-3 border rounded shadow-sm bg-white"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  style={{ width: "80px", height: "80px", marginRight: "15px" }}
                  className="rounded"
                />
                <div>
                  <h5>{item.product.name}</h5>
                  <p className="text-muted">${item.product.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeItem(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-center mt-4">
            <h4 className="text-white">Total: ${total.toFixed(2)}</h4>
            <button className="btn btn-success mt-2" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
