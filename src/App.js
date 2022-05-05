import "./style.css";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
