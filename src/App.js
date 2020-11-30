// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./containers/Home";
import Form from "./containers/Form";
import './App.css';
import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div>
          <span>
            <Link to="">Home </Link>|
            <Link to="/form"> Form</Link>
          </span>
          </div>
          <div>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/form">
                <Form/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
