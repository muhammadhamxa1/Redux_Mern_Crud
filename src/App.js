import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import AddTutorial from "./Components/add-tutorial";
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import TutorialsList from "./Components/tutorial-list";
import Tutorial from "./Components/turtorial";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            SoftAims
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Tutorial
              </Link>
            </li>
          </div>
        </nav>

        {
          <div className="container mt-3">
            <Switch>
              <Route exact path="/add" component={AddTutorial} />
              <Route
                exact
                path={["/", "/tutorials"]}
                component={TutorialsList}
              />
              <Route exact path="/tutorials/:id" component={Tutorial} />
            </Switch>
          </div>
        }
      </div>
    );
  }
}

export default App;
