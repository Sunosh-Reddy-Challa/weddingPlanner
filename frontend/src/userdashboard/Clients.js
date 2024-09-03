// {import React, { useState, useEffect } from 'react';

// const Clients = () => {
//   const [acceptedAssignments, setAcceptedAssignments] = useState([]);
//   const [pendingClients, setPendingClients] = useState(0);

//   useEffect(() => {
//     const authToken = localStorage.getItem('token');
//     fetch('http://localhost:4000/api/auth/assignments', {
//       headers: {
//         'Content-Type': 'application/json',
//         'authtoken': authToken,
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         setAcceptedAssignments(data.assignments);
//       })
//       .catch(error => {
//         console.error('Error fetching accepted assignments:', error);
//       });

//     fetch('http://localhost:4000/api/auth/contactusdetails', {
//       headers: {
//         'Content-Type': 'application/json',
//         'authtoken': authToken,
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         setPendingClients(data.contacts.length);
//       })
//       .catch(error => {
//         console.error('Error fetching pending clients:', error);
//       });
//   }, []); 

//   return (
//     <div className="customer-details border rounded p-3 mb-3">
//       <h3>Customer Details</h3>

//       <div>
//         <h4>Accepted Assignments</h4>
//         <ul>
//           {acceptedAssignments.map((assignment, index) => (
//             <li key={index}>
//               {`Employee: ${assignment.employeename}, Client: ${assignment.clientname}, Status: ${assignment.status}`}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h4>Total Pending Clients</h4>
//         <p>{`Total: ${pendingClients}`}</p>
//       </div>
//     </div>
//   );
// };

// export default Clients;
import React, { useState, useEffect } from 'react';

const Clients = () => {
  const [acceptedAssignments, setAcceptedAssignments] = useState([]);
  const [totalAcceptedClients, setTotalAcceptedClients] = useState(0);
  const [pendingClients, setPendingClients] = useState(0);

  useEffect(() => {
    const authToken = localStorage.getItem('token');

    // Fetch accepted assignments
    fetch('https://mern-project-backend-opal.vercel.app/api/auth/assignments', {
      headers: {
        'Content-Type': 'application/json',
        'authtoken': authToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        setAcceptedAssignments(data.assignments);
        
        // Calculate total accepted clients
        const uniqueClients = new Set(data.assignments.map(assignment => assignment.clientname));
        setTotalAcceptedClients(uniqueClients.size);
      })
      .catch(error => {
        console.error('Error fetching accepted assignments:', error);
      });

    // Fetch pending clients
    fetch('http://localhost:4000/api/auth/contactusdetails', {
      headers: {
        'Content-Type': 'application/json',
        'authtoken': authToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        setPendingClients(data.contacts.length);
      })
      .catch(error => {
        console.error('Error fetching pending clients:', error);
      });
  }, []); 

  return (
    <div className="customer-details border rounded p-3 mb-3">
      <h3>Customer Details</h3>

      <div>
        <h4>Total Accepted Clients</h4>
        <p>{`Total: ${totalAcceptedClients}`}</p>
      </div>

      <div>
        <h4>Total Pending Clients</h4>
        <p>{`Total: ${pendingClients}`}</p>
      </div>
    </div>
  );
};

export default Clients;
