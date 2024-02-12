import React from "react";
import Menubar from "./components/Menubar";
import Content from "./components/Content";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Education from "./components/pages/Education";
import Aboutme from "./components/pages/Aboutme";

function App() {
  return (
    <>
      <Router>
        <Menubar />

        <Routes>
          <Route path="/" Component={Content} />
          <Route path="/" Component={Sections} />
          <Route path="/" Component={Footer} />
          <Route path="/aboutme" Component={Aboutme} />
          <Route path="/education" Component={Education} />
          <Route path="/projects" Component={Projects} />
          <Route path="/skills" Component={Skills} />
        </Routes>
      </Router>
    </>
  );
}

export default App;