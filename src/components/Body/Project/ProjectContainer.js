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

import ycde1 from "../../../assets/youcandoeat/main.jpg";
import ycde2 from "../../../assets/youcandoeat/sidebar.jpg";
import ycde3 from "../../../assets/youcandoeat/select.jpg";
import ycde4 from "../../../assets/youcandoeat/cropping.jpg";
import ycde5 from "../../../assets/youcandoeat/result.jpg";
import ycde6 from "../../../assets/youcandoeat/community.jpg";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "셈틀꾼 공식 홈페이지 구현",
      info: `셈틀꾼 회원들이 사용할 수 있는 공식 홈페이지 구현함
      프로젝트 공고, 게시, 질문 사이트 등을 구현
      관리자 페이지를 통한 인원관리 구현
      
      Vue.js, Vuex, Vuetify.js
      ExpressJS, MongoDB
      
      (유지 보수 중...)`,
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
      url: "http://sbmi.iptime.org/",
      git: "https://github.com/gunwoongPark/semtleProject-front",
      mode: "web",
    },

    {
      id: 2,
      name: "Vueticky Note",
      info: `노트 웹앱 구현 프로젝트
      노트와 인공지능을 결합한 노트 웹앱을 구현함
      Tensorflow.js를 활용하여 이미지 객체 탐지를 통한 자동 태깅 기능
      OpenWeather API를 활용하여 실시간 현위치 날씨 정보
      Google Firebase를 적극 활용

      - Hosting을 활용한 서버 호스팅
      - Authentication을 활용한 구글 사용자 인증
      - Cloud Firestore를 활용한 가상의 DB 구축

      Vue.js, Vuex, Vuetify.js, OpenWeather, 
      Tensorflow.js, Firebase`,
      image: [vueticky1, vueticky2, vueticky3, vueticky4, vueticky5],
      url: "https://vueticky-note-b08f1.web.app/",
      git: "https://github.com/gunwoongPark/Vueticky-Note",
      mode: "web",
    },

    {
      id: 3,
      name: "YouCanDoEat",
      info: `외국인을 대상으로한 음식 식자재 정보 제공 웹앱 구현

      Firebase Hosting을 통한 프론트 서버 호스팅
      Firebase Authentication을 통한 로그인 기능 제공 
      로그인시 알레르기를 유발하는 대표적인 21가지 식자재를 기준으로 본인이 기피하는 식자재 선택해둘 수 있음
      메뉴판을 촬영하여 사용자가 알고 싶은 메뉴를 직접 Cropping
      추출한 메뉴를 Kakao OCR API을 통해 문자 식별
      식별된 메뉴 정보를 서버로 전송하여 해당 음식의 이름과 식자재 정보를 Naver Papago API를 통해 번역
      사용자가 미리 먹지 못하는(알레르기, 종교적 이유) 식자재를 선택해뒀을 경우 식자재 정보에서 경고 표시
      그 외에 사용자가 필요한 정보를 의사소통을 통해 얻기 위해 간단한 커뮤니티 구현
      
      ReactJS, Redux.js, Firebase, PWA
      Django, SQLite, Web Crawling
      Kakao Vision API, Naver Papago API
      
      (백 엔드 동작 X)`,
      image: [ycde1, ycde2, ycde3, ycde4, ycde5, ycde6],
      url: "https://watsin-3b4e3.web.app/",
      git: "https://github.com/HwangYoonSeong/You_can_do_EAT",
      mode: "app",
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
      <ProjectPresenter projects={projects} mode={mode} />
    </>
  );
}

export default ProjectContainer;
