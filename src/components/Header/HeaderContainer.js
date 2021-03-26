import React, { useState, useEffect } from "react";
import HeaderPresenter from "./HeaderPresenter";

function HeaderContainer() {
  let [scrollState, setScrollState] = useState({
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

    cur: 0,
  });

  useEffect(() => {
    let newState = scrollState;

    const Home = document.querySelector("#Home");
    const About = document.querySelector("#About");
    const Skills = document.querySelector("#Skills");
    const Project = document.querySelector("#Project");

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

    newState.cur = window.scrollY;

    setScrollState(newState);
  }, [scrollState]);

  return (
    <HeaderPresenter
      scrollState={scrollState}
      setScrollState={setScrollState}
    />
  );
}

export default HeaderContainer;
