import Header from "./components/Header/HeaderContainer";
import Footer from "./components/Footer";
import Home from "./components/Body/Home";
import About from "./components/Body/About";
import Skills from "./components/Body/Skill/SkillsContainer";
import Project from "./components/Body/Project/ProjectContainer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: NanumSquare;
  src: local('NanumSquare_acR');
}

body{
  font-family:'NanumSquare'
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
