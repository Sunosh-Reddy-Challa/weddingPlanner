import React, { useState } from 'react';

const DeleteEmployee = () => {
    const [clickEvent, setClickEvent] = useState(false);
    const setDefault = () => {
        setClickEvent(false)
    }
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [searchedEmployee, setSearchedEmployee] = useState(null);
    const [confirmation, setConfirmation] = useState(false);
    const [reason, setReason] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        try {
            setLoading(true);

            const response = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/getEmployee/${employeeEmail}`);
            const data = await response.json();

            if (!data || data.error) {
                alert('Employee not found');
                setSearchedEmployee(null);
                setConfirmation(false);
            } else {
                setSearchedEmployee(data);
                setConfirmation(false);
            }
        } catch (error) {
            console.error('Error searching for employee:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            setLoading(true);

            const authToken = localStorage.getItem('token');
            const response = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/deleteEmployee/${employeeEmail}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': authToken,
                },
                body: JSON.stringify({ reason }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(`Error deleting employee: ${data.error}`);
            } else {
                setClickEvent(true);
                setSearchedEmployee(null);
                setConfirmation(false);
                setReason('');
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
            alert(`Error deleting employee: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div>
                {clickEvent && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <h3>
                            <strong>Success:</strong> The Employee Details Have been Deleted.
                        </h3>
                        <button type="button" onClick={setDefault} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )}
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Delete Employee</h1>
                    <div className="mb-3">
                        <label htmlFor="employeeEmail" className="form-label">Employee Email:</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="employeeEmail"
                                value={employeeEmail}
                                onChange={(e) => setEmployeeEmail(e.target.value)}
                            />
                            <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
                                Search
                            </button>
                        </div>
                    </div>

                    {searchedEmployee && (
                        <div>
                            <h2 className="mb-4">Delete Employee Confirmation</h2>
                            <form className="border p-4">
                                <div className="mb-3 text-center">
                                    <p className="fs-5">Email: {searchedEmployee.email}</p>
                                    <p className="fs-5">Name: {`${searchedEmployee.firstname} ${searchedEmployee.lastname}`}</p>
                                </div>
                                <div className="mb-4 text-center">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="confirmationCheckbox"
                                            checked={confirmation}
                                            onChange={() => setConfirmation(!confirmation)}
                                        />
                                        <label className="form-check-label fs-5" htmlFor="confirmationCheckbox">
                                            I am sure I want to delete this employee
                                        </label>
                                    </div>
                                </div>

                                {confirmation && (
                                    <div className="mb-4 text-center">
                                        <label htmlFor="reasonTextarea" className="form-label fs-5">Reason for Deletion:</label>
                                        <textarea
                                            className="form-control"
                                            id="reasonTextarea"
                                            rows="3"
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                        ></textarea>
                                    </div>
                                )}

                                <div className="text-center">
                                    <button
                                        className="btn btn-danger"
                                        onClick={handleDelete}
                                        disabled={!confirmation || loading}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DeleteEmployee;
