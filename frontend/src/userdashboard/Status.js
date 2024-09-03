import React, { useState, useEffect } from 'react';

function Status() {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetchAssignments();
    }, []);
  
    const fetchAssignments = async () => {
      try {
        setLoading(true);
        const authToken = localStorage.getItem('token');
        const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/assignments', {
          headers: {
            'Content-Type': 'application/json',
            'authtoken': authToken,
          },
        });
        const data = await response.json();
        setAssignments(data.assignments || []);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleUpdateStatus = async (assignmentId, newStatus) => {
      try {
        setLoading(true);
        const authToken = localStorage.getItem('token');
  
        if (newStatus === 'confirm') {
          const response = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/updatestatus/${assignmentId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'authtoken': authToken,
            },
            body: JSON.stringify({ status: newStatus }),
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const updatedAssignment = await response.json();
          setAssignments(assignments.map(a => (a._id === updatedAssignment._id ? updatedAssignment : a)));
        } else {
          await handleDeleteAssignment(assignmentId);
        }
      } catch (error) {
        console.error('Error updating status:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleDeleteAssignment = async (assignmentId) => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/deleteassignment/${assignmentId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'authtoken': authToken,
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setAssignments(assignments.filter(a => a._id !== assignmentId));
      } catch (error) {
        console.error('Error deleting assignment:', error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="container mt-4">
        <h1>Assignment Status</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee Email</th>
                <th scope="col">Client Name</th>
                <th scope="col">Client Email</th>
                <th scope="col">Client Number</th>
                <th scope="col">Status</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td>{assignment.employeename}</td>
                  <td>{assignment.employeeemail}</td>
                  <td>{assignment.clientname}</td>
                  <td>{assignment.clientemail}</td>
                  <td>{assignment.clientnumber}</td>
                  <td>{assignment.status}</td>
                  <td>
                    {assignment.status === 'confirm' ? (
                      <>
                        <button onClick={() => handleDeleteAssignment(assignment._id,"delete")}>Delete</button>
                      </>
                    ) : (
                        <>
                      <button onClick={() => handleDeleteAssignment(assignment._id,"delete")}>Delete</button>
                      <button className="mx-1" onClick={() => handleUpdateStatus(assignment._id, 'confirm')}>Confirm</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  export default Status;
  
