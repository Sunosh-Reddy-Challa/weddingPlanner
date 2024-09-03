// {import React, { useState } from 'react';

// function CreateEmployee() {
//   const [showAlert, setShowAlert] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const setDefault = () => {
//     setShowAlert(false);
//   };

//   const [employeeData, setEmployeeData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     address: '',
//     employeerole: '',
//     salary: '',
//     password: '',
//   });

//   const generatePassword = () => {
//     const password = Math.random().toString(36).slice(-10);
//     setEmployeeData((prevData) => ({ ...prevData, password }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
  
//     if (name === 'firstname') {
//       const updatedEmail = `${value.toLowerCase()}${employeeData.lastname.toLowerCase()}@destiny.com`;
//       setEmployeeData((prevData) => ({ ...prevData, email: updatedEmail, [name]: value }));
//     } else if (name === 'lastname') {
//       const updatedEmail = `${employeeData.firstname.toLowerCase()}${value.toLowerCase()}@destiny.com`;
//       setEmployeeData((prevData) => ({ ...prevData, email: updatedEmail, [name]: value }));
//     }else {
//       generatePassword();
//       setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
  
//     try {
//       const response = await fetch('http://localhost:4000/api/auth/createEmployee', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(employeeData),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const json = await response.json();
  
//       if (json.success) {
//         setShowAlert(true);
//       } else {
//         console.log(json);
//         alert(`Error: ${json.message ? json.message : 'Unknown error'}`);
//       }
//     } catch (error) {
//       console.error('Error creating employee:', error);
//       alert(`Error: ${error.message}`);
//     } finally {
//       setLoading(false);
//       setEmployeeData({
//         firstname: '',
//         lastname: '',
//         email: '',
//         address: '',
//         employeerole: '',
//         salary: '',
//         password: '',
//       });
//     }
//   };
  
  

//   return (
//     <div>
//       <div>
//         {showAlert && (
//           <div className="alert alert-success alert-dismissible fade show" role="alert">
//             <h3>
//               <strong>Success:</strong> The New Employee is Created
//             </h3>
//             <button type="button" onClick={setDefault} className="btn-close" data-dismiss="alert" aria-label="Close"></button>
//           </div>
//         )}
//       </div>
//       <div className="container">
//         <h1>Create Employee</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="firstname" className="form-label">
//               First Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstname"
//               name="firstname"
//               value={employeeData.firstname}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="lastname" className="form-label">
//               Last Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastname"
//               name="lastname"
//               value={employeeData.lastname}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={employeeData.email}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="address" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="address"
//               name="address"
//               value={employeeData.address}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="employeerole" className="form-label">
//               Employee Role
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="employeerole"
//               name="employeerole"
//               value={employeeData.employeerole}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="salary" className="form-label">
//               Salary
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="salary"
//               name="salary"
//               value={employeeData.salary}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="password"
//               name="password"
//               value={employeeData.password ? 'Password will be generated on submission' : ''}
//               readOnly
//             />
//           </div>
//           <div className="d-flex justify-content-center">
//             <button type="submit" className="btn" disabled={loading}>
//               {loading ? 'Loading...' : 'Submit'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateEmployee;}


import React, { useState } from 'react';

function CreateEmployee() {
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const setDefault = () => {
    setShowAlert(false);
  };

  const [employeeData, setEmployeeData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    employeerole: '',
    salary: '',
    password: '',
  });

  const generatePassword = () => {
    const password = Math.random().toString(36).slice(-10);
    console.log(password)
    setEmployeeData((prevData) => ({ ...prevData, password }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'firstname') {
      const updatedEmail = `${value.toLowerCase()}${employeeData.lastname.toLowerCase()}@destiny.com`;
      setEmployeeData((prevData) => ({ ...prevData, email: updatedEmail, [name]: value }));
    } else if (name === 'lastname') {
      const updatedEmail = `${employeeData.firstname.toLowerCase()}${value.toLowerCase()}@destiny.com`;
      setEmployeeData((prevData) => ({ ...prevData, email: updatedEmail, [name]: value }));
    } else {
      generatePassword();
      setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/createEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      if (json.success) {
        setShowAlert(true);
      } else {
        console.log(json);
        alert(`Error: ${json.message ? json.message : 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error creating employee:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
      setEmployeeData({
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        employeerole: '',
        salary: '',
        password: '',
      });
    }
  };

  return (
    <div className="container mt-5">
      <div>
        {showAlert && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h3>
              <strong>Success:</strong> The New Employee is Created
            </h3>
            <button type="button" onClick={setDefault} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )}
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Create Employee</h1>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={employeeData.firstname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={employeeData.lastname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={employeeData.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={employeeData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="employeerole" className="form-label">
              Employee Role
            </label>
            <input
              type="text"
              className="form-control"
              id="employeerole"
              name="employeerole"
              value={employeeData.employeerole}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control"
              id="salary"
              name="salary"
              value={employeeData.salary}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={employeeData.password ? 'Password will be generated on submission' : ''}
              readOnly
            />
          </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployee;
