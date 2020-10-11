import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyComponent from "./components/List";
import List from "./components/List";
import Single from "./components/Single";

function App() {
  return (
    <div className="container">


      <Router>

        <div>
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Single/">Single</Link> 
              </li>


            </ul>
          </nav>

          <Route path="/" exact component={List} />

          <Route path="/List" component={List} />
          <Route path="/Single" component={Single} />


        </div>
      </Router>

    </div>
  );
}

export default App;
