import React from "react";
import Skills from "../components/Skills";

import reactIcon from "../assets/skills/react.png";
import vueIcon from "../assets/skills/vue.png";
import htmlIcon from "../assets/skills/html.png";
import cssIcon from "../assets/skills/css.png";
import jsIcon from "../assets/skills/js.png";
import tsIcon from "../assets/skills/typescript.png";
import vuetifyIcon from "../assets/skills/vuetify.svg";
import scIcon from "../assets/skills/styled-components.png";
import gitIcon from "../assets/skills/git.png";
import reduxIcon from "../assets/skills/redux.png";
import pyIcon from "../assets/skills/python.png";
import fbIcon from "../assets/skills/firebase.png";
import sassIcon from "../assets/skills/sass.png";
import bsIcon from "../assets/skills/bootstrap.png";
import wpIcon from "../assets/skills/webpack.png";

function SkillsContainer() {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Webpack", icon: wpIcon },
    { name: "Vue", icon: vueIcon },
    {
      name: "Nuxt",
      icon: "https://develop365.gitlab.io/nuxtjs-0.10.7-doc/ko/logos/nuxt-square.svg",
    },
    { name: "Vuetify", icon: vuetifyIcon },
    { name: "Sass", icon: sassIcon },
    { name: "React", icon: reactIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "styled-components", icon: scIcon },
    { name: "Bootstrap", icon: bsIcon },
    { name: "Git", icon: gitIcon },
    { name: "Python", icon: pyIcon },
    { name: "Firebase", icon: fbIcon },
  ];
  return <Skills skills={skills} />;
}

export default SkillsContainer;
