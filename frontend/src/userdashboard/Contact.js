import React from 'react';
import { Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import ShowContact from './ShowContact';
import Status from './Status';

function Employee() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sidebar">
          <nav className="nav flex-column my-2" style={{ minHeight: '100vh' }}>
            <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/contact/showcontact">
              Show Contacts
            </Link>
            <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/contact/status">
              Status
            </Link>
          </nav>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/Dashboard/contact/showcontact">
              <ShowContact/>
            </Route>
            <Route path="/Dashboard/contact/status">
              <Status/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Employee;
