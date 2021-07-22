import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const SidebarBlock = styled.div`
  position: fixed;
  top: 0%;
  text-align: right;
  height: 100%;
  width: 85%;
  background: white;
  z-index: 10;

  right: ${(props) => (props.sidebar ? "0%" : "-85%")};

  transition: right 0.5s ease-out;
`;

const CloseBtn = styled.button`
  float: left;
  margin: 0.5rem 0 0 0.5rem;
  border: none;
  outline: none;
  background: white;
  border-radius: 8px;

  &:active {
    filter: brightness(85%);
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  z-index: ${(props) => (props.sidebar ? "9" : "-1")};
  opacity: ${(props) => (props.sidebar ? "1" : "0")};
  transition: opacity 0.25s ease-out;
`;

function Timeline({ sidebar, setSidebar }) {
  return (
    <>
      <DarkBackground sidebar={sidebar} />
      <SidebarBlock sidebar={sidebar}>
        <CloseBtn onClick={() => setSidebar(false)}>
          <GrClose size="30" />
        </CloseBtn>
        <Container>
          <h1>타임라인 공사중입니다!</h1>
        </Container>
      </SidebarBlock>
    </>
  );
}

export default Timeline;
