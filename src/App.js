import Header from "./components/Header/HeaderContainer";
import Footer from "./components/Footer";
import Home from "./components/Body/Home";
import About from "./components/Body/About";
import Skills from "./components/Body/Skill/SkillsContainer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef; 
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
      <Footer />
    </>
  );
}

export default App;
