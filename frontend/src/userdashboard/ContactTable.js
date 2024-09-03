import React from 'react';

function ContactTable({ contacts, handleAssignButtonClick }) {
  console.log(contacts);

  if (!contacts || contacts.length === 0) {
    return <p>No contact data available.</p>;
  }

  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Message</th>
          <th scope="col">Assign Employee</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact._id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.address}</td>
            <td>{contact.message}</td>
            <td>
              <button
                className="btn"
                onClick={() => handleAssignButtonClick(contact)}
                data-bs-toggle="modal"
                data-bs-target="#assignModal"
              >
                Assign
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
