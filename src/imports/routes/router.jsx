import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from '../frontend/App';
// import Backend from '../backend/App';  // Could be used to implement a backend down the line

const route = (
    <Router>
      <Switch>
        <Route path="/"  exact component={App} />
      </Switch>
    </Router>
  );
  
  export default route;
  