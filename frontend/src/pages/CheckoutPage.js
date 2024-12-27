import React, { useState } from "react";
import { useCart } from "../context/CardContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css"; // Custom CSS for styling

const CheckoutPage = () => {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  // Handle form submission
  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order placed successfully!", Total, $$, { totalPrice });
    navigate("/"); // Redirect to home page after successful checkout
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {/* Cart review */}
      <div className="cart-review">
        <h3>Review Your Cart</h3>
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.imgSrc} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
        </div>
      </div>

      {/* Shipping Information Form */}
      <form onSubmit={handleCheckout} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Shipping Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Payment Method Section */}
        <div className="payment-section">
          <h3>Payment Information</h3>

          <div className="form-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          {paymentMethod === "credit-card" && (
            <div className="credit-card-info">
              <div className="form-group">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="expiry-date">Expiry Date</label>
                <input
                  type="text"
                  id="expiry-date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="checkout-btn">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
