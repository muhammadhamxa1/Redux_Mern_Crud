import AddTutorial from "./Components/add-tutorial";
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import TutorialsList from "./Components/tutorial-list";
import Tutorial from "./Components/turtorial";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./Components/intro";
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/mine" className="navbar-brand">
          Softaims
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorial"} className="nav-link">
              Tutorial
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorial"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
          <Route path="/mine" component={Intro}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
