import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import LayOut from "/src/shared/LayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
