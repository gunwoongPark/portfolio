import React, { useState, useEffect } from "react";
import HeaderPresenter from "./HeaderPresenter";

function HeaderContainer() {
  let [pos, setPos] = useState(0);
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

  useEffect(() => {
    window.addEventListener("scroll", () => setPos(window.scrollY));

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
      top: About.offsetTop,
      bottom: About.offsetTop + About.offsetHeight,
    };

    newState.Skills = {
      top: Skills.offsetTop,
      bottom: Skills.offsetTop + Skills.offsetHeight,
    };

    newState.Project = {
      top: Project.offsetTop,
      bottom: Project.offsetTop + Project.offsetHeight,
    };

    setState(newState);
  }, [state]);

  return (
    <>
      <HeaderPresenter
        Home={state.Home}
        About={state.About}
        Skills={state.Skills}
        Project={state.Project}
        pos={pos}
      />
    </>
  );
}

export default HeaderContainer;
