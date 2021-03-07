import React from "react";
import ProjectPresenter from "./ProjectPresenter";

import img1 from "../../../assets/vueticky1.png";
import img2 from "../../../assets/vueticky2.png";
import img3 from "../../../assets/vueticky3.png";
import img4 from "../../../assets/vueticky4.png";
import img5 from "../../../assets/vueticky5.png";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "셈틀꾼 공식 홈페이지 구현",
      info: "셈틀꾼 회원들이 사용할 수 있는 공식 홈페이지 구현",
      image: [img1, img2, img3, img4, img5],
    },

    {
      id: 2,
      name: "Vueticky Note",
      info: "노트 웹앱 구현 프로젝트",
      image: [img1, img2, img3, img4, img5],
    },
  ];

  return (
    <>
      <ProjectPresenter projects={projects} />;
    </>
  );
}

export default ProjectContainer;
