// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import AdminSideBar from "../components/AdminSideBar"; // Correct path based on file location

// const AdminDashboard = () => {
//   // return (
//   //   <div className="container py-5">
//   //     <div className="row justify-content-center">
//   //       <div className="col-md-8 col-lg-6">
//   //         {/* Dashboard Header */}
//   //         <div className="card shadow-sm">
//   //           <div className="card-body text-center">
//   //             <h2 className="text-primary mb-4">Admin Dashboard</h2>
//   //             <p className="lead text-muted">
//   //               Welcome to the admin panel. Manage your store effectively!
//   //             </p>
//   //           </div>
//   //         </div>

//   //         {/* Navigation Links */}
//   //         <div className="mt-5">
//   //           <ul className="list-group">
//   //             <li className="list-group-item d-flex justify-content-between align-items-center">
//   //               <Link
//   //                 to="/admin/products"
//   //                 className="text-decoration-none text-primary fs-5"
//   //               >
//   //                 Manage Products
//   //               </Link>
//   //               <span className="badge bg-primary text-white rounded-pill"></span>
//   //             </li>
//   //             <li className="list-group-item d-flex justify-content-between align-items-center">
//   //               <Link
//   //                 to="/admin/users"
//   //                 className="text-decoration-none text-primary fs-5"
//   //               >
//   //                 Manage Users
//   //               </Link>
//   //               <span className="badge bg-primary text-white rounded-pill"></span>
//   //             </li>
//   //           </ul>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );

//   const AdminDashboard = ({ children }) => {
//     return (
//       <div style={{ display: "flex" }}>
//         <AdminSideBar />
//         <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
//           {children}
//         </div>
//         <Outlet />
//       </div>
//     );
//   };
// };
// export default AdminDashboard;

// import React from "react";
// import AdminSideBar from "../components/admin sidebar/AdminSideBar"; // Adjusted import path
// import { Outlet } from "react-router-dom";

// const AdminDashboard = () => {
//   return (
//     <div style={{ display: "flex" }}>
//       <AdminSideBar />
//       <div style={{ marginLeft: "250px", padding: "20px" }}>
//         <h1>Admin Dashboard</h1>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

//-------------------------------------------------------------------------

// import React from "react";
// import AdminSideBar from "../components/admin sidebar/AdminSideBar"; // Adjusted import path
// import { Outlet } from "react-router-dom";

// const AdminDashboard = () => {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <AdminSideBar />

//       <div
//         style={{
//           flex: 1,
//           padding: "20px",
//           backgroundColor: "#f4f4f9",
//           paddingLeft: "300px",
//         }}
//       >
//         <h1
//           style={{
//             textAlign: "center",
//             color: "#ffcc00",
//             marginBottom: "20px",
//             fontWeight: "700px",
//             fontSize: "54px",
//           }}
//         >
//           Admin Dashboard
//         </h1>

//         <Outlet />
//         {/* Statistics Section */}
//         <section
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "20px",
//             marginBottom: "30px",
//           }}
//         >
//           {[
//             { title: "Users", count: "1,234", color: "#007bff" },
//             { title: "Products", count: "567", color: "#28a745" },
//             { title: "Orders", count: "789", color: "#ffc107" },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: "#fff",
//                 padding: "20px",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 textAlign: "center",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 cursor: "pointer",
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.transform = "translateY(-5px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 8px rgba(0, 0, 0, 0.2)";
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 6px rgba(0, 0, 0, 0.1)";
//               }}
//             >
//               <h3 style={{ fontSize: "18px", color: "#333" }}>{stat.title}</h3>
//               <p
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   color: stat.color,
//                 }}
//               >
//                 {stat.count}
//               </p>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
import React from "react";
import AdminSideBar from "../components/admin sidebar/AdminSideBar"; // Adjusted import path
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    { title: "Users", count: "1,234" },
    { title: "Products", count: "567" },
    { title: "Orders", count: "789" },
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <AdminSideBar
        style={{
          width: "300px",
          backgroundColor: "#BB254F",
          color: "white",
          padding: "20px",
          height: "100vh",
        }}
      />

      <div
        style={{
          flex: 1,
          padding: "20px",
          paddingLeft: "300px",
          backgroundColor: "#f4f4f9",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#BB254F",
            marginBottom: "20px",
            fontWeight: "700",
            fontSize: "54px",
          }}
        >
          Admin Dashboard
        </h1>

        <Outlet />

        {/* Statistics Section */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 8px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h3 style={{ fontSize: "18px", color: "#BB254F" }}>
                {stat.title}
              </h3>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {stat.count}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
