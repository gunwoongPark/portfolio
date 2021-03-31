import React, { useState, useEffect } from "react";
import ProjectPresenter from "./ProjectPresenter";
import { useMediaQuery } from "react-responsive";

import semtle1 from "../../../assets/semtle/semtle1.PNG";
import semtle2 from "../../../assets/semtle/semtle2.PNG";
import semtle3 from "../../../assets/semtle/semtle3.PNG";
import semtle4 from "../../../assets/semtle/semtle4.PNG";
import semtle5 from "../../../assets/semtle/semtle5.PNG";
import semtle6 from "../../../assets/semtle/semtle6.PNG";
import semtle7 from "../../../assets/semtle/semtle7.PNG";
import semtle8 from "../../../assets/semtle/semtle8.PNG";
import semtle9 from "../../../assets/semtle/semtle9.PNG";
import semtle10 from "../../../assets/semtle/semtle10.PNG";

import vueticky1 from "../../../assets/vueticky/vueticky1.png";
import vueticky2 from "../../../assets/vueticky/vueticky2.png";
import vueticky3 from "../../../assets/vueticky/vueticky3.png";
import vueticky4 from "../../../assets/vueticky/vueticky4.png";
import vueticky5 from "../../../assets/vueticky/vueticky5.png";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "셈틀꾼 공식 홈페이지 구현",
      info: `셈틀꾼 회원들이 사용할 수 있는 공식 홈페이지 구현함
      프로젝트 공고, 게시, 질문 사이트 등을 구현
      관리자 페이지를 통한 인원관리 구현
      Vue.js 기반, Vuetify를 사용하여 개발`,
      image: [
        semtle1,
        semtle2,
        semtle3,
        semtle4,
        semtle5,
        semtle6,
        semtle7,
        semtle8,
        semtle9,
        semtle10,
      ],
    },

    {
      id: 2,
      name: "Vueticky Note",
      info: `노트 웹앱 구현 프로젝트
      노트와 인공지능을 결합한 노트 웹앱을 구현함
      Tensorflow.js를 활용하여 
      이미지 객체 탐지를 통한 자동 태깅 기능
      Google Firebase를 적극 활용

      - Hosting을 활용한 서버 호스팅
      - Authentication을 활용한 구글 사용자 인증
      - Cloud Firestore를 활용한 가상의 DB 구축

      Vue.js 기반 Vuetify를 사용하여 개발`,
      image: [vueticky1, vueticky2, vueticky3, vueticky4, vueticky5],
    },
  ];

  let [mode, setMode] = useState("");

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <>
      <ProjectPresenter projects={projects} mode={mode} />;
    </>
  );
}

export default ProjectContainer;
