import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/admin/users"
        );
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Manage Users</h2>

      {/* Users List */}
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4 mb-4" key={user._id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Role: {user.role}</p>

                  {/* Action Buttons */}
                  <div className="d-flex justify-content-between">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminUsers;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const token = localStorage.getItem("token");
//         const { data } = await axios.get(
//           "http://localhost:5000/api/admin/users",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setUsers(data);
//       } catch (err) {
//         setError("Failed to fetch users.");
//         console.error(
//           "Error fetching users:",
//           err.response?.data || err.message
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const deleteUser = async (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         const token = localStorage.getItem("token");
//         await axios.delete(`http://localhost:5000/api/admin/users/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUsers(users.filter((user) => user._id !== id));
//       } catch (err) {
//         console.error(
//           "Error deleting user:",
//           err.response?.data || err.message
//         );
//         alert("Failed to delete user. Please try again.");
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Manage Users</h2>
//       {users.length === 0 ? (
//         <p>No users available</p>
//       ) : (
//         <div className="row">
//           {users.map((user) => (
//             <div className="col-md-4 mb-4" key={user._id}>
//               <div className="card shadow-sm border-0">
//                 <div className="card-body">
//                   <h5 className="card-title">{user.name}</h5>
//                   <p className="card-text text-muted">Email: {user.email}</p>
//                   <p className="card-text text-muted">Role: {user.role}</p>
//                   <button
//                     onClick={() => deleteUser(user._id)}
//                     className="btn btn-danger btn-sm mt-2 w-100"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;
