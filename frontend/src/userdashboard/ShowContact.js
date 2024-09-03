import React, { useState, useEffect } from 'react';
import ContactTable from './ContactTable';
import AssignModal from './AssignModal';

function ShowContact() {
  const [contacts, setContacts] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchContacts();
    fetchAssignments();
    fetchUsers();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const authToken = localStorage.getItem('token');
      const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/contactusdetails', {
        headers: {
          'Content-Type': 'application/json',
          'authtoken': authToken,
        },
      });
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const authToken = localStorage.getItem('token');
      const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/userdetails', {
        headers: {
          'Content-Type': 'application/json',
          'authtoken': authToken,
        },
      });
      const data = await response.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

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
      setAssignments(data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAssign = async () => {
    try {
      setLoading(true);
      const authToken = localStorage.getItem('token');
      const selectedEmployee = users.find(user => user._id === selectedEmployeeId);

      const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/postassignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authtoken': authToken,
        },
        body: JSON.stringify({
          employeename: selectedEmployee.firstname + ' ' + selectedEmployee.lastname,
          employeeemail: selectedEmployee.email,
          clientname: selectedContact.name,
          clientemail: selectedContact.email,
          clientnumber: selectedContact.number,
          message: selectedContact.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Assignment response:', data);

      if (data.success) {
        alert('Assignment created successfully');

        // Delete the contact
        const deletedContactResponse = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/deletecontactus/${selectedContact._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'authtoken': authToken,
          },
        });

        const deletedContactData = await deletedContactResponse.json();
        if (deletedContactData.success) {
          setAssignments([...assignments, data.assignment]);
          setSelectedContact(null);
          setSelectedEmployeeId('');
          fetchContacts(); // Refresh contacts after deletion
        } else {
          alert(`Error deleting contact: ${deletedContactData.message}`);
        }
      } else {
        alert(`Error creating assignment: ${data.message}`);
      }
    } catch (error) {
      console.error('Error creating assignment:', error);
      alert(`Error creating assignment: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAssignButtonClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="container mt-4">
      <h1>Contact Us Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {contacts.length === 0 ? (
            <p>No Contact Data Available.</p>
          ) : (
            <ContactTable contacts={contacts} handleAssignButtonClick={handleAssignButtonClick} />
          )}
        </>
      )}
      <AssignModal
        selectedContact={selectedContact}
        selectedEmployeeId={selectedEmployeeId}
        setSelectedEmployeeId={setSelectedEmployeeId}
        handleAssign={handleAssign}
        users={users}
        handleModalClose={() => setSelectedContact(null)} />
    </div>
  );
}

export default ShowContact;
