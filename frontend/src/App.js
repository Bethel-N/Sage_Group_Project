import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminProductsForm from "./pages/AdminProductForm";
import AdminUsers from "./pages/AdminUsers";
import PrivateRoute from "./components/PrivateRoute";
import SingleProduct from "./pages/SingleProduct";
import ClientRoute from "./components/ClientRoute";
import Cart from "./pages/Cart";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <Routes>
        {/* {Admin Routes} */}
        <Route element={<PrivateRoute role="admin" />}></Route>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/products/new" element={<AdminProductsForm />} />
        <Route
          path="/admin/products/edit/:id"
          element={<AdminProductsForm />}
        />
        <Route path="/admin/users" element={<AdminUsers />} />
        {/* Client */}
        <Route element={<ClientRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} /> {/* About route */}
        </Route>
        {/* Optional: Add a fallback for unmatched routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
