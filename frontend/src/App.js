// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDashboard from "./userdashboard/UserDashboard";
import Main from "./Main";

function App() {
  const [checklogin, setchecklogin] = useState(false);
  return (
    <div>
      <Router>
        <Route path="/">
          {!checklogin && <Main setchecklogin={setchecklogin} checklogin={checklogin}/>}
        </Route>
        <Route path="/Dashboard">
          {checklogin && <UserDashboard setchecklogin={setchecklogin} checklogin={checklogin}/>}
        </Route>
      </Router>
    </div>
  );
}

export default App;
