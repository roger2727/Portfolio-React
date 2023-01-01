import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Hamburger from "./components/Hamburger";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Hamburger />
    <Nav />

    <App />
    <Footer />
  </BrowserRouter>
);
