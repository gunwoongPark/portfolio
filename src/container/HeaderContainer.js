import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useMediaQuery } from "react-responsive";

function HeaderContainer() {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  let [pos, setPos] = useState(-1);
  let [state, setState] = useState({
    Home: {
      top: 0,
      bottom: 0,
    },
    About: {
      top: 0,
      bottom: 0,
    },
    Skills: {
      top: 0,
      bottom: 0,
    },
    Project: {
      top: 0,
      bottom: 0,
    },
  });
  let [mode, setMode] = useState("");
  let [open, setOpen] = useState(false);

  // responsive design useEffect
  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  // mouse scroll event useEffect
  useEffect(() => {
    window.addEventListener("scroll", () => setPos(window.scrollY));
  }, []);

  // browser resize event useEffect
  useEffect(() => {
    window.addEventListener("resize", () => {
      const Home = document.querySelector("#Home");
      const About = document.querySelector("#About");
      const Skills = document.querySelector("#Skills");
      const Project = document.querySelector("#Project");

      let newState = state;

      newState.Home = {
        top: Home.offsetTop,
        bottom: Home.offsetTop + Home.offsetHeight,
      };

      newState.About = {
        top: About.offsetTop - 56,
        bottom: About.offsetTop + About.offsetHeight,
      };

      newState.Skills = {
        top: Skills.offsetTop - 56,
        bottom: Skills.offsetTop + Skills.offsetHeight,
      };

      newState.Project = {
        top: Project.offsetTop - 56,
        bottom: Project.offsetTop + Project.offsetHeight,
      };

      setState(newState);
    });
  }, [state]);

  // init useEffect
  useEffect(() => {
    const Home = document.querySelector("#Home");
    const About = document.querySelector("#About");
    const Skills = document.querySelector("#Skills");
    const Project = document.querySelector("#Project");

    let newState = state;

    newState.Home = {
      top: Home.offsetTop,
      bottom: Home.offsetTop + Home.offsetHeight,
    };

    newState.About = {
      top: About.offsetTop - 56,
      bottom: About.offsetTop + About.offsetHeight,
    };

    newState.Skills = {
      top: Skills.offsetTop - 56,
      bottom: Skills.offsetTop + Skills.offsetHeight,
    };

    newState.Project = {
      top: Project.offsetTop - 56,
      bottom: Project.offsetTop + Project.offsetHeight,
    };

    setState(newState);
  }, [state]);

  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header
        Home={state.Home}
        About={state.About}
        Skills={state.Skills}
        Project={state.Project}
        pos={pos}
        mode={mode}
        open={open}
        toggleHamburger={toggleHamburger}
      />
    </>
  );
}

export default HeaderContainer;
