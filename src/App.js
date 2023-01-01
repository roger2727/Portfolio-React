import "./App.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

import Contact from "./pages/contact/Contact";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
