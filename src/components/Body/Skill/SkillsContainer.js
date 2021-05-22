import React from "react";
import SkillsPresenter from "./SkillsPresenter";

import reactIcon from "../../../assets/react.png";
import bootstrapIcon from "../../../assets/bootstrap.png";
import vueIcon from "../../../assets/vue.png";
import htmlIcon from "../../../assets/html.png";
import cssIcon from "../../../assets/css.png";
import jsIcon from "../../../assets/js.png";
import vuetifyIcon from "../../../assets/vuetify.svg";
import sassIcon from "../../../assets/sass.png";
import githubIcon from "../../../assets/github.png";
import reduxIcon from "../../../assets/redux.png";
import pyIcon from "../../../assets/python.png";
import styledCompIcon from "../../../assets/styled-components.png"

function SkillsContainer() {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Vue", icon: vueIcon },
    { name: "Vuetify", icon: vuetifyIcon },
    { name: "React", icon: reactIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Styled components", icon: styledCompIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Sass", icon: sassIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Python", icon: pyIcon },
  ];
  return <SkillsPresenter skills={skills} />;
}

export default SkillsContainer;
