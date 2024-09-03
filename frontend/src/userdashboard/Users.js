import React, { useState, useEffect } from 'react';
import "./Users.css"

const Users = () => {
  const [originalUsers, setOriginalUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    try {
      const authToken = localStorage.getItem('token');

      const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/userdetails', {
        headers: {
          'Content-Type': 'application/json',
          'authtoken': authToken,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userData = await response.json();
      console.log(userData);
      setUsers(userData.users || []);
      setOriginalUsers(userData.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = () => {
    // Filter users based on the search term
    const filteredUsers = originalUsers.filter((user) =>
      `${user.firstname} ${user.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setUsers(filteredUsers);
    setCurrentPage(1); // Reset to the first page after search
  };

  const handleClear = () => {
    setSearchTerm('');
    setUsers(originalUsers);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="text-center">
      <h1>Users</h1>
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{height: "50px",width:"500px"}}
        />
        <button className="btn" style={{marginLeft: "12px"}} onClick={handleSearch}>
          Search
        </button>
      </div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
            <th scope="col">Employee Role</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.salary}</td>
              <td>{user.employeerole}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(i + 1)} className="page-link">
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="d-flex justify-content-center">
        <button className="btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Users;
