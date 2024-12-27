// import React, { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         userData
//       );
//       setMessage("Registration Successful!");
//       setUserData({ name: "", email: "", password: "" });
//     } catch (error) {
//       setMessage("Error: " + error.response.data.message);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-header bg-primary text-white text-center">
//               <h2>Register</h2>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={userData.name}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="name"
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={userData.email}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="email"
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={userData.password}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="password"
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>
//                 <div className="d-grid">
//                   <button type="submit" className="btn btn-primary">
//                     Register
//                   </button>
//                 </div>
//               </form>
//               {message && (
//                 <div className="alert mt-3" role="alert">
//                   {message}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         userData
//       );
//       setMessage("Registration Successful!");
//       setUserData({ name: "", email: "", password: "" });
//     } catch (error) {
//       setMessage(
//         "Error: " + error.response?.data?.message || "An error occurred"
//       );
//     }
//   };

//   // Inline styles
//   const styles = {
//     container: {
//       position: "relative",
//       height: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       fontFamily: "'Arial', sans-serif",
//       overflow: "hidden",
//       backgroundImage:
//         "url('https://www.habeshadress.net/cdn/shop/files/LIYAFETIL2_400x.jpg?v=1725434802')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundAttachment: "fixed",
//       animation: "moveBackground 5s ease-in-out infinite",
//     },
//     formContainer: {
//       display: "flex",
//       width: "80%",
//       maxWidth: "900px",
//       background: "rgba(255, 255, 255, 0.8)",
//       borderRadius: "20px",
//       boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
//       overflow: "hidden",
//     },
//     left: {
//       flex: 1,
//       padding: "2rem",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       background: "#e03c65",
//       color: "#fff",
//       borderTopLeftRadius: "20px",
//       borderBottomLeftRadius: "20px",
//     },
//     right: {
//       flex: 1,
//       padding: "2rem",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       background: "#fff",
//       borderTopRightRadius: "20px",
//       borderBottomRightRadius: "20px",
//     },
//     input: {
//       width: "80%",
//       padding: "0.8rem",
//       marginBottom: "1rem",
//       border: "2px solid transparent",
//       borderRadius: "10px",
//       fontSize: "1rem",
//       transition: "all 0.3s ease",
//     },
//     inputFocus: {
//       borderColor: "#ff638a",
//       outline: "none",
//       boxShadow: "0 0 10px rgba(108, 99, 255, 0.5)",
//     },
//     button: {
//       padding: "0.7rem 2rem",
//       fontSize: "1rem",
//       border: "none",
//       borderRadius: "10px",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//       background: "#f5a4a4",
//       color: "#1d1b1b",
//       marginTop: "1rem",
//     },
//     buttonHover: {
//       background: "#e34a63",
//     },
//     errorMessage: {
//       marginBottom: "1rem",
//       color: "red",
//       fontSize: "0.9rem",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         {/* Left Section */}
//         <div style={styles.left}>
//           <h1>Welcome to Tillet Styles</h1>
//           <p>Create an account to explore the elegance of Habesha fashion.</p>
//         </div>

//         {/* Right Section */}
//         <div style={styles.right}>
//           <form onSubmit={handleSubmit}>
//             <h1 style={{ color: "#ff6385", marginBottom: "1.5rem" }}>
//               Register
//             </h1>
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={userData.name}
//                 onChange={handleChange}
//                 style={styles.input}
//                 placeholder="Enter your name"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={userData.email}
//                 onChange={handleChange}
//                 style={styles.input}
//                 placeholder="Enter your email"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 value={userData.password}
//                 onChange={handleChange}
//                 style={styles.input}
//                 placeholder="Enter your password"
//                 required
//               />
//               <button
//                 type="submit"
//                 style={styles.button}
//                 onMouseEnter={(e) =>
//                   (e.target.style.background = styles.buttonHover.background)
//                 }
//                 onMouseLeave={(e) =>
//                   (e.target.style.background = styles.button.background)
//                 }
//               >
//                 Register
//               </button>
//             </div>
//           </form>
//           {message && <p style={styles.errorMessage}>{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );
      setMessage("Registration Successful!");
      setUserData({ name: "", email: "", password: "" });
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      setMessage(
        "Error: " + (error.response?.data?.message || "An error occurred")
      );
    }
  };

  // Inline styles
  const styles = {
    container: {
      position: "relative",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Arial', sans-serif",
      overflow: "hidden",
      backgroundImage:
        "url('https://www.habeshadress.net/cdn/shop/files/LIYAFETIL2_400x.jpg?v=1725434802')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      animation: "moveBackground 5s ease-in-out infinite",
    },
    formContainer: {
      display: "flex",
      width: "80%",
      maxWidth: "900px",
      background: "rgba(255, 255, 255, 0.8)",
      borderRadius: "20px",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
    left: {
      flex: 1,
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#e03c65",
      color: "#fff",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
    },
    right: {
      flex: 1,
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#fff",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
    },
    input: {
      width: "80%",
      padding: "0.8rem",
      marginBottom: "1rem",
      border: "2px solid transparent",
      borderRadius: "10px",
      fontSize: "1rem",
      transition: "all 0.3s ease",
    },
    inputFocus: {
      borderColor: "#ff638a",
      outline: "none",
      boxShadow: "0 0 10px rgba(108, 99, 255, 0.5)",
    },
    button: {
      padding: "0.7rem 2rem",
      fontSize: "1rem",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      background: "#f5a4a4",
      color: "#1d1b1b",
      marginTop: "1rem",
    },
    buttonHover: {
      background: "#e34a63",
    },
    errorMessage: {
      marginBottom: "1rem",
      color: "red",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        {/* Left Section */}
        <div style={styles.left}>
          <h1>Welcome to Tillet Styles</h1>
          <p>Create an account to explore the elegance of Habesha fashion.</p>
        </div>

        {/* Right Section */}
        <div style={styles.right}>
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: "#ff6385", marginBottom: "1.5rem" }}>
              Register
            </h1>
            <div>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your email"
                required
              />
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your password"
                required
              />
              <button
                type="submit"
                style={styles.button}
                onMouseEnter={(e) =>
                  (e.target.style.background = styles.buttonHover.background)
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = styles.button.background)
                }
              >
                Register
              </button>
              <button
                type="button"
                style={styles.button}
                onMouseEnter={(e) =>
                  (e.target.style.background = styles.buttonHover.background)
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = styles.button.background)
                }
                onClick={() => navigate("/login")} // Navigate to login page
              >
                Login
              </button>
            </div>
          </form>
          {message && <p style={styles.errorMessage}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
