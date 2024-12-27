import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import the AuthContext

const LogoutButton = () => {
  const { logout } = useContext(AuthContext); // Access logout from AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from the context
    navigate("/login"); // Redirect to the login page after logout
  };

  // Inline styling for the logout button
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "white",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "1000",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#D991B4", // Darker red when hovered
  };

  return (
    <button
      onClick={handleLogout}
      style={buttonStyle}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
      }
      onMouseOut={(e) =>
        (e.target.style.backgroundColor = buttonStyle.backgroundColor)
      }
    >
      Logout
    </button>
  );
};

export default LogoutButton;
