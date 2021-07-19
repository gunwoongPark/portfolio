import Header from "./container/HeaderContainer";
import Footer from "./container/Footer";
import Home from "./container/Home";
import About from "./container/About";
import Skills from "./container/SkillsContainer";
import Project from "./container/ProjectContainer";

import { createGlobalStyle } from "styled-components";

import "./App.css";

const GlobalStyle = createGlobalStyle`

body{
  font-family: 'NanumSquare'
}
pre{
  font-family: 'NanumSquare'
}

html{
  scroll-behavior: smooth;
}

body{
  -ms-overflow-style: none; 
  background: #e9ecef; 
}

body::-webkit-scrollbar{
  display:none;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home id="Home" />
      <About id="About" />
      <Skills id="Skills" />
      <Project id="Project" />
      <Footer />
    </>
  );
}

export default App;
