import Header from "./components/Header/HeaderPresenter";
import Footer from "./components/Footer";
import Home from "./Home";
import About from "./components/Body/About";
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
      <Footer />
    </>
  );
}

export default App;
