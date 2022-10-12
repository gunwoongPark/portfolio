import React from "react";
import Skills from "../components/Skills";

import reactIcon from "../assets/skills/react.png";
import vueIcon from "../assets/skills/vue.png";
import htmlIcon from "../assets/skills/html.png";
import cssIcon from "../assets/skills/css.png";
import jsIcon from "../assets/skills/js.png";
import tsIcon from "../assets/skills/typescript.png";
import scIcon from "../assets/skills/styled-components.png";
import gitIcon from "../assets/skills/git.png";
import reduxIcon from "../assets/skills/redux.png";
import sassIcon from "../assets/skills/sass.png";
import nextIcon from "../assets/skills/next.svg";
import mobxIcon from "../assets/skills/mobx.svg";

function SkillsContainer() {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Vue", icon: vueIcon },
    { name: "Sass", icon: sassIcon },
    { name: "React", icon: reactIcon },
    {
      name: "Next",
      icon: nextIcon,
    },
    { name: "MobX", icon: mobxIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "styled-components", icon: scIcon },
    { name: "Git", icon: gitIcon },
  ];
  return <Skills skills={skills} />;
}

export default SkillsContainer;
