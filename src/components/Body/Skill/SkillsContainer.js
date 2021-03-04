import React from "react";
import SkillsPresenter from "./SkillsPresenter";

import reactIcon from "../../../assets/react.png";
import bootstrapIcon from "../../../assets/bootstrap.svg";
import vueIcon from "../../../assets/vue.png";
import htmlIcon from "../../../assets/html.png";
import cssIcon from "../../../assets/css.png";
import jsIcon from "../../../assets/js.png";
import vuetifyIcon from "../../../assets/vuetify.svg";
import sassIcon from "../../../assets/sass.png";
import githubIcon from "../../../assets/github.png";
import tsIcon from "../../../assets/typescript.png";
import reduxIcon from "../../../assets/redux.png";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Vue", icon: vueIcon },
  { name: "Vuetify", icon: vuetifyIcon },
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Sass", icon: sassIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Redux", icon: reduxIcon },
];

function SkillsContainer() {
  return <SkillsPresenter skills={skills} />;
}

export default SkillsContainer;
