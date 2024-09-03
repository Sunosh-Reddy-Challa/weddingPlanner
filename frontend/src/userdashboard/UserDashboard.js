import React from "react";
import Header from "./Header";
import { Route, Switch, Link } from "react-router-dom";
import Employee from "./Employee";
import Contact from "./Contact";
import Dashboard from "./Dashboard";

function UserDashboard(props) {
  return (
    <div>
      <Header setchecklogin={props.setchecklogin} checklogin={props.checklogin} />
      <Switch>
        <Route path="/Dashboard/main">
          <Dashboard />
        </Route>
        <Route path="/Dashboard/employee">
          <Employee />
        </Route>
        <Route path="/Dashboard/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default UserDashboard;
