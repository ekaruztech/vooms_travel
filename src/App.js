import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Homepage from './containers/HomePage';
 

export default (
  <Router >
    <Route path='/' component={Homepage}/>
  </Router>
);