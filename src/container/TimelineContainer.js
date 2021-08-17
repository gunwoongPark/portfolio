import React, { useState, useEffect } from "react";
import Timeline from "../components/Timeline";

import { useMediaQuery } from "react-responsive";

function TimelineContainer({ sidebar, setSidebar }) {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const timeLine = [
    {
      id: 0,
      date: "2020.02 - 2020.09",
      title: "Intelligent Image Analysis Lab",
      content: "지능형 영상분석 연구실 연구원 활동",
      category: "lab",
    },

    {
      id: 1,
      date: "2020.03 - 2020.06",
      title: "셈틀꾼 멘토(C++)",
      content:
        "컴퓨터공학과 학술동아리 '셈틀꾼'에서 20학년도 2학년 부원들을 대상으로 C++ 전공과목 멘토를 진행함.",
      category: "mentor",
    },

    {
      id: 2,
      date: "2020.07 - 2020.10",
      title: "Semtle Project",
      content: "셈틀꾼 공식 홈페이지 구현 프로젝트 진행",
      category: "project",
    },

    {
      id: 3,
      date: "2020.09 - 2020.12",
      title: "셈틀꾼 멘토(C)",
      content:
        "컴퓨터공학과 학술동아리 '셈틀꾼'에서 20학년도 신입생 부원들을 대상으로 C 전공과목 멘토를 진행함.",
      category: "mentor",
    },

    {
      id: 4,
      date: "2020.09 - 2020.12",
      title: "Vueticky Note Project",
      content:
        "오픈소스 Vue를 활용한 노트와 인공지능을 결합한 노트 웹앱을 구현 프로젝트 진행",
      category: "project",
    },

    {
      id: 5,
      date: "2020.10 - 2020.12",
      title: "전공특화 멘토(C)",
      content:
        "전공특화 멘토링 C언어 멘토로 선정되어 신입생들을 대상으로 해당 분야의 이해를 돕기위한 멘토링을 진행함.",
      category: "mentor",
    },

    {
      id: 6,
      date: "2020.10 - present",
      title: "System Software Lab",
      content: "시스템 소프트웨어 연구실 연구원 활동",
      category: "lab",
    },

    {
      id: 7,
      date: "2020.12 - 2021.02",
      title: "System Software Lab",
      content:
        "레지던트 프로그램 활동을 통하여 연구실 내 연구과제, 산학과제, 특수 장비 관리, 산업체 기술지도 등의 다양한 활동을 참여하여 전공분야 역량 강화.",
      category: "lab",
    },

    {
      id: 8,
      date: "2021.02 - 2021.03",
      title: "셈틀꾼 멘토(JavaScript)",
      content:
        "컴퓨터공학과 학술동아리 '셈틀꾼'에서 전 회원들을 대상으로 자바스크립트 멘토를 진행함.",
      category: "mentor",
    },

    {
      id: 9,
      date: "2021.03 - 2021.06",
      title: "셈틀꾼 멘토(HTML, CSS, JS)",
      content:
        "컴퓨터공학과 학술동아리 '셈틀꾼'에서 전 회원들을 대상으로 웹 프로그래밍 멘토를 진행함.",
      category: "mentor",
    },

    {
      id: 10,
      date: "2021.03 - 2021.07",
      title: "YouCanDoEat Project",
      content: "외국인 대상 식자재 정보 제공 웹앱 구현 프로젝트 진행.",
      category: "project",
    },

    {
      id: 11,
      date: "2021.07 - present",
      title: "Cytoscape dev-blog Project",
      content:
        "Velog의 게시글들을 연동하여 그래프 형식으로 나타내는 개인 기술 블로그 구현 프로젝트 진행",
      category: "project",
    },

    {
      id: 12,
      date: "2021.07 - present",
      title: "Semtle Project Renewal",
      content: "셈틀꾼 홈페이지 리뉴얼 및 유지보수 작업",
      category: "project",
    },

    {
      id: 13,
      date: "2021.07 - present",
      title: "로지브라더스",
      content: "스타트업 로지브라더스 프론트 엔드 개발 업무",
      category: "company",
    },
  ];

  const [mode, setMode] = useState("");

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <Timeline
      sidebar={sidebar}
      setSidebar={setSidebar}
      timeLine={timeLine}
      mode={mode}
    />
  );
}

export default TimelineContainer;
