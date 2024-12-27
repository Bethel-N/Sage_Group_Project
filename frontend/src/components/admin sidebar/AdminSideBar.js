// // import React from "react";
// // import { NavLink, Link } from "react-router-dom";
// // import "./AdminSideBar.css";

// // const AdminSideBar = () => {
// //   return (
// //     <div className="admin-sidebar">
// //       <div className="sidebar-header">
// //         <h2>Admin Panel</h2>
// //       </div>
// //       <ul className="sidebar-menu nav flex-column">
// //         <li className="nav-item">
// //           <Link to="/admin/dashboard" className="nav-link text-white">
// //             <i className="bi bi-speedometer2"></i>
// //             {isOpen ? "Dashboard" : ""}
// //           </Link>
// //         </li>
// //         <li className="nav-item">
// //           <Link to="/admin/products" className="nav-link text-white">
// //             <i className="bi bi-box"></i>
// //             {isOpen ? "Products" : ""}
// //           </Link>
// //         </li>

// //         <li className="nav-item">
// //           <Link to="/admin/users" className="nav-link text-white">
// //             <i className="bi bi-speedometer2"></i>
// //             {isOpen ? "Users" : ""}
// //           </Link>
// //         </li>

// //         <li className="nav-item">
// //           <Link to="/admin/orders" className="nav-link text-white">
// //             <i className="bi bi-cart"></i>
// //             {isOpen ? "Orders" : ""}
// //           </Link>
// //         </li>

// //         <li className="nav-item">
// //           <Link to="/logout" className="nav-link text-white">
// //             <i className="bi bi-speedometer2"></i>
// //             {isOpen ? "Log Out" : ""}
// //           </Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default AdminSideBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./AdminSideBar.css";

// const AdminSideBar = () => {
//   const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar visibility

//   return (
//     <div className="admin-sidebar d-flex flex-row">
//       {/* Sidebar Header */}
//       <div className="sidebar-header">
//         <h2>Admin Panel</h2>
//         <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? "close" : "Open"}
//         </button>
//       </div>

//       {/* Sidebar Menu */}
//       <ul className="sidebar-menu nav flex-column">
//         {/* Dashboard */}
//         <li className="nav-item">
//           <Link to="/admin/dashboard" className="nav-link text-white">
//             <i className="bi bi-speedometer2"></i>
//             {isOpen ? " Dashboard" : ""}
//           </Link>
//         </li>

//         {/* Products */}
//         <li className="nav-item">
//           <Link to="/admin/products" className="nav-link text-white">
//             <i className="bi bi-box"></i>
//             {isOpen ? " Products" : ""}
//           </Link>
//         </li>

//         {/* Users */}
//         <li className="nav-item">
//           <Link to="/admin/users" className="nav-link text-white">
//             <i className="bi bi-people"></i>
//             {isOpen ? " Users" : ""}
//           </Link>
//         </li>

//         {/* Orders */}
//         <li className="nav-item">
//           <Link to="/admin/orders" className="nav-link text-white">
//             <i className="bi bi-cart"></i>
//             {isOpen ? " Orders" : ""}
//           </Link>
//         </li>

//         {/* Logout */}
//         <li className="nav-item">
//           <Link to="/logout" className="nav-link text-white">
//             <i className="bi bi-box-arrow-right"></i>
//             {isOpen ? " Log Out" : ""}
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default AdminSideBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton";

const AdminSideBar = () => {
  const [isOpen, setIsOpen] = useState(true); // state for sidebar toggle

  return (
    <div
      style={{
        width: isOpen ? "260px" : "100px", // Adjust width based on toggle
        backgroundColor: "#BB254F",
        color: "#fff",
        position: "fixed",
        top: 0,
        bottom: 0,
        overflowY: "auto",
        transition: "width 0.3s ease",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        zIndex: 1000,
      }}
    >
      {/* Sidebar Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "white",
          padding: "10px",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "5px",
          }}
        >
          {isOpen ? " ❮  Collapse" : " ❯ Expand"}
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
          flexGrow: 1,
        }}
      >
        {[
          { to: "/", icon: "bi-speedometer2", label: "Home" },
          { to: "/admin/products", icon: "bi-box", label: "Products" },
          { to: "/admin/users", icon: "bi-people", label: "Users" },
          { to: "/admin/orders", icon: "bi-cart", label: "Orders" },
        ].map((item, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <Link
              to={item.to}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "white",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "background-color 0.3s",
                backgroundColor: isOpen ? "#BB254F" : "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#9B1F40")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#BB254F")
              }
            >
              <i
                className={`bi ${item.icon}`}
                style={{
                  fontSize: "20px",
                  color: "#FFF",
                  marginRight: isOpen ? "10px" : "0",
                  transition: "margin-right 0.3s",
                }}
              ></i>
              <span
                style={{
                  display: isOpen ? "inline" : "none",
                  transition: "opacity 0.3s",
                }}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          padding: "5px",
        }}
      >
        <LogoutButton
          style={{
            backgroundColor: "white",
            color: "#BB254F",
            padding: "1px 1px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            transition: "background-color 0.5s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#9B1F40")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
