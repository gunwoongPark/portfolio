import React from "react";
import Skills from "../components/Skills";

import reactIcon from "../assets/react.png";
import bootstrapIcon from "../assets/bootstrap.png";
import vueIcon from "../assets/vue.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import vuetifyIcon from "../assets/vuetify.svg";
import scIcon from "../assets/styled-components.png";
import githubIcon from "../assets/github.png";
import reduxIcon from "../assets/redux.png";
import pyIcon from "../assets/python.png";
import fbIcon from "../assets/firebase.png";

function SkillsContainer() {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Vue", icon: vueIcon },
    { name: "Vuetify", icon: vuetifyIcon },
    { name: "React", icon: reactIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "styled components", icon: scIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Python", icon: pyIcon },
    { name: "Firebase", icon: fbIcon },
  ];
  return <Skills skills={skills} />;
}

export default SkillsContainer;
