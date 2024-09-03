// StatusTable.js
import React from 'react';

function StatusTable({ assignments, handleSelect }) {
  if (!assignments || assignments.length === 0) {
    return <p>No assignment data available.</p>;
  }

  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Employee Name</th>
          <th scope="col">Employee Email</th>
          <th scope="col">Client Name</th>
          <th scope="col">Client Email</th>
          <th scope="col">Client Number</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
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
              <button
                className="btn btn-primary"
                onClick={() => handleSelect(assignment)}
                data-bs-toggle="modal"
                data-bs-target="#statusFormModal"
              >
                Select
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StatusTable;
