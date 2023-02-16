import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import Savings from "./pages/Savings";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          {/* <Switch> */}
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
          <Route path="/savings" element={<Savings />} />
          {/* </Switch> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
