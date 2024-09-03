// StatusForm.js
import React, { useState } from 'react';

function StatusForm({ selectedAssignment }) {
  const [action, setAction] = useState('');

  const handleFormSubmit = async () => {
    const authToken = localStorage.getItem('token');
    const response = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/updatestatus/${selectedAssignment._id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'authtoken': authToken,
       },
       body: JSON.stringify({ status: action }),
     });


    alert(`Assignment ${action === 'confirm' ? 'confirmed' : 'deleted'} successfully`);
    setAction('');
  };

  return (
    <div className="modal fade" id="statusFormModal" tabIndex="-1" aria-labelledby="statusFormModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="statusFormModalLabel">Update Assignment Status</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="statusSelect">Select Action:</label>
                <select
                  className="form-select"
                  id="statusSelect"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                >
                  <option value="" disabled>Select an action</option>
                  <option value="confirm">Confirm</option>
                  <option value="delete">Delete</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleFormSubmit}
              disabled={!action}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusForm;
