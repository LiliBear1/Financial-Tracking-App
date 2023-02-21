import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
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
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/income" element={<Income />} />
            <Route path="/savings" element={<Savings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
