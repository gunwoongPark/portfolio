import React, { useState, useEffect } from "react";
import Header from "./container/HeaderContainer";
import Footer from "./container/Footer";
import Home from "./container/Home";
import About from "./container/About";
import Skills from "./container/SkillsContainer";
import Project from "./container/ProjectContainer";

import { createGlobalStyle, css } from "styled-components";

import "./App.css";

import AOS from 'aos';
import "aos/dist/aos.css";

function App () {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <GlobalStyle sidebar={sidebar} />
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Home id="Home" />
      <About id="About" />
      <Skills id="Skills" />
      <Project id="Project" />
      <Footer />
    </>
  );
}

const GlobalStyle = createGlobalStyle`

body{
  font-family: 'NanumSquare'
}
pre{
  font-family: 'NanumSquare'
}

html{
  scroll-behavior: smooth;
  ${(props) =>
    props.sidebar &&
    css`
      overflow-y: hidden;
    `}
}

body{
  -ms-overflow-style: none; 
  background: #e9ecef;
  ${(props) =>
    props.sidebar &&
    css`
      overflow-y: hidden;
    `}
}

body::-webkit-scrollbar{
  display:none;
}
`;

export default App;
