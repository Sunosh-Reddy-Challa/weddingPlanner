import React, { useState } from 'react';

function UpdateEmployee() {
    const [showalert,setShowalert] = useState(false);
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [searchedEmployee, setSearchedEmployee] = useState(null);
  const setDefault = ()=>{
    setShowalert(false)
  }
  const [updateData, setUpdateData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    salary: '',
    employeerole: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/getEmployee/${employeeEmail}`);
      const data = await response.json();

      if (!data || data.error) {
        alert('Employee not found');
        setSearchedEmployee(null);
      } else {
        setSearchedEmployee(data);
        setUpdateData({
          firstname: data.firstname,
          lastname: data.lastname,
          address: data.address || '',
          salary: data.salary || '',
          employeerole: data.employeerole || '',
        });
      }
    } catch (error) {
      console.error('Error searching for employee:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const authToken = localStorage.getItem('token');
      const response = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/updateEmployee/${searchedEmployee.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authtoken': authToken,
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log('Response:', data);

      if (data.error) {
        throw new Error(`Error updating employee: ${data.error}`);
      } else {
        setShowalert(true)
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      alert(`Error updating employee: ${error.message}`);
    } finally {
      setLoading(false);
      setSearchedEmployee(null);
      setUpdateData({
        firstname: '',
        lastname: '',
        address: '',
        salary: '',
        employeerole: '',
      });
    }
  };

  return (
    <div>
        <div>
        <div>
      {showalert&& (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <h3>
            <strong>Success:</strong> The Employee details have been updated
          </h3>
          <button type="button" onClick={setDefault} className="btn-close" data-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </div>
        </div>
    <div className="container mt-5">
      <h1 className="text-center">Update Employee</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Employee Email"
              value={employeeEmail}
              onChange={(e) => setEmployeeEmail(e.target.value)}
            />
            <button className="btn mx-2 ml-2" onClick={handleSearch} disabled={loading}>
              Check
            </button>
          </div>

          {searchedEmployee && (
            <div className="border p-3">
              <h2 className="mb-3">Update Employee Information</h2>
              <form>
                <div className="mb-3">
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateData.firstname}
                    onChange={(e) => setUpdateData({ ...updateData, firstname: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateData.lastname}
                    onChange={(e) => setUpdateData({ ...updateData, lastname: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label>Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateData.address}
                    onChange={(e) => setUpdateData({ ...updateData, address: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label>Salary:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateData.salary}
                    onChange={(e) => setUpdateData({ ...updateData, salary: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label>Employee Role:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateData.employeerole}
                    onChange={(e) => setUpdateData({ ...updateData, employeerole: e.target.value })}
                  />
                </div>
                <div>
                  <button className="btn" onClick={handleUpdate} disabled={loading}>
                    Update
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default UpdateEmployee;
