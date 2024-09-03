import React from 'react';
import { Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Overview from './Overview';
import WriteEarning from './WriteEarning';

// Dashboard.js
function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sidebar">
          <nav className="nav flex-column my-2" style={{ minHeight: '100vh' }}>
            <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/main/overview">
              Overview
            </Link>
            <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/main/writeearning">
              Write Earning
            </Link>
          </nav>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/Dashboard/main/overview">
              <Overview />
            </Route>
            <Route path="/Dashboard/main/writeearning">
              <WriteEarning />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
