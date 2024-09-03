import React from 'react';

function AssignModal({ selectedContact, selectedEmployeeId, setSelectedEmployeeId, handleAssign, users, handleModalClose }) {
  const selectedEmployee = users.find(user => user._id === selectedEmployeeId);

  return (
    <div className="modal fade" id="assignModal" tabIndex="-1" aria-labelledby="assignModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="assignModalLabel">Assign Employee</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
          </div>
          <div className="modal-body">
            {selectedContact && (
              <form>
                <div className="mb-3">
                  <label htmlFor="contactName">Contact Name:</label>
                  <input type="text" className="form-control" id="contactName" value={selectedContact.name} readOnly />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactEmail">Contact Email:</label>
                  <input type="text" className="form-control" id="contactEmail" value={selectedContact.email} readOnly />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactNumber">Contact Number:</label>
                  <input type="text" className="form-control" id="contactNumber" value={selectedContact.number} readOnly />
                </div>
                <div className="mb-3">
                  <label htmlFor="employeeSelect">Assign Employee:</label>
                  <select
                    className="form-select"
                    id="employeeSelect"
                    value={selectedEmployeeId}
                    onChange={(e) => setSelectedEmployeeId(e.target.value)}
                  >
                    <option value="" disabled>Select an employee</option>
                    {users.map((user) => (
                      <option key={user._id} value={user._id}>
                        {user.firstname} {user.lastname}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClose}>Close</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAssign}
              disabled={!selectedContact || !selectedEmployeeId}
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignModal;
