import React from 'react';
import { Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './Users';
import "./Employee.css";
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';

function Employee() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sidebar">
          <nav className="nav flex-column my-2" style={{ minHeight: '100vh' }}>
            <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/employee/users">
              Users
            </Link>
            <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/employee/createemployee">
              Create Employee
            </Link>
            <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/employee/updateemployee">
              Update Employee
            </Link>
            <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/employee/deleteemployee">
              Delete Employee
            </Link>
          </nav>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/Dashboard/employee/users">
              <Users />
            </Route>
            <Route path="/Dashboard/employee/createemployee">
              <CreateEmployee />
            </Route>
            <Route path="/Dashboard/employee/updateemployee">
              <UpdateEmployee/>
            </Route>
            <Route path="/Dashboard/employee/deleteemployee">
              <DeleteEmployee/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Employee;
