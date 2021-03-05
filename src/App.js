import Header from "./components/Header/HeaderContainer";
import Footer from "./components/Footer";
import Home from "./components/Body/Home";
import About from "./components/Body/About";
import Skills from "./components/Body/Skill/SkillsContainer";
import Project from "./components/Body/Project/ProjectContainer";
import { createGlobalStyle } from "styled-components";
// import Media from "./MediaQuery";

const GlobalStyle = createGlobalStyle`
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
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />
      {/* <Media /> */}
    </>
  );
}

export default App;
