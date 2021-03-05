import React, { useState } from "react";
import ProjectPresenter from "./ProjectPresenter";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "셈틀꾼 공식 홈페이지 구현",
      info: "셈틀꾼 회원들이 사용할 수 있는 공식 홈페이지를 구현함",
    },

    {
      id: 2,
      name: "Vueticky Note",
      info: "노트 웹앱 구현 프로젝트",
    },
  ];

  return (
    <>
      <ProjectPresenter projects={projects} />;
    </>
  );
}

export default ProjectContainer;
