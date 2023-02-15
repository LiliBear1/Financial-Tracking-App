import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import Savings from "./pages/Savings";

function App() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/income" component={Income} />
            <Route path="/savings" component={Savings} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
  