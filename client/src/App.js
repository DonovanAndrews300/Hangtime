import React from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import AllHangouts from './components/AllHangouts';
import CreateHangout from './components/CreateHangout';
import UpdateHangout from './components/UpdateHangout';
import RandomHangout from './components/RandomHangout';
//import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  return(
  <Router>
    <div className = "container">
    <Route path ="/" exact component={RandomHangout}/>
    <Route path="/all" component={AllHangouts}/>
    <Route path ="/add" component={CreateHangout}/>
    <Route path ="/update" component={UpdateHangout}/>
  </div>
  </Router>
  )
}

export default App;
