import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import { useMediaQuery } from "react-responsive";

import semtle1 from "../assets/semtle/semtle1.PNG";
import semtle2 from "../assets/semtle/semtle2.PNG";
import semtle3 from "../assets/semtle/semtle3.PNG";
import semtle4 from "../assets/semtle/semtle4.PNG";
import semtle5 from "../assets/semtle/semtle5.PNG";
import semtle6 from "../assets/semtle/semtle6.PNG";
import semtle7 from "../assets/semtle/semtle7.PNG";
import semtle8 from "../assets/semtle/semtle8.PNG";
import semtle9 from "../assets/semtle/semtle9.PNG";
import semtle10 from "../assets/semtle/semtle10.PNG";

import vueticky1 from "../assets/vueticky/vueticky1.png";
import vueticky2 from "../assets/vueticky/vueticky2.png";
import vueticky3 from "../assets/vueticky/vueticky3.png";
import vueticky4 from "../assets/vueticky/vueticky4.png";
import vueticky5 from "../assets/vueticky/vueticky5.png";

import ycde1 from "../assets/youcandoeat/main.jpg";
import ycde2 from "../assets/youcandoeat/sidebar.jpg";
import ycde3 from "../assets/youcandoeat/select.jpg";
import ycde4 from "../assets/youcandoeat/cropping.jpg";
import ycde5 from "../assets/youcandoeat/result.jpg";
import ycde6 from "../assets/youcandoeat/community.jpg";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "셈틀꾼 공식 홈페이지 구현",
      info: `금오공과대학교 컴퓨터공학과 학술 동아리 셈틀꾼 공식 홈페이지 구현
      프로젝트 공고, 게시, 질문, 사진 페이지 등을 구현
      관리자 페이지를 통한 인원관리 구현`,
      tag: ["Vue", "Vuex", "Vuetify", "Express", "MongoDB"],
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
      git: "https://github.com/semtlekkun/semtleProject-front",
      mode: "web",
      role: ["Front-end"],
    },

    {
      id: 2,
      name: "Vueticky Note",
      info: `노트 웹앱 구현 프로젝트
      노트와 인공지능을 결합한 노트 웹앱을 구현함
      Tensorflow.js를 활용하여 이미지 객체 탐지를 통한 자동 태깅 기능
      OpenWeather API를 활용하여 실시간 현위치 날씨 정보
      Google Firebase를 적극 활용`,
      tag: [
        "Vue",
        "Vuex",
        "Vuetify",
        "OpenWeatherMap",
        "Tensorflow.js",
        "Firebase",
      ],
      image: [vueticky1, vueticky2, vueticky3, vueticky4, vueticky5],
      git: "https://github.com/gunwoongPark/Vueticky-Note",
      mode: "web",
      role: ["Front-end"],
    },

    {
      id: 3,
      name: "YouCanDoEat",
      info: `외국인을 대상으로한 음식 식자재 정보 제공 웹앱 구현
      메뉴판을 촬영하여 사용자가 알고 싶은 메뉴를 직접 Cropping
      해당 음식에 들어가는 식자재 정보를 제공
      정보를 공유할 수 있는 간단한 커뮤니티`,
      tag: [
        "React",
        "Styled Components",
        "Redux",
        "Firebase",
        "PWA",
        "Django",
        "SQLite",
        "Web Crawling",
        "Kakao Vision API",
        "Naver Papago API",
      ],
      image: [ycde1, ycde2, ycde3, ycde4, ycde5, ycde6],
      git: "https://github.com/HwangYoonSeong/You_can_do_EAT",
      mode: "app",
      role: ["Front-end", "Web Crawling"],
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
      <Project projects={projects} mode={mode} />
    </>
  );
}

export default ProjectContainer;
