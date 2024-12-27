// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/auth/login",
// //         {
// //           email,
// //           password,
// //         }
// //       );
// //       localStorage.setItem("token", response.data.token);
// //       localStorage.setItem("role", response.data.role);

// //       if (response.data.role === "admin") {
// //         navigate("/admin");
// //       } else {
// //         navigate("/products");
// //       }
// //     } catch (err) {
// //       setError(err.response?.date?.message || "Login Failed");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Login</h2>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       <input
// //         type="email"
// //         placeholder="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         required
// //       />
// //       <input
// //         type="password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //         required
// //       />

// //       <button type="submit">Login</button>
// //     </form>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("role", response.data.role);

//       if (response.data.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/products");
//       }
//     } catch (err) {
//       const errorMessage = err.response?.data?.message || "Login Failed";
//       setError(errorMessage);
//     }
//   };

//   return (
//     <div className="container d-flex align-items-center justify-content-center vh-100">
//       <div className="card shadow-lg p-4" style={{ width: "400px" }}>
//         <h2 className="text-center text-primary mb-4">Login</h2>
//         {error && <p className="text-danger text-center">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label fw-bold">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control border-primary shadow-sm"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label fw-bold">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control border-primary shadow-sm"
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100 shadow-sm">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      if (response.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/products");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login Failed";
      setError(errorMessage);
    }
  };

  // Inline styles
  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    formContainer: {
      width: "900px",
      height: "500px",
      display: "flex",
      borderRadius: "10px",
      boxShadow:
        "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    },
    left: {
      flex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
    right: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#cc364f",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    input: {
      outline: "none",
      border: "none",
      width: "350px",
      padding: "15px",

      borderRadius: "10px",
      backgroundColor: "#D7BFCA",
      margin: "15px 15px",
      fontSize: "14px",
    },
    errorMessage: {
      width: "370px",
      padding: "15px",
      margin: "5px 0",
      fontSize: "14px",
      backgroundColor: "#f34646",
      color: "white",
      borderRadius: "5px",
      textAlign: "center",
    },
    button: {
      border: "none",
      outline: "none",
      padding: "12px 0",
      backgroundColor: "#B90E5E",
      borderRadius: "20px",
      width: "180px",
      fontWeight: "bold",
      fontSize: "14px",
      cursor: "pointer",
    },
    buttonGreen: {
      backgroundColor: "#ce2828",
      color: "#0c0c0c",
      margin: "10px",
    },
    title: {
      fontSize: "40px",
      margin: "0",
      color: "white",
      alignSelf: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        {/* Left Section */}
        <div style={styles.left}>
          <div>
            <h1>Login</h1>
          </div>
          {error && <div style={styles.errorMessage}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div style={styles.right}>
          <h1 style={styles.title}>Welcome Back!</h1>
          <button
            style={{ ...styles.button, ...styles.buttonGreen }}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
